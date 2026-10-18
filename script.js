const translations = {
  es: {
    menu: 'Menú',
    navGuide: 'Guía de residuos',
    navRecycle: 'Reciclaje',
    navRoutes: 'Rutas',
    navEvents: 'Eventos',
    navCommunity: 'Comunidad',
    navContact: 'Contacto',
    navFinder: 'Dónde boto…',
    quickGuide: 'Guía rápida',
    introTitle: 'Separar bien es más fácil cuando sabemos qué hacer con cada residuo.',
    cardTrashTitle: 'Basura ordinaria',
    cardTrashText: 'Residuos domésticos que no se pueden reciclar ni compostar.',
    cardRecycleTitle: 'Reciclaje',
    cardRecycleText: 'Qué recibe el programa local y cómo preparar cada material.',
    cardOrganicTitle: 'Orgánicos y jardín',
    cardOrganicText: 'Compost, restos de comida, hojas, ramas y poda.',
    cardSpecialTitle: 'Residuos especiales',
    cardSpecialText: 'Electrónicos, muebles, baterías, aceite, escombros y más.',
    factsEyebrow: 'Datos que importan',
    factsTitle: 'El problema es grande. También lo es nuestro potencial para reducirlo.',
    finderEyebrow: 'Buscador de residuos',
    finderTitle: '¿Qué necesitas desechar?',
    finderIntro: 'Escribe un objeto o selecciona una opción frecuente.',
    finderLabel: 'Buscar residuo',
    finderPlaceholder: 'Ej. colchón, botella, batería…',
    chipBottles: 'Botellas',
    chipCardboard: 'Cartón',
    chipFood: 'Restos de comida',
    chipBranches: 'Ramas',
    chipMattress: 'Colchón',
    chipBatteries: 'Baterías',
    chipElectronics: 'Electrónicos',
    chipDebris: 'Escombros',
    routesEyebrow: 'Rutas de recolección',
    routesTitle: '¿Pasa la recolección por tu calle?',
    eventsEyebrow: 'Calendario',
    eventsTitle: 'Próximos eventos',
    eventsIntro: 'Actividades ambientales, educativas y comunitarias para participar, aprender y apoyar.',
    communityEyebrow: 'Nuestra comunidad',
    communityTitle: 'Proyectos que hacen de Sámara un lugar mejor.',
    instagramTitle: 'Sigue a @samaralimpia.',
    instagramText: 'Noticias, actividades e información útil para separar mejor, reducir residuos y cuidar nuestra comunidad.',
    instagramButton: 'Ver @samaralimpia',
    footerProject: 'Proyecto comunitario independiente · Sámara, Guanacaste',
    contactLabel: 'Contacto',
    footerGuide: 'Guía',
    footerEvents: 'Eventos',
    footerCommunity: 'Comunidad'
  },
  en: {
    menu: 'Menu',
    navGuide: 'Waste guide',
    navRecycle: 'Recycling',
    navRoutes: 'Routes',
    navEvents: 'Events',
    navCommunity: 'Community',
    navContact: 'Contact',
    navFinder: 'Where do I toss…',
    quickGuide: 'Quick guide',
    introTitle: 'Sorting waste is easier when we know what to do with each item.',
    cardTrashTitle: 'Regular trash',
    cardTrashText: 'Household waste that cannot be recycled or composted.',
    cardRecycleTitle: 'Recycling',
    cardRecycleText: 'What the local program accepts and how to prepare each material.',
    cardOrganicTitle: 'Organics & yard waste',
    cardOrganicText: 'Compost, food scraps, leaves, branches and pruning.',
    cardSpecialTitle: 'Special waste',
    cardSpecialText: 'Electronics, furniture, batteries, oil, construction debris and more.',
    factsEyebrow: 'Important facts',
    factsTitle: 'The problem is big. So is our potential to reduce it.',
    finderEyebrow: 'Waste finder',
    finderTitle: 'What do you need to dispose of?',
    finderIntro: 'Type an item or choose a common option.',
    finderLabel: 'Search waste',
    finderPlaceholder: 'E.g. mattress, bottle, battery…',
    chipBottles: 'Bottles',
    chipCardboard: 'Cardboard',
    chipFood: 'Food scraps',
    chipBranches: 'Branches',
    chipMattress: 'Mattress',
    chipBatteries: 'Batteries',
    chipElectronics: 'Electronics',
    chipDebris: 'Construction debris',
    routesEyebrow: 'Collection routes',
    routesTitle: 'Does collection reach your street?',
    eventsEyebrow: 'Calendar',
    eventsTitle: 'Upcoming events',
    eventsIntro: 'Environmental, educational and community activities to join, learn from and support.',
    communityEyebrow: 'Our community',
    communityTitle: 'Projects making Sámara a better place.',
    instagramTitle: 'Follow @samaralimpia.',
    instagramText: 'News, activities and useful information to sort better, reduce waste and care for our community.',
    instagramButton: 'View @samaralimpia',
    footerProject: 'Independent community project · Sámara, Guanacaste',
    contactLabel: 'Contact',
    footerGuide: 'Guide',
    footerEvents: 'Events',
    footerCommunity: 'Community'
  }
};

