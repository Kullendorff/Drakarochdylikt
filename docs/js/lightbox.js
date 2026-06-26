(function () {
  function init() {
    var imgs = document.querySelectorAll('main figure.plate img, main img.portrait');
    if (!imgs.length) return;
    var box = document.createElement('div');
    box.id = 'lightbox';
    box.innerHTML = '<span class="lb-close" aria-label="Stäng">×</span><img alt="">';
    document.body.appendChild(box);
    var big = box.querySelector('img');
    function open(src, alt) {
      big.src = src;
      big.alt = alt || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      box.classList.remove('open');
      document.body.style.overflow = '';
      big.src = '';
    }
    imgs.forEach(function (im) {
      im.classList.add('lightbox-trigger');
      im.addEventListener('click', function () { open(im.currentSrc || im.src, im.alt); });
    });
    box.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
