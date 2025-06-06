document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product_gallery').forEach(gallery => {
    const mainImg = gallery.querySelector('.main_img');       
    const thumbs  = gallery.querySelectorAll('.thumb_strip img'); 

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {

        mainImg.src = thumb.dataset.full;

        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.buy_row').forEach(row => {
    const plusBtn = row.querySelector('.qty_plus');
    const numSpan = row.querySelector('.qty_num');

    if (!plusBtn || !numSpan) return;  

    plusBtn.addEventListener('click', () => {
      numSpan.textContent = Number(numSpan.textContent || 1) + 1;
    });
  });

});