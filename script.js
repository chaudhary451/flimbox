// ─── DATA ───────────────────────────────────────────────────────────────────
const movies = [
  {
    id: 'lukkhe',
    title: 'Lukkhe (Season 1)',
    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/lukkhe.webp',
    year: 2026,
    type: 'WEB-DL',
    quality: '4K 1080p 720p 480p',
    lang: 'Hindi DD5.1',
    genre: 'Drama',
    category: 'webseries',
    source: 'Amazon Prime Video',
    rating: '8.5',
    desc: 'A gripping drama series from Amazon Prime Video following a young man caught between ambition and loyalty in the streets of Kolkata.',
    colors: ['#1a0040','#0d0020'],
    badge: 'NEW',
    badgeColor: '#00c853',

    sizes: [
      { q:'480p', codec:'x264', size:'1.1GB', class:'q-480' },
      { q:'720p', codec:'x264', size:'2.7GB', class:'q-720' },
      { q:'1080p', codec:'x264', size:'6.2GB', class:'q-1080' },
      { q:'1080p WEB-DL PACK', codec:'', size:'16.8GB', class:'q-1080' },
      { q:'4K/2160p SDR WEB-DL PACK', codec:'', size:'32.6GB', class:'q-4k' },
    ]
  },

  {
    id: 'fantasy',
    title: 'Fantasy Life',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/fantacylife.webp',

    year: 2026,
    type: 'WEB-DL',
    quality: '1080p 720p 480p',
    lang: 'Hindi DD2.0 & English',
    genre: 'Comedy',
    category: 'hollywood',
    source: 'OTT',
    rating: '7.8',
    desc: 'A quirky comedy about modern life, unconventional relationships and the pursuit of happiness through unexpected means.',
    colors: ['#1a2000','#0d2000'],
    badge: '4K',
    badgeColor: '#f5c518',

    sizes: [
      { q:'480p', codec:'x264', size:'750MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'1.5GB', class:'q-720' },
      { q:'1080p 10Bit', codec:'HEVC', size:'3.4GB', class:'q-1080' },
    ]
  },

  {
    id: 'lake',
    title: 'Lake George',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/lake%20geroge.webp',

    year: 2024,
    type: 'WEB-DL',
    quality: '1080p 720p 480p',
    lang: 'Hindi DD5.1 & English',
    genre: 'Thriller',
    category: 'hollywood',
    source: 'OTT',
    rating: '6.9',
    desc: 'A tense thriller set against a lakeside backdrop where secrets unravel and danger lurks beneath the surface.',
    colors: ['#001a2a','#000d1a'],
    badge: 'HD',
    badgeColor: '',

    sizes: [
      { q:'480p', codec:'x264', size:'600MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'1.2GB', class:'q-720' },
      { q:'1080p 10Bit', codec:'HEVC', size:'2.8GB', class:'q-1080' },
    ]
  },

  {
    id: 'mk2',
    title: 'Mortal Kombat II',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/mortal%20combate.webp',

    year: 2026,
    type: 'HQ-HDTC',
    quality: '1080p 720p 480p',
    lang: 'Hindi-English-Tamil-Telugu',
    genre: 'Action',
    category: 'hollywood',
    source: 'Theatre Rip',
    rating: '7.2',
    desc: 'The warriors of Earthrealm return for another brutal tournament. Blood will spill. Fatalities await.',
    colors: ['#2a0000','#1a0000'],
    badge: 'CAM',
    badgeColor: '#555',

    sizes: [
      { q:'480p', codec:'x264', size:'900MB', class:'q-480' },
      { q:'720p', codec:'x264/HEVC', size:'2.1GB', class:'q-720' },
      { q:'1080p', codec:'HEVC', size:'4.5GB', class:'q-1080' },
    ]
  },

  {
    id: 'single',
    title: 'No Place to Be Single',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/no%20place%20to%20bi%20single.webp',

    year: 2026,
    type: 'WEB-DL',
    quality: '4K 1080p 720p 480p',
    lang: 'Hindi DD5.1 & English',
    genre: 'Romance',
    category: 'hollywood',
    source: 'OTT',
    rating: '7.4',
    desc: 'A heartfelt romantic comedy about finding love in the most unexpected place — somewhere in the Tuscan countryside.',
    colors: ['#1a1000','#0d0800'],
    badge: '4K',
    badgeColor: '#f5c518',

    sizes: [
      { q:'480p', codec:'x264', size:'700MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'1.4GB', class:'q-720' },
      { q:'1080p 10Bit', codec:'HEVC', size:'3.1GB', class:'q-1080' },
      { q:'4K/2160p SDR WEB-DL', codec:'', size:'15.2GB', class:'q-4k' },
    ]
  },

  {
    id: 'amaran',
    title: 'Amaran',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Amaran.jpg',

    year: 2024,
    type: 'WEB-DL',
    quality: '4K 1080p 720p 480p',
    lang: 'Hindi DD5.1',
    genre: 'Action',
    category: 'south',
    source: 'OTT',
    rating: '8.3',
    desc: 'The true story of Major Mukund Varadarajan, a decorated Indian Army officer who gave his life for the nation.',
    colors: ['#1a0a00','#0d0500'],
    badge: 'NEW',
    badgeColor: '#00c853',

    sizes: [
      { q:'480p', codec:'x264', size:'1.2GB', class:'q-480' },
      { q:'720p', codec:'x264', size:'2.5GB', class:'q-720' },
      { q:'1080p 10Bit', codec:'HEVC', size:'5.8GB', class:'q-1080' },
      { q:'4K/2160p', codec:'HEVC', size:'22GB', class:'q-4k' },
    ]
  },

  {
    id: 'mohiniyattam',
    title: 'Mohiniyattam 2',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Mohiniataym.webp',

    year: 2026,
    type: 'WEB-DL',
    quality: '1080p 720p 480p',
    lang: 'Hindi & Tamil',
    genre: 'Drama',
    category: 'south',
    source: 'OTT',
    rating: '7.1',
    desc: 'A continuation of the beloved South Indian drama exploring art, love, and sacrifice through classical dance.',
    colors: ['#001a1a','#000d0d'],
    badge: 'HD',
    badgeColor: '',

    sizes: [
      { q:'480p', codec:'x264', size:'800MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'1.6GB', class:'q-720' },
      { q:'1080p', codec:'HEVC', size:'3.8GB', class:'q-1080' },
    ]
  },

  {
    id: 'taskaree',
    title: 'Taskaree',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/Taskaree.webp',

    year: 2025,
    type: 'WEB-DL',
    quality: '4K 1080p 720p 480p',
    lang: 'Hindi DD5.1',
    genre: 'Thriller',
    category: 'bollywood',
    source: 'OTT',
    rating: '7.9',
    desc: 'A high-stakes heist thriller from Bollywood featuring master criminals, impossible odds, and one last job.',
    colors: ['#0a001a','#050010'],
    badge: '4K',
    badgeColor: '#f5c518',

    sizes: [
      { q:'480p', codec:'x264', size:'950MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'2.0GB', class:'q-720' },
      { q:'1080p 10Bit', codec:'HEVC', size:'4.8GB', class:'q-1080' },
      { q:'4K/2160p SDR', codec:'HEVC', size:'18GB', class:'q-4k' },
    ]
  },

  {
    id: 'caught',
    title: 'Caught Stealing',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/caught%20Stealing.webp',

    year: 2025,
    type: 'WEB-DL',
    quality: '1080p 720p 480p',
    lang: 'Hindi DD5.1 & English',
    genre: 'Action',
    category: 'hollywood',
    source: 'OTT',
    rating: '7.3',
    desc: 'A bartender is suddenly thrust into a dangerous world of crime, corruption, and survival in New York City.',
    colors: ['#1a1a00','#0d0d00'],
    badge: 'HD',
    badgeColor: '',

    sizes: [
      { q:'480p', codec:'x264', size:'750MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'1.5GB', class:'q-720' },
      { q:'1080p', codec:'HEVC', size:'3.2GB', class:'q-1080' },
    ]
  },

  {
    id: '120',
    title: '120 Bahadur',

    poster: 'https://raw.githubusercontent.com/chaudhary451/flimbox/main/images/120%20Bhadur.webp',

    year: 2025,
    type: 'WEB-DL',
    quality: '1080p 720p 480p',
    lang: 'Hindi DD5.1',
    genre: 'Action',
    category: 'bollywood',
    source: 'OTT',
    rating: '8.0',
    desc: 'The heroic tale of 120 soldiers who fought against insurmountable odds, defending the honor of their nation.',
    colors: ['#001a00','#000d00'],
    badge: 'NEW',
    badgeColor: '#00c853',

    sizes: [
      { q:'480p', codec:'x264', size:'900MB', class:'q-480' },
      { q:'720p', codec:'x264', size:'2.0GB', class:'q-720' },
      { q:'1080p', codec:'HEVC', size:'4.2GB', class:'q-1080' },
    ]
  },
];

// ─── RENDER + PAGINATION ─────────────────────────────────────────────────────
let currentFilter = 'all';
let currentSearch = '';
let currentPage = 1;
const ITEMS_PER_PAGE = 10;
const TOTAL_PAGES = 976; // simulated total

function getCardColor(m) {
  return m.colors ? m.colors[0] : '#1a1a25';
}

function genreIcon(g) {
  const icons = { Action:'⚔️', Drama:'🎭', Comedy:'😂', Thriller:'🔍', Romance:'💕', Horror:'😱', 'Sci-Fi':'🚀' };
  return icons[g] || '🎬';
}

function renderMovies(list, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = list.map(m => `
    <div class="movie-card" onclick="openModal('${m.id}')">

      <div class="movie-poster">

        <img 
          src="${m.poster}" 
          alt="${m.title}" 
          style="width:100%;height:100%;object-fit:cover;"
        >

        <div class="movie-overlay">
          <div class="play-btn">⬇</div>
        </div>

        ${m.badge ? `
          <div class="quality-badge ${m.badge === 'CAM' ? 'cam' : m.badge === '4K' || m.badge === 'HD' ? 'hd' : ''}">
            ${m.badge}
          </div>
        ` : ''}

        ${m.source ? `
          <div class="new-badge" style="background:${m.badgeColor || '#00c853'}">
            ${m.type}
          </div>
        ` : ''}

      </div>

      <div class="movie-info">

        <div class="movie-title">
          ${m.title} (${m.year})
        </div>

        <div class="movie-meta">
          <span class="lang">${m.lang.split(' ')[0]}</span>
          <span>${m.quality.split(' ')[0]}</span>
          <span>⭐${m.rating}</span>
        </div>

      </div>

    </div>
  `).join('');
}

function renderPagination(total, current) {
  const pag = document.getElementById('pagination');
  if (!pag) return;

  let html = '';

  // Prev button
  if (current > 1) {
    html += `<button class="page-btn" onclick="goPage(${current-1})">◀ Prev</button>`;
  }

  // First page
  html += `<button class="page-btn ${current===1?'active':''}" onclick="goPage(1)">1</button>`;

  if (current > 4) html += `<button class="page-btn dots">...</button>`;

  // Middle pages around current
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    html += `<button class="page-btn ${i===current?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }

  if (current < total - 3) html += `<button class="page-btn dots">...</button>`;

  // Last page
  if (total > 1) {
    html += `<button class="page-btn ${current===total?'active':''}" onclick="goPage(${total})">${total}</button>`;
  }

  // Next button
  if (current < total) {
    html += `<button class="page-btn next-btn" onclick="goPage(${current+1})">Next ▶</button>`;
  }

  pag.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  // Simulate paged data: cycle through movies array for demo
  const start = ((n - 1) % Math.ceil(movies.length / ITEMS_PER_PAGE)) * ITEMS_PER_PAGE;
  const paged = movies.slice(start % movies.length).concat(movies).slice(0, ITEMS_PER_PAGE);
  renderMovies(paged.slice(0, movies.length), 'movieGrid');
  renderPagination(TOTAL_PAGES, currentPage);
  document.getElementById('mainGrid').scrollIntoView({ behavior: 'smooth' });
}

function filterCategory(cat) {
  currentFilter = cat;
  currentPage = 1;
  const filtered = movies.filter(m => m.category === cat);
  const titleEl = document.querySelector('#mainGrid .section-title');
  if (titleEl) titleEl.childNodes[titleEl.childNodes.length-1].textContent = ` ${cat.toUpperCase()} Movies`;
  renderMovies(filtered, 'movieGrid');
  renderPagination(Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1, 1);
  document.getElementById('mainGrid').scrollIntoView({ behavior: 'smooth' });
  event && event.preventDefault();
}

function handleSearch() {

  const q = document.getElementById('searchInput')
    .value
    .toLowerCase()
    .trim();

  currentPage = 1;

  if (!q) {

    renderMovies(movies, 'movieGrid');

    renderPagination(TOTAL_PAGES, 1);

    return;
  }

  const filtered = movies.filter(m =>

    m.title.toLowerCase().includes(q) ||
    m.genre.toLowerCase().includes(q) ||
    m.lang.toLowerCase().includes(q)

  );

  if (filtered.length > 0) {

    renderMovies(filtered, 'movieGrid');

    renderPagination(
      Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE)),
      1
    );

  }

  else {

    document.getElementById('movieGrid').innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:60px 20px;
      ">

        <div style="
          font-size:70px;
          margin-bottom:20px;
        ">
          😔
        </div>

        <div style="
          color:white;
          font-size:32px;
          font-family:'Bebas Neue',sans-serif;
          letter-spacing:2px;
        ">
          MOVIE NOT AVAILABLE
        </div>

        <div style="
          color:#888;
          margin-top:10px;
          font-size:15px;
        ">
          "${q}" is currently unavailable
        </div>

      </div>
    `;

    document.getElementById('pagination').innerHTML = '';
  }
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  document.getElementById('modalTitle').textContent = `${m.title} (${m.year}) ${m.type} [${m.lang}] ${m.quality}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="movie-details-grid">
     <div class="detail-poster">

  <img 
    src="${m.poster}" 
    alt="${m.title}"

    style="
      width:100%;
      aspect-ratio:2/3;
      object-fit:cover;
      border-radius:10px;
      display:block;
    "
  >

</div>
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
    <div class="dl-section-title">⬇ DOWNLOAD LINKS ⬇</div>
    <div class="dl-links">
      ${m.sizes.map(s => `
        <div class="dl-link" onclick="alert('Demo mode – link would open for: ${m.title} ${s.q}')">
          <div>
            <span class="quality-tag ${s.class}">${s.q}</span>
            ${s.codec ? `<span style="color:var(--muted);font-size:12px">${s.codec}</span>` : ''}
          </div>
          <span class="size">[${s.size}]</span>
        </div>
      `).join('')}
    </div>
    <p style="margin-top:16px;text-align:center;font-size:12px;color:var(--muted)">
      ⚠️ For help with downloads, see our <a href="#" style="color:var(--accent)">How To Download</a> guide.
    </p>
  `;
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

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = n;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(() => goSlide((currentSlide + 1) % slides.length), 5000);

// ─── POSTER STRIP ────────────────────────────────────────────────────────────

const strip = document.getElementById('posterStrip');

const allItems = [...Array(20)].map((_, i) => `
  <div class="strip-item">

    <img 
      src="${movies[i % movies.length].poster}" 
      alt="${movies[i % movies.length].title}"
      style="width:100%;height:100%;object-fit:cover;"
    >

  </div>
`).join('');

strip.innerHTML = allItems + allItems; // duplicate for seamless loop

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderMovies(movies, 'movieGrid');
renderPagination(TOTAL_PAGES, 1);
renderMovies(movies.filter(m => m.category === 'webseries'), 'webSeriesGrid');
document.getElementById('searchInput')
.addEventListener('input', function () {

  if (this.value.trim() === '') {

    renderMovies(movies, 'movieGrid');

    renderPagination(TOTAL_PAGES, 1);
  }

});

document.getElementById('searchInput')
.addEventListener('keypress', function(e){

  if(e.key === 'Enter'){

    handleSearch();

  }

});

});
