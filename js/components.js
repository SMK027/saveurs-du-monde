/* =====================================================
   COMPONENTS.JS – Navigation & Footer partagés
   ===================================================== */

function initLazyBackgrounds(root = document) {
  const lazyBackgrounds = Array.from(root.querySelectorAll('.lazy-bg[data-bg]'));
  if (lazyBackgrounds.length === 0) return;

  const loadBackground = element => {
    const source = element.dataset.bg;
    if (!source) return;

    element.style.backgroundImage = `url("${source}")`;
    element.classList.add('lazy-bg-loaded');
    delete element.dataset.bg;
  };

  if (!("IntersectionObserver" in window)) {
    lazyBackgrounds.forEach(loadBackground);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      loadBackground(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '200px 0px',
    threshold: 0.01
  });

  lazyBackgrounds.forEach(element => observer.observe(element));
}

function initClickToHdMedia(root = document) {
  const hdImages = Array.from(root.querySelectorAll('img[data-hd-src]'));
  hdImages.forEach(image => {
    if (image.dataset.hdBound === '1') return;
    image.dataset.hdBound = '1';
    image.classList.add('progressive-media');
    image.title = image.title || 'Cliquez pour charger la version HD';

    image.addEventListener('click', () => {
      const hdSrc = image.dataset.hdSrc;
      if (!hdSrc || image.dataset.hdLoaded === '1') return;

      const preload = new Image();
      preload.decoding = 'async';
      preload.onload = () => {
        image.src = hdSrc;
        if (image.dataset.hdSrcset) {
          image.srcset = image.dataset.hdSrcset;
        } else {
          image.removeAttribute('srcset');
        }
        image.dataset.hdLoaded = '1';
        image.classList.add('hd-loaded');
        image.title = 'Image HD chargée';
      };
      preload.src = hdSrc;
    }, { once: true });
  });

  const hdBackgrounds = Array.from(root.querySelectorAll('[data-bg-hd]'));
  hdBackgrounds.forEach(element => {
    if (element.dataset.hdBound === '1') return;
    element.dataset.hdBound = '1';
    element.classList.add('progressive-bg');
    element.title = element.title || 'Cliquez pour charger l\'image HD';

    element.addEventListener('click', () => {
      const hdSrc = element.dataset.bgHd;
      if (!hdSrc || element.dataset.hdLoaded === '1') return;

      const preload = new Image();
      preload.decoding = 'async';
      preload.onload = () => {
        element.style.backgroundImage = `url("${hdSrc}")`;
        element.dataset.hdLoaded = '1';
        element.classList.add('hd-loaded');
        element.title = 'Image HD chargée';
      };
      preload.src = hdSrc;
    }, { once: true });
  });
}

window.initLazyBackgrounds = initLazyBackgrounds;
window.initClickToHdMedia = initClickToHdMedia;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initLazyBackgrounds();
    initClickToHdMedia();
  }, { once: true });
} else {
  initLazyBackgrounds();
  initClickToHdMedia();
}

/**
 * Injecte l'en-tête dans l'élément #siteHeader.
 * @param {string} activePage  - 'index' | 'recettes' | 'categories' | 'about' | 'contact'
 * @param {string} root        - Chemin relatif vers la racine ('' depuis index.html, '../' depuis pages/)
 */
function renderNav(activePage, root = '') {
  const pages = [
    { id: 'index',      label: 'Accueil',      href: root + 'index.html'              },
    { id: 'recettes',   label: 'Recettes',     href: root + 'pages/recettes.html'     },
    { id: 'categories', label: 'Catégories',   href: root + 'pages/categories.html'   },
    { id: 'about',      label: 'À propos',     href: root + 'pages/about.html'        },
    { id: 'contact',    label: 'Contact',      href: root + 'pages/contact.html'      },
  ];

  const linksHTML = pages.map(p => `
    <li>
      <a href="${p.href}" class="${activePage === p.id ? 'nav-active' : ''}">${p.label}</a>
    </li>
  `).join('');

  document.getElementById('siteHeader').innerHTML = `
    <header>
      <div class="header-inner">
        <a href="${root}index.html" class="logo">
          <span class="logo-icon">🍽️</span>
          <span class="logo-text">Saveurs du Monde</span>
        </a>

        <nav class="main-nav" id="mainNav" aria-label="Navigation principale">
          <ul class="nav-links">${linksHTML}</ul>
        </nav>

        <button class="burger" id="burgerBtn" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;

  // Menu burger (mobile)
  const burger = document.getElementById('burgerBtn');
  const nav    = document.getElementById('mainNav');

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.classList.toggle('active', open);
  });

  // Fermer le menu si clic en dehors
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      burger.classList.remove('active');
    }
  });
}

/**
 * Injecte le pied de page dans l'élément #siteFooter.
 * @param {string} root - Chemin relatif vers la racine ('' depuis index.html, '../' depuis pages/)
 */
function renderFooter(root = '') {
  document.getElementById('siteFooter').innerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-icon">🍽️</span>
          <span class="logo-text">Saveurs du Monde</span>
          <p>Des recettes du monde entier, pour tous les niveaux.</p>
        </div>

        <nav class="footer-nav" aria-label="Navigation pied de page">
          <h4>Navigation</h4>
          <ul>
            <li><a href="${root}index.html">Accueil</a></li>
            <li><a href="${root}pages/recettes.html">Toutes les recettes</a></li>
            <li><a href="${root}pages/categories.html">Catégories</a></li>
            <li><a href="${root}pages/about.html">À propos</a></li>
            <li><a href="${root}pages/contact.html">Contact</a></li>
          </ul>
        </nav>

        <nav class="footer-nav" aria-label="Cuisines">
          <h4>Cuisines</h4>
          <ul>
            <li><a href="${root}pages/recettes.html?cuisine=Française">Française</a></li>
            <li><a href="${root}pages/recettes.html?cuisine=Italienne">Italienne</a></li>
            <li><a href="${root}pages/recettes.html?cuisine=Asiatique">Asiatique</a></li>
            <li><a href="${root}pages/recettes.html?cuisine=Mexicaine">Mexicaine</a></li>
            <li><a href="${root}pages/recettes.html?cuisine=Américaine">Américaine</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-copy">
        <p>© 2026 Saveurs du Monde – Tous droits réservés</p>
      </div>
    </footer>
  `;
}