const finderMessages = {
  es: {
    missingTitle: 'Aún no está en la guía.',
    missingNote: 'Podemos agregar este residuo a la base de datos y verificar su destino local.'
  },
  en: {
    missingTitle: 'It’s not in the guide yet.',
    missingNote: 'We can add this item to the database and verify the correct local disposal option.'
  }
};

const wasteBilingual = [
  {
    terms: ['vidrio quebrado','vidrio roto','cristal quebrado','broken glass','glass shard','shattered glass'],
    es: { title:'Vidrio quebrado', where:'Basura ordinaria', note:'Envuélvelo bien en cartón, mételo en una bolsa, rotúlala claramente “VIDRIO” y colócala con la basura ordinaria.' },
    en: { title:'Broken glass', where:'Regular trash', note:'Wrap it securely in cardboard, place it in a bag, label it clearly “GLASS,” and put it with regular trash.' }
  },
  {
    terms: ['botella','botellas','pet','plástico','plastico','bottle','bottles','plastic'],
    es: { title:'Botellas y envases plásticos', where:'Reciclaje', note:'Entrégalos vacíos, limpios, secos y sin olores.' },
    en: { title:'Plastic bottles and containers', where:'Recycling', note:'Bring them empty, clean, dry and free of odors.' }
  },
  {
    terms: ['cartón','carton','papel','libro','libros','cardboard','paper','book','books'],
    es: { title:'Cartón, papel y libros', where:'Reciclaje', note:'Entrégalos limpios y secos. Evita material húmedo o contaminado con comida.' },
    en: { title:'Cardboard, paper and books', where:'Recycling', note:'Bring them clean and dry. Avoid wet material or anything contaminated with food.' }
  },
  {
    terms: ['comida','orgánico','organico','compost','food','food scraps','organic','organics'],
    es: { title:'Restos de comida', where:'Orgánicos y jardín', note:'Aprovéchalos mediante compostaje. Evita tirarlos en lotes o zanjas; consulta la sección “Orgánicos y jardín” para elegir un sistema adecuado.' },
    en: { title:'Food scraps', where:'Organics & yard waste', note:'Compost them when possible. Do not dump them in empty lots or ditches; see the Organics & yard waste section for suitable options.' }
  },
  {
    terms: ['ramas','hojas','poda','jardín','jardin','palma','palmas','branches','leaves','pruning','yard waste','garden waste','palm'],
    es: { title:'Hojas, ramas y poda', where:'Orgánicos y jardín', note:'Corta el material voluminoso en trozos más pequeños y compóstalo dentro de tu propiedad. No lo quemes ni lo abandones en lotes o zanjas.' },
    en: { title:'Leaves, branches and pruning', where:'Organics & yard waste', note:'Cut bulky material into smaller pieces and compost it on your property. Do not burn it or leave it in lots or ditches.' }
  },
  {
    terms: ['colchón','colchon','mueble','muebles','mattress','furniture'],
    es: { title:'Muebles y colchones', where:'Residuo voluminoso', note:'Requieren recolección especial o un recolector privado. No los dejes en puntos de basura comunitarios.' },
    en: { title:'Furniture and mattresses', where:'Bulky waste', note:'They require special collection or a private hauler. Do not leave them at community trash points.' }
  },
  {
    terms: ['batería','bateria','baterías','baterias','pilas','battery','batteries'],
    es: { title:'Baterías y pilas', where:'Residuo especial', note:'No van en basura ordinaria ni reciclaje común. Usa un punto de recepción autorizado.' },
    en: { title:'Batteries', where:'Special waste', note:'Do not place them in regular trash or standard recycling. Use an authorized collection point.' }
  },
  {
    terms: ['electrónicos','electronicos','televisor','computadora','celular','cables','electronics','electronic','tv','television','computer','phone','cellphone','cable','cables'],
    es: { title:'Electrónicos', where:'Residuo electrónico', note:'Necesitan gestión especial. Consulta los puntos y campañas de recolección confirmados.' },
    en: { title:'Electronics', where:'E-waste', note:'They require special handling. Check the confirmed collection points and campaigns.' }
  },
  {
    terms: ['escombros','cemento','construcción','construccion','cerámica','ceramica','construction debris','debris','cement','concrete','ceramic'],
    es: { title:'Escombros de construcción', where:'Residuo especial', note:'Contrata un servicio apropiado. No deben colocarse con basura domiciliaria.' },
    en: { title:'Construction debris', where:'Special waste', note:'Use an appropriate hauling service. Do not place it with household trash.' }
  }
];

