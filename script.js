
'use strict';

// ─── DATA ───────────────────────────────────────────────────────────────────
const movies = [
  { id:'lukkhe', title:'Lukkhe (Season 1)', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/lukkhe.webp', year:2026, type:'WEB-DL', quality:'4K 1080p 720p 480p', lang:'Hindi DD5.1', genre:'Drama', category:'webseries', source:'Amazon Prime Video', rating:'8.5', desc:'A gripping drama series from Amazon Prime Video following a young man caught between ambition and loyalty in the streets of Kolkata.', badge:'NEW', badgeColor:'#00c853',
    sizes:[{q:'360p',codec:'x264',size:'450MB',speed:'~5 MB/s',cls:'q-360'},{q:'480p',codec:'x264',size:'1.1GB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'2.7GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'x264',size:'6.2GB',speed:'~10 MB/s',cls:'q-1080'},{q:'4K',codec:'HEVC',size:'32.6GB',speed:'~15 MB/s',cls:'q-4k'}]},
  { id:'fantasy', title:'Fantasy Life', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/fantacylife.webp', year:2026, type:'WEB-DL', quality:'1080p 720p 480p', lang:'Hindi DD2.0 & English', genre:'Comedy', category:'hollywood', source:'OTT', rating:'7.8', desc:'A quirky comedy about modern life, unconventional relationships and the pursuit of happiness.', badge:'4K', badgeColor:'#f5c518',
    sizes:[{q:'480p',codec:'x264',size:'750MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'1.5GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'3.4GB',speed:'~10 MB/s',cls:'q-1080'}]},
  { id:'lake', title:'Lake George', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/lake%20geroge.webp', year:2024, type:'WEB-DL', quality:'1080p 720p 480p', lang:'Hindi DD5.1 & English', genre:'Thriller', category:'hollywood', source:'OTT', rating:'6.9', desc:'A tense thriller set against a lakeside backdrop where secrets unravel and danger lurks beneath the surface.', badge:'HD', badgeColor:'',
    sizes:[{q:'480p',codec:'x264',size:'600MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'1.2GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'2.8GB',speed:'~10 MB/s',cls:'q-1080'}]},
  { id:'mk2', title:'Mortal Kombat II', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/mortal%20combate.webp', year:2026, type:'HQ-HDTC', quality:'1080p 720p 480p', lang:'Hindi-English-Tamil-Telugu', genre:'Action', category:'hollywood', source:'Theatre Rip', rating:'7.2', desc:'The warriors of Earthrealm return for another brutal tournament. Blood will spill. Fatalities await.', badge:'CAM', badgeColor:'#555',
    sizes:[{q:'480p',codec:'x264',size:'900MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264/HEVC',size:'2.1GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'4.5GB',speed:'~10 MB/s',cls:'q-1080'}]},
  { id:'single', title:'No Place to Be Single', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/no%20place%20to%20bi%20single.webp', year:2026, type:'WEB-DL', quality:'4K 1080p 720p 480p', lang:'Hindi DD5.1 & English', genre:'Romance', category:'hollywood', source:'OTT', rating:'7.4', desc:'A heartfelt romantic comedy about finding love in the most unexpected place — the Tuscan countryside.', badge:'4K', badgeColor:'#f5c518',
    sizes:[{q:'480p',codec:'x264',size:'700MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'1.4GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'3.1GB',speed:'~10 MB/s',cls:'q-1080'},{q:'4K',codec:'HEVC',size:'15.2GB',speed:'~15 MB/s',cls:'q-4k'}]},
  { id:'amaran', title:'Amaran', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Amaran.jpg', year:2024, type:'WEB-DL', quality:'4K 1080p 720p 480p', lang:'Hindi DD5.1', genre:'Action', category:'south', source:'OTT', rating:'8.3', desc:'The true story of Major Mukund Varadarajan, a decorated Indian Army officer who gave his life for the nation.', badge:'NEW', badgeColor:'#00c853',
    sizes:[{q:'480p',codec:'x264',size:'1.2GB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'2.5GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'5.8GB',speed:'~10 MB/s',cls:'q-1080'},{q:'4K',codec:'HEVC',size:'22GB',speed:'~15 MB/s',cls:'q-4k'}]},
  { id:'mohiniyattam', title:'Mohiniyattam 2', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Mohiniataym.webp', year:2026, type:'WEB-DL', quality:'1080p 720p 480p', lang:'Hindi & Tamil', genre:'Drama', category:'south', source:'OTT', rating:'7.1', desc:'A continuation of the beloved South Indian drama exploring art, love, and sacrifice through classical dance.', badge:'HD', badgeColor:'',
    sizes:[{q:'480p',codec:'x264',size:'800MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'1.6GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'3.8GB',speed:'~10 MB/s',cls:'q-1080'}]},
  { id:'taskaree', title:'Taskaree', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Taskaree.webp', year:2025, type:'WEB-DL', quality:'4K 1080p 720p 480p', lang:'Hindi DD5.1', genre:'Thriller', category:'bollywood', source:'OTT', rating:'7.9', desc:'A high-stakes heist thriller from Bollywood featuring master criminals and one last job.', badge:'4K', badgeColor:'#f5c518',
    sizes:[{q:'480p',codec:'x264',size:'950MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'2.0GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'4.8GB',speed:'~10 MB/s',cls:'q-1080'},{q:'4K',codec:'HEVC',size:'18GB',speed:'~15 MB/s',cls:'q-4k'}]},
  { id:'caught', title:'Caught Stealing', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/caught%20Stealing.webp', year:2025, type:'WEB-DL', quality:'1080p 720p 480p', lang:'Hindi DD5.1 & English', genre:'Action', category:'hollywood', source:'OTT', rating:'7.3', desc:'A bartender thrust into a dangerous world of crime and corruption in New York City.', badge:'HD', badgeColor:'',
    sizes:[{q:'480p',codec:'x264',size:'750MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'1.5GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'3.2GB',speed:'~10 MB/s',cls:'q-1080'}]},
  { id:'120', title:'120 Bahadur', poster:'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/120%20Bhadur.webp', year:2025, type:'WEB-DL', quality:'1080p 720p 480p', lang:'Hindi DD5.1', genre:'Action', category:'bollywood', source:'OTT', rating:'8.0', desc:'The heroic tale of 120 soldiers who fought against insurmountable odds defending their nation.', badge:'NEW', badgeColor:'#00c853',
    sizes:[{q:'480p',codec:'x264',size:'900MB',speed:'~5 MB/s',cls:'q-480'},{q:'720p',codec:'x264',size:'2.0GB',speed:'~8 MB/s',cls:'q-720'},{q:'1080p',codec:'HEVC',size:'4.2GB',speed:'~10 MB/s',cls:'q-1080'}]},
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentFilter = 'all';
let currentPage = 1;
const ITEMS_PER_PAGE = 10;
const TOTAL_PAGES = 976;

// ─── LAZY IMAGE LOADER ────────────────────────────────────────────────────────
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const img = e.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.remove('img-placeholder');
      }
      imgObserver.unobserve(img);
    }
  });
}, { rootMargin: '200px' });

