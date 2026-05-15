/* ===========================
   CASA MACIEL — script.js
   =========================== */

(function () {
  const html        = document.documentElement;
  const btn         = document.getElementById('themeToggle');
  const label       = document.getElementById('toggleLabel');
  const menuNoche   = document.getElementById('menuNoche');
  const menuDia     = document.getElementById('menuDia');

  // Textos del label según tema
  const LABELS = {
    dark:  'Domingo mediodía',
    light: 'Viernes & Sábado noche'
  };

  /**
   * Aplica el tema y muestra el menú correcto.
   * @param {'dark'|'light'} theme
   * @param {boolean} [animate=true]
   */
  function applyTheme(theme, animate = true) {
    html.setAttribute('data-theme', theme);

    // Actualizar label del botón (indica a qué cambia si se pulsa)
    label.textContent = LABELS[theme];

    // Mostrar/ocultar paneles de menú
    if (theme === 'dark') {
      menuNoche.classList.add('active');
      menuDia.classList.remove('active');
    } else {
      menuDia.classList.add('active');
      menuNoche.classList.remove('active');
    }

    // Guardar preferencia
    try { localStorage.setItem('cm-theme', theme); } catch (_) {}
  }

  /**
   * Alterna entre temas.
   */
  function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'dark';
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  /**
   * Inicialización: recuperar preferencia guardada o usar 'dark'.
   */
  function init() {
    let saved = 'dark';
    try { saved = localStorage.getItem('cm-theme') || 'dark'; } catch (_) {}
    applyTheme(saved, false);
  }

  // Evento del botón
  btn.addEventListener('click', toggleTheme);

  // Arrancar
  init();

})();