let currentLanguage = localStorage.getItem('samaraLimpiaLanguage') || 'es';
if (!['es','en'].includes(currentLanguage)) currentLanguage = 'es';

function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('samaraLimpiaLanguage', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
  });

  document.querySelectorAll('.lang-button').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.content = lang === 'en'
      ? 'Community guide to waste, recycling and environmental events in Sámara, Costa Rica.'
      : 'Guía comunitaria de residuos, reciclaje y eventos ambientales en Sámara, Costa Rica.';
  }

  if (input?.value) renderResults(input.value);
}

document.querySelectorAll('.lang-button').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

const waste = wasteBilingual;\n\nconst input = document.querySelector('#waste-search');
const results = document.querySelector('#finder-results');

function renderResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) { results.innerHTML = ''; return; }
  const hits = waste.filter(item => item.terms.some(term => term.includes(q) || q.includes(term)));
  const exactSafetyHit = hits.find(item => item.es.title === 'Vidrio quebrado');
  const finalHits = exactSafetyHit ? [exactSafetyHit] : hits;
  if (!finalHits.length) {
    results.innerHTML = '<div class="result"><strong>' + finderMessages[currentLanguage].missingTitle + '</strong><span>' + finderMessages[currentLanguage].missingNote + '</span></div>';
    return;
  }
  results.innerHTML = finalHits.map(item => {
    const copy = item[currentLanguage];
    return '<div class="result"><strong>' + copy.title + ' → ' + copy.where + '</strong><span>' + copy.note + '</span></div>';
  }).join('');
}

input?.addEventListener('input', e => renderResults(e.target.value));

document.querySelectorAll('[data-query-es], [data-query-en]').forEach(button => {
  button.addEventListener('click', () => {
    input.value = currentLanguage === 'en' ? button.dataset.queryEn : button.dataset.queryEs;
    renderResults(input.value);
    input.focus();
  });
});

const siteHeader = document.querySelector('.site-header');
function updateHeaderOnScroll() {
  siteHeader?.classList.toggle('scrolled', window.scrollY > 24);
}
updateHeaderOnScroll();
window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

applyLanguage(currentLanguage);