function lazyImg(src, alt, cls) {
  return `<img data-src="${src}" alt="${alt}" class="img-placeholder ${cls||''}" style="width:100%;height:100%;object-fit:cover;">`;
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderMovies(list, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = list.map(m => `
    <div class="movie-card" onclick="openDownloadModal('${m.id}')" role="listitem" tabindex="0"
      onkeydown="if(event.key==='Enter')openDownloadModal('${m.id}')">
      <div class="movie-poster">
        ${lazyImg(m.poster, m.title)}
        <div class="movie-overlay"><div class="play-btn">⬇</div></div>
        ${m.badge ? `<div class="quality-badge ${m.badge==='CAM'?'cam':m.badge==='4K'||m.badge==='HD'?'hd':''}">${m.badge}</div>` : ''}
        ${m.source ? `<div class="new-badge" style="background:${m.badgeColor||'#00c853'}">${m.type}</div>` : ''}
      </div>
      <div class="movie-info">
        <div class="movie-title">${m.title} (${m.year})</div>
        <div class="movie-meta">
          <span class="lang">${m.lang.split(' ')[0]}</span>
          <span>${m.quality.split(' ')[0]}</span>
          <span>⭐${m.rating}</span>
        </div>
      </div>
    </div>`).join('');
  grid.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

function renderPagination(total, current) {
  const pag = document.getElementById('pagination');
  if (!pag) return;
  let html = '';
  if (current > 1) html += `<button class="page-btn" onclick="goPage(${current-1})">◀ Prev</button>`;
  html += `<button class="page-btn ${current===1?'active':''}" onclick="goPage(1)">1</button>`;
  if (current > 4) html += `<button class="page-btn dots">...</button>`;
  const start = Math.max(2, current-1), end = Math.min(total-1, current+1);
  for (let i = start; i <= end; i++) html += `<button class="page-btn ${i===current?'active':''}" onclick="goPage(${i})">${i}</button>`;
  if (current < total-3) html += `<button class="page-btn dots">...</button>`;
  if (total > 1) html += `<button class="page-btn ${current===total?'active':''}" onclick="goPage(${total})">${total}</button>`;
  if (current < total) html += `<button class="page-btn next-btn" onclick="goPage(${current+1})">Next ▶</button>`;
  pag.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderMovies(movies, 'movieGrid');
  renderPagination(TOTAL_PAGES, currentPage);
  document.getElementById('mainGrid').scrollIntoView({ behavior:'smooth' });
}

function filterCategory(cat, el) {
  currentFilter = cat;
  currentPage = 1;
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  if (el) el.classList.add('active');
  const filtered = movies.filter(m => m.category === cat);
  const titleEl = document.querySelector('#mainGrid .section-title');
  if (titleEl) titleEl.lastChild.textContent = ` ${cat.toUpperCase()} Movies`;
  renderMovies(filtered.length ? filtered : movies, 'movieGrid');
  renderPagination(Math.max(1, Math.ceil((filtered.length||movies.length)/ITEMS_PER_PAGE)), 1);
  document.getElementById('mainGrid').scrollIntoView({ behavior:'smooth' });
  if (event) event.preventDefault();
}

function resetFilter(e) {
  if (e) e.preventDefault();
  currentFilter = 'all';
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('navHome').classList.add('active');
  const titleEl = document.querySelector('#mainGrid .section-title');
  if (titleEl) titleEl.lastChild.textContent = ' Latest Releases';
  renderMovies(movies, 'movieGrid');
  renderPagination(TOTAL_PAGES, 1);
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  currentPage = 1;
  if (!q) { renderMovies(movies,'movieGrid'); renderPagination(TOTAL_PAGES,1); return; }
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q) || m.lang.toLowerCase().includes(q)
  );
  if (filtered.length) {
    renderMovies(filtered,'movieGrid');
    renderPagination(Math.max(1,Math.ceil(filtered.length/ITEMS_PER_PAGE)),1);
  } else {
    document.getElementById('movieGrid').innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px">
        <div style="font-size:60px;margin-bottom:16px">😔</div>
        <div style="color:#fff;font-size:28px;font-family:'Bebas Neue',sans-serif;letter-spacing:2px">MOVIE NOT AVAILABLE</div>
        <div style="color:#888;margin-top:10px;font-size:14px">"${q}" is currently unavailable. <a href="#" style="color:var(--accent)" onclick="resetFilter(event)">Browse All</a></div>
      </div>`;
    document.getElementById('pagination').innerHTML = '';
  }
}

// ─── INFO MODAL ───────────────────────────────────────────────────────────────
function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  document.getElementById('modalTitle').textContent = `${m.title} (${m.year}) ${m.type} [${m.lang}]`;
  document.getElementById('modalBody').innerHTML = `
    <div class="movie-details-grid">
      <div class="detail-poster"><img src="${m.poster}" alt="${m.title}" loading="lazy" style="width:100%;aspect-ratio:2/3;object-fit:cover;border-radius:4px;display:block;"></div>
      <div class="detail-info">
        <table>
          <tr><td>Rating</td><td>⭐ ${m.rating}/10</td></tr>
          <tr><td>Genre</td><td>${m.genre}</td></tr>
          <tr><td>Language</td><td>${m.lang}</td></tr>
          <tr><td>Quality</td><td><span style="color:var(--accent)">${m.type}</span> ${m.quality}</td></tr>
          <tr><td>Source</td><td>${m.source}</td></tr>
          <tr><td>Year</td><td>${m.year}</td></tr>
        </table>
        <p style="margin-top:12px;font-size:13px;color:var(--muted);line-height:1.6">${m.desc}</p>
      </div>
    </div>
    <div style="text-align:center;margin-top:20px">
      <button onclick="closeModal();openDownloadModal('${m.id}')" style="background:var(--accent);color:#fff;border:none;padding:14px 32px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:16px;letter-spacing:1px;cursor:pointer;border-radius:4px;transition:all .2s">⬇ SELECT DOWNLOAD QUALITY</button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnBg(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ─── DOWNLOAD QUALITY MODAL ───────────────────────────────────────────────────
const qualityColors = { '4K':'q-4k-c', '2K':'q-2k-c', '1080p':'q-1080-c', '720p':'q-720-c', '480p':'q-480-c', '360p':'q-360-c' };

function openDownloadModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  document.getElementById('dqTitle').textContent = m.title;
  const body = document.getElementById('dqBody');
  body.innerHTML = m.sizes.map((s,i) => {
    const qKey = s.q.split(' ')[0];
    const colorCls = qualityColors[qKey] || 'q-480-c';
    return `
      <div class="dq-option" id="dqopt_${id}_${i}" onclick="startDownload('${id}',${i},'${m.title}','${s.q}')">
        <div class="dq-badge ${colorCls}">${s.q}</div>
        <div class="dq-info">
          <div class="dq-info-row">
            <span class="dq-size">${s.size}</span>
            ${s.codec ? `<span class="dq-codec">${s.codec}</span>` : ''}
            <span class="dq-speed">🚀 ${s.speed}</span>
          </div>
          <div class="dq-progress-wrap" id="prog_${id}_${i}"><div class="dq-progress-bar" id="bar_${id}_${i}"></div></div>
          <div class="dq-status" id="stat_${id}_${i}">Ready</div>
        </div>
        <div class="dq-action">
          <button class="dq-dl-btn">⬇ Download</button>
        </div>
      </div>`;
  }).join('');
  document.getElementById('dqOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDQ() {
  document.getElementById('dqOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeDQOnBg(e) {
  if (e.target === document.getElementById('dqOverlay')) closeDQ();
}

function startDownload(movieId, idx, title, quality) {
  const opt = document.getElementById(`dqopt_${movieId}_${idx}`);
  const bar = document.getElementById(`bar_${movieId}_${idx}`);
  const stat = document.getElementById(`stat_${movieId}_${idx}`);
  if (!opt || opt.classList.contains('downloading')) return;
  opt.classList.add('downloading');
  stat.textContent = 'Connecting...';
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 8 + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      bar.style.width = '100%';
      stat.textContent = '✓ Ready — Link Opens Below';
      opt.classList.remove('downloading');
      opt.classList.add('done');
      showToast(`✓ ${title} ${quality} — Download link ready!`);
      setTimeout(() => {
        showToast(`Demo: No real file hosted. Use this as a UI reference.`);
      }, 2000);
    } else {
      bar.style.width = progress + '%';
      stat.textContent = `Preparing... ${Math.floor(progress)}%`;
    }
  }, 180);
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toastNotif');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────
let currentSlide = 0;
let heroTimer;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetHeroTimer();
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goSlide(currentSlide + 1), 5000);
}

