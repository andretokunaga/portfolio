/* Protótipos navegáveis: o iframe só carrega no clique e é escalado para a largura da figura */
(function () {
  document.querySelectorAll('[data-proto]').forEach(function (fig) {
    var btn = fig.querySelector('.proto-start');
    var stage = fig.querySelector('.proto-stage');
    if (!btn || !stage) return;
    var w = +fig.getAttribute('data-w'), h = +fig.getAttribute('data-h');
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = btn.getAttribute('data-src');
      f.title = btn.getAttribute('data-title') || 'Protótipo navegável';
      f.width = w; f.height = h;
      f.setAttribute('loading', 'eager');
      var fit = function () { f.style.transform = 'scale(' + (stage.clientWidth / w) + ')'; };
      f.className = 'proto-frame';
      fit();
      stage.replaceChild(f, btn);
      if (window.ResizeObserver) new ResizeObserver(fit).observe(stage); else window.addEventListener('resize', fit);
      f.focus();
    });
  });
})();
