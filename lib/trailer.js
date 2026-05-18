/**
 * ─── trailer.js ────────────────────────────────────────────────────────────
 * Reusable Trailer Component for FlimBox
 *
 * Renders a full "Watch Trailer" section into any DOM container.
 * Handles loading state, error state, and lazy-loaded iframe embed.
 *
 * Dependencies:
 *   - lib/youtube.js must be loaded before this file (provides window.FlimBoxYT)
 *
 * Usage:
 *   const tc = new TrailerComponent('#trailer-slot');
 *   await tc.load('Mortal Kombat II');
 *   // or: tc.destroy() to remove and clean up
 * ────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── COMPONENT CLASS ─────────────────────────────────────────────────────────

class TrailerComponent {
  /**
   * @param {string | HTMLElement} container
   *   CSS selector or DOM element to render the trailer section into.
   */
  constructor(container) {
    this._root = typeof container === 'string'
      ? document.querySelector(container)
      : container;

    if (!this._root) {
      console.error('[TrailerComponent] Container not found:', container);
      return;
    }

    // Abort controller for potential future fetch cancellation
    this._abortCtrl = null;
    // Keep track of the current movie to avoid redundant reloads
    this._currentMovie = null;
  }

  // ─── PUBLIC API ────────────────────────────────────────────────────────────

  /**
   * Load and render a trailer for the given movie title.
   * Calling this again with the same title is a no-op (cache hit).
   *
   * @param {string} movieTitle
   * @returns {Promise<void>}
   */
  async load(movieTitle) {
    if (!this._root) return;
    if (this._currentMovie === movieTitle) return; // already rendered
    this._currentMovie = movieTitle;

    this._renderLoading();

    const ytApi = window.FlimBoxYT;
    if (!ytApi) {
      this._renderError('YouTube module not loaded.');
      return;
    }

    try {
      const trailer = await ytApi.getMovieTrailer(movieTitle);
      if (trailer) {
        this._renderTrailer(trailer);
      } else {
        this._renderNoTrailer();
      }
    } catch (err) {
      console.error('[TrailerComponent] Unexpected error:', err);
      this._renderError('Failed to load trailer. Please try again later.');
    }
  }

  /**
   * Remove the component's HTML and reset state.
   */
  destroy() {
    if (this._root) this._root.innerHTML = '';
    this._currentMovie = null;
  }

  // ─── PRIVATE RENDERERS ─────────────────────────────────────────────────────

  /** Show pulsing skeleton while the API request is in-flight. */
  _renderLoading() {
    this._root.innerHTML = `
      <div class="trailer-section" id="trailerSection" aria-label="Trailer loading">
        <div class="trailer-header">
          <span class="trailer-header-icon">🎬</span>
          <h2 class="trailer-title">Watch Trailer</h2>
        </div>
        <div class="trailer-skeleton" aria-busy="true" aria-label="Loading trailer…">
          <div class="trailer-skeleton-inner">
            <div class="trailer-skeleton-icon">▶</div>
            <div class="trailer-skeleton-text">Fetching trailer…</div>
          </div>
        </div>
      </div>`;
  }

  /**
   * Render the full trailer embed with thumbnail, title, and iframe.
   * The iframe uses loading="lazy" for performance.
   * @param {import('./lib/youtube.js').TrailerResult} trailer
   */
  _renderTrailer(trailer) {
    // Escape title for HTML attribute safety
    const safeTitle = this._escHtml(trailer.title);
    const safeThumb = this._escHtml(trailer.thumbnail);
    const safeEmbed = this._escHtml(trailer.embedUrl);
    const safeWatch = this._escHtml(trailer.watchUrl);

    this._root.innerHTML = `
      <div class="trailer-section" id="trailerSection" aria-label="Watch Trailer">

        <div class="trailer-header">
          <span class="trailer-header-icon">🎬</span>
          <h2 class="trailer-title">Watch Trailer</h2>
          <a href="${safeWatch}" target="_blank" rel="noopener noreferrer"
             class="trailer-yt-link" aria-label="Open on YouTube">
            <svg class="trailer-yt-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0f"/>
            </svg>
            Watch on YouTube
          </a>
        </div>

        <div class="trailer-embed-wrap">
          <div class="trailer-thumbnail-overlay" id="trailerThumbOverlay"
               role="button" tabindex="0"
               aria-label="Play trailer: ${safeTitle}"
               onclick="FlimBoxTrailer.playInline(this)"
               onkeydown="if(event.key==='Enter'||event.key===' ')FlimBoxTrailer.playInline(this)">
            <img
              src="${safeThumb}"
              alt="Thumbnail for ${safeTitle}"
              class="trailer-thumbnail"
              loading="lazy"
            />
            <div class="trailer-play-btn" aria-hidden="true">
              <svg viewBox="0 0 68 48" width="68" height="48">
                <path class="yt-play-bg"
                  d="M66.5 7.7c-.8-2.9-3-5.1-5.8-5.8C55.9.1 34 0 34 0S12.1.1 7.3 1.9C4.5 2.6 2.3 4.8 1.5 7.7 0 12.8 0 24 0 24s0 11.2 1.5 16.3c.8 2.9 3 5.1 5.8 5.8C12.1 47.9 34 48 34 48s21.9-.1 26.7-1.9c2.8-.7 5-2.9 5.8-5.8C68 35.2 68 24 68 24s0-11.2-1.5-16.3z"/>
                <path class="yt-play-arrow" d="M45 24 27 14v20z"/>
              </svg>
            </div>
            <div class="trailer-thumb-title">${safeTitle}</div>
          </div>

          <!-- Actual iframe — injected on click to avoid auto-loading -->
          <div class="trailer-iframe-wrap" id="trailerIframeWrap" style="display:none;">
            <iframe
              id="trailerIframe"
              src="${safeEmbed}&autoplay=1"
              title="${safeTitle}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
              class="trailer-iframe"
            ></iframe>
          </div>
        </div>

        <div class="trailer-meta">
          <span class="trailer-meta-icon">📺</span>
          <span class="trailer-video-title">${safeTitle}</span>
        </div>

      </div>`;
  }

  /** Shown when the API returns no results for this movie. */
  _renderNoTrailer() {
    this._root.innerHTML = `
      <div class="trailer-section trailer-section--empty" id="trailerSection" aria-label="No trailer available">
        <div class="trailer-header">
          <span class="trailer-header-icon">🎬</span>
          <h2 class="trailer-title">Watch Trailer</h2>
        </div>
        <div class="trailer-empty">
          <div class="trailer-empty-icon">📽️</div>
          <div class="trailer-empty-msg">No trailer available</div>
          <div class="trailer-empty-sub">Trailer not found on YouTube for this title.</div>
        </div>
      </div>`;
  }

  /**
   * Shown on API / network errors.
   * @param {string} [message]
   */
  _renderError(message = 'Could not load trailer.') {
    this._root.innerHTML = `
      <div class="trailer-section trailer-section--error" id="trailerSection" aria-label="Trailer error">
        <div class="trailer-header">
          <span class="trailer-header-icon">🎬</span>
          <h2 class="trailer-title">Watch Trailer</h2>
        </div>
        <div class="trailer-empty">
          <div class="trailer-empty-icon">⚠️</div>
          <div class="trailer-empty-msg">${this._escHtml(message)}</div>
        </div>
      </div>`;
  }

  // ─── UTILITY ───────────────────────────────────────────────────────────────

  /** Basic HTML-escape to prevent XSS from API responses. */
  _escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

// ─── STATIC HELPERS (called from inline onclick) ─────────────────────────────

/**
 * Hide the thumbnail overlay and show the lazy iframe when user clicks Play.
 * Exposed on window.FlimBoxTrailer so onclick attributes can reach it.
 * @param {HTMLElement} overlayEl - The thumbnail overlay element
 */
function playInline(overlayEl) {
  const wrap = document.getElementById('trailerIframeWrap');
  if (!wrap) return;
  overlayEl.style.display = 'none';
  wrap.style.display = 'block';
  // Focus iframe for keyboard accessibility
  const iframe = document.getElementById('trailerIframe');
  if (iframe) iframe.focus();
}

// ─── EXPOSE TO WINDOW ────────────────────────────────────────────────────────

if (typeof window !== 'undefined') {
  window.TrailerComponent = TrailerComponent;
  window.FlimBoxTrailer   = { playInline };
}
