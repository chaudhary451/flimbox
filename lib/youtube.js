/**
 * ─── youtube.js ────────────────────────────────────────────────────────────
 * YouTube Data API v3 utility for FlimBox
 *
 * Usage:
 *   import { getMovieTrailer } from './lib/youtube.js';
 *   const trailer = await getMovieTrailer('Mortal Kombat II');
 *
 * Environment:
 *   Set YOUTUBE_API_KEY in your environment or replace the fallback below.
 *   For a plain HTML/JS site, set window.YOUTUBE_API_KEY before loading this
 *   module, or use a build tool that injects process.env.YOUTUBE_API_KEY.
 * ────────────────────────────────────────────────────────────────────────────
 */

'use strict';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

/** Resolve API key: window global → env (build tools) → empty string */
const YOUTUBE_API_KEY =
  (typeof window !== 'undefined' && window.YOUTUBE_API_KEY) ||
  (typeof process !== 'undefined' && process.env && process.env.YOUTUBE_API_KEY) ||
  '';

const YT_SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

// ─── IN-MEMORY CACHE ─────────────────────────────────────────────────────────
// Prevents duplicate API calls for the same movie within a session.
// Key: normalised movie title | Value: trailer result object or null

/** @type {Map<string, TrailerResult | null>} */
const trailerCache = new Map();

// ─── TYPES ───────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} TrailerResult
 * @property {string} videoId      - YouTube video ID (e.g. "dQw4w9WgXcQ")
 * @property {string} title        - Video title from YouTube
 * @property {string} thumbnail    - High-quality thumbnail URL
 * @property {string} embedUrl     - Full embed URL ready for an <iframe>
 * @property {string} watchUrl     - Direct YouTube watch URL
 */

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/**
 * Normalise a movie title for use as a cache key.
 * Strips year suffixes like "(2026)" and trims whitespace.
 * @param {string} title
 * @returns {string}
 */
function normaliseTitle(title) {
  return title
    .replace(/\s*\(\d{4}\)\s*/g, '')  // remove trailing year in parens
    .toLowerCase()
    .trim();
}

/**
 * Build the YouTube search query for a given movie title.
 * @param {string} title
 * @returns {string}
 */
function buildSearchQuery(title) {
  // Strip year from title for a cleaner search query
  const cleanTitle = title.replace(/\s*\(\d{4}\)\s*/g, '').trim();
  return `${cleanTitle} official trailer`;
}

// ─── MAIN API FUNCTION ───────────────────────────────────────────────────────

/**
 * Fetch the first YouTube trailer for a given movie title.
 *
 * @param {string} movieTitle - The movie title (e.g. "Mortal Kombat II")
 * @returns {Promise<TrailerResult | null>}
 *   Resolves to a TrailerResult object, or null if not found / on error.
 *
 * @example
 *   const trailer = await getMovieTrailer('Amaran');
 *   if (trailer) {
 *     console.log(trailer.embedUrl); // https://www.youtube.com/embed/VIDEO_ID
 *   }
 */
async function getMovieTrailer(movieTitle) {
  if (!movieTitle || typeof movieTitle !== 'string') return null;

  // ── 1. Check API key ──────────────────────────────────────────────────────
  if (!YOUTUBE_API_KEY) {
    console.warn('[FlimBox/youtube] YOUTUBE_API_KEY is not set. Set window.YOUTUBE_API_KEY before loading this script.');
    return null;
  }

  // ── 2. Check cache ────────────────────────────────────────────────────────
  const cacheKey = normaliseTitle(movieTitle);
  if (trailerCache.has(cacheKey)) {
    return trailerCache.get(cacheKey); // may be null (no trailer found)
  }

  // ── 3. Build request URL ──────────────────────────────────────────────────
  const params = new URLSearchParams({
    part: 'snippet',
    q: buildSearchQuery(movieTitle),
    type: 'video',
    maxResults: '1',
    key: YOUTUBE_API_KEY,
  });

  const url = `${YT_SEARCH_ENDPOINT}?${params.toString()}`;

  // ── 4. Fetch ──────────────────────────────────────────────────────────────
  let data;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Surface quota / auth errors clearly
      const errBody = await response.json().catch(() => ({}));
      const reason = errBody?.error?.message || `HTTP ${response.status}`;
      console.error(`[FlimBox/youtube] API error for "${movieTitle}": ${reason}`);
      trailerCache.set(cacheKey, null);
      return null;
    }

    data = await response.json();
  } catch (networkErr) {
    console.error(`[FlimBox/youtube] Network error for "${movieTitle}":`, networkErr);
    trailerCache.set(cacheKey, null);
    return null;
  }

  // ── 5. Parse result ───────────────────────────────────────────────────────
  const item = data?.items?.[0];
  if (!item) {
    console.info(`[FlimBox/youtube] No trailer found for "${movieTitle}".`);
    trailerCache.set(cacheKey, null);
    return null;
  }

  const videoId  = item.id?.videoId;
  const snippet  = item.snippet || {};

  if (!videoId) {
    trailerCache.set(cacheKey, null);
    return null;
  }

  /** @type {TrailerResult} */
  const result = {
    videoId,
    title:     snippet.title     || `${movieTitle} Official Trailer`,
    // Prefer high-res thumbnail; fall back through resolutions
    thumbnail: snippet.thumbnails?.high?.url
            || snippet.thumbnails?.medium?.url
            || snippet.thumbnails?.default?.url
            || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    embedUrl:  `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`,
    watchUrl:  `https://www.youtube.com/watch?v=${videoId}`,
  };

  // ── 6. Cache & return ─────────────────────────────────────────────────────
  trailerCache.set(cacheKey, result);
  return result;
}

// ─── CACHE MANAGEMENT ────────────────────────────────────────────────────────

/** Clear the entire trailer cache (useful for testing / memory management). */
function clearTrailerCache() {
  trailerCache.clear();
}

/** Remove a specific movie's cached trailer. */
function invalidateTrailerCache(movieTitle) {
  trailerCache.delete(normaliseTitle(movieTitle));
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────
// Supports both ES module imports (build tools) and plain <script> globals.

if (typeof module !== 'undefined' && module.exports) {
  // CommonJS / Node
  module.exports = { getMovieTrailer, clearTrailerCache, invalidateTrailerCache };
} else if (typeof window !== 'undefined') {
  // Browser global — attach to window so trailer.js can access it
  window.FlimBoxYT = { getMovieTrailer, clearTrailerCache, invalidateTrailerCache };
}
