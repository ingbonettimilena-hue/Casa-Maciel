/* ===========================
   CASA MACIEL — script.js
   =========================== */

(function () {
  const html        = document.documentElement;
  const btn         = document.getElementById('themeToggle');
  const label       = document.getElementById('toggleLabel');
  const menuNoche   = document.getElementById('menuNoche');
  const menuDia     = document.getElementById('menuDia');
  const menuSabado  = document.getElementById('menuSabado');

  // Estados posibles: noche, domingo, sabado
  const STATES = ['noche', 'domingo', 'sabado'];
  
  // Textos del label según estado (indica a qué cambia si se pulsa)
  const LABELS = {
    noche:   'Domingo mediodía',
    domingo: 'Sábado mediodía',
    sabado:  'Viernes & Sábado noche'
  };

  // Temas CSS según estado
  const THEMES = {
    noche:   'dark',
    domingo: 'light',
    sabado:  'light'
  };

  /**
   * Aplica el estado y muestra el menú correcto.
   * @param {'noche'|'domingo'|'sabado'} state
   * @param {boolean} [animate=true]
   */
  function applyState(state, animate = true) {
    // Aplicar tema CSS
    html.setAttribute('data-theme', THEMES[state]);

    // Actualizar label del botón
    label.textContent = LABELS[state];

    // Mostrar/ocultar paneles de menú
    menuNoche.classList.remove('active');
    menuDia.classList.remove('active');
    menuSabado.classList.remove('active');

    if (state === 'noche') {
      menuNoche.classList.add('active');
    } else if (state === 'domingo') {
      menuDia.classList.add('active');
    } else if (state === 'sabado') {
      menuSabado.classList.add('active');
    }

    // Guardar preferencia
    try { localStorage.setItem('cm-state', state); } catch (_) {}
  }

  /**
   * Alterna entre estados (noche → domingo → sabado → noche).
   */
  function toggleState() {
    const current = localStorage.getItem('cm-state') || 'noche';
    const currentIndex = STATES.indexOf(current);
    const nextIndex = (currentIndex + 1) % STATES.length;
    const next = STATES[nextIndex];
    applyState(next);
  }

  /**
   * Inicialización: recuperar preferencia guardada o usar 'noche'.
   */
  function init() {
    let saved = 'noche';
    try {
      saved = localStorage.getItem('cm-state') || 'noche';
      // Validar que el estado guardado sea válido
      if (!STATES.includes(saved)) saved = 'noche';
    } catch (_) {}
    applyState(saved, false);
  }

  // Evento del botón
  btn.addEventListener('click', toggleState);

  // Arrancar
  init();

})();
