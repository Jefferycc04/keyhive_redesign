document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product_gallery').forEach(gallery => {
    const main = gallery.querySelector('.main_img');
    const thumbs = gallery.querySelectorAll('.thumb_strip img');
    thumbs.forEach(th =>
      th.addEventListener('click', () => {
        main.src = th.dataset.full;
        thumbs.forEach(x => x.classList.toggle('active', x === th));
      })
    );
  });

  document.querySelectorAll('.buy_row').forEach(row => {
    const plus = row.querySelector('.qty_plus');
    const num  = row.querySelector('.qty_num');
    if (!plus || !num) return;
    plus.addEventListener('click',
      () => (num.textContent = Number(num.textContent || 1) + 1));
  });
});