// Touch swipe for hero
(function() {
  const hero = document.getElementById('hero');
  let sx = 0;
  hero.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive:true });
  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) goSlide(dx < 0 ? currentSlide+1 : currentSlide-1);
  }, { passive:true });
})();

resetHeroTimer();

// ─── POSTER STRIP ─────────────────────────────────────────────────────────────
const strip = document.getElementById('posterStrip');
const allItems = [...Array(20)].map((_,i) => {
  const m = movies[i % movies.length];
  return `<div class="strip-item" onclick="openDownloadModal('${m.id}')"><img data-src="${m.poster}" alt="${m.title}" class="img-placeholder" style="width:100%;height:100%;object-fit:cover;"></div>`;
}).join('');
strip.innerHTML = allItems + allItems;
strip.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));

// ─── SCROLL TOP ───────────────────────────────────────────────────────────────
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive:true });

// ─── KEYBOARD ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeDQ(); }
  if (e.key === 'ArrowLeft') goSlide(currentSlide - 1);
  if (e.key === 'ArrowRight') goSlide(currentSlide + 1);
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
});

// ─── SEARCH INPUT ─────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});
document.getElementById('searchInput').addEventListener('input', function() {
  if (!this.value.trim()) { renderMovies(movies,'movieGrid'); renderPagination(TOTAL_PAGES,1); }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderMovies(movies, 'movieGrid');
renderPagination(TOTAL_PAGES, 1);
renderMovies(movies.filter(m => m.category === 'webseries'), 'webSeriesGrid');

// PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
