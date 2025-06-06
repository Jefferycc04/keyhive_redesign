import { products }  from '/products.js';
import { CartStore } from '/cartstore.js';

document.addEventListener('DOMContentLoaded', () => {
document
  .querySelectorAll('.add_to_cart:not([disabled]), .featured_button:not([disabled]), .add_btn:not([disabled])')
    .forEach(btn => {
     btn.addEventListener('click', () => {
        const id = Number(btn.dataset.productId || btn.getAttribute('product_id'));
        const p   = products.find(x => x.id === id);
        const qtyBox = btn.closest('.buy_row')?.querySelector('.qty_num');
        const qty    = qtyBox ? Math.max(1, Number(qtyBox.textContent) || 1) : 1;
        if (p) CartStore.add(p, qty);
      });
    });

  updateBadges(CartStore.get());
  CartStore.subscribe(updateBadges);
});

function updateBadges(list){
  const total = list.reduce((s,i)=>s+i.qty,0);
  ['cartCount', 'cartCountDesktop', 'cartItemCount', 'cartItemCountDesktop'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = total;
 });
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(
    '.add_to_cart:not([disabled]), .button.add_to_cart:not([disabled]), .featured_button:not([disabled])'
  ).forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('clicked');
      void btn.offsetWidth;
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });
});