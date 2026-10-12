const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

const waste = [
  { terms: ['botella','botellas','pet','plástico','plastico'], title: 'Botellas PET', where: 'Reciclaje', note: 'Vacía, enjuaga y seca. Verifica que el programa local acepte el tipo de plástico.' },
  { terms: ['cartón','carton','papel','libro','libros'], title: 'Cartón, papel y libros', where: 'Reciclaje', note: 'Entrégalos limpios y secos. Evita material húmedo o contaminado con comida.' },
  { terms: ['comida','orgánico','organico','compost'], title: 'Restos de comida', where: 'Compost / orgánicos', note: 'No deben mezclarse con reciclaje. Consulta las opciones locales de compostaje.' },
  { terms: ['ramas','hojas','poda','jardín','jardin'], title: 'Ramas y poda', where: 'Residuos de jardín', note: 'No deben dejarse con la basura ordinaria sin confirmar el sistema de recolección correspondiente.' },
  { terms: ['colchón','colchon','mueble','muebles'], title: 'Muebles y colchones', where: 'Residuo voluminoso', note: 'Requieren recolección especial o un recolector privado. No los dejes en puntos de basura comunitarios.' },
  { terms: ['batería','bateria','baterías','baterias','pilas'], title: 'Baterías y pilas', where: 'Residuo especial', note: 'No van en basura ordinaria ni reciclaje común. Usa un punto de recepción autorizado.' },
  { terms: ['electrónicos','electronicos','televisor','computadora','celular','cables'], title: 'Electrónicos', where: 'Residuo electrónico', note: 'Necesitan gestión especial. Esta guía mostrará puntos y campañas de recolección confirmados.' },
  { terms: ['escombros','cemento','construcción','construccion','cerámica','ceramica'], title: 'Escombros de construcción', where: 'Residuo especial', note: 'Contrata un servicio apropiado. No deben colocarse con basura domiciliaria.' }
];

const input = document.querySelector('#waste-search');
const results = document.querySelector('#finder-results');

function renderResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) { results.innerHTML = ''; return; }
  const hits = waste.filter(item => item.terms.some(term => term.includes(q) || q.includes(term)));
  if (!hits.length) {
    results.innerHTML = '<div class="result"><strong>Aún no está en la guía.</strong><span>Podemos agregar este residuo a la base de datos y verificar su destino local.</span></div>';
    return;
  }
  results.innerHTML = hits.map(item => '<div class="result"><strong>' + item.title + ' → ' + item.where + '</strong><span>' + item.note + '</span></div>').join('');
}

input?.addEventListener('input', e => renderResults(e.target.value));

document.querySelectorAll('[data-query]').forEach(button => {
  button.addEventListener('click', () => {
    input.value = button.dataset.query;
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
