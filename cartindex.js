/* Portions of this code were generated with the assistance of ChatGPT. */
import { products }  from './products.js';
import { CartStore } from './cartstore.js';

document.addEventListener('DOMContentLoaded', function () {

  var addBtns = document.querySelectorAll(
    '.add_to_cart:not([disabled]), .featured_button:not([disabled]), .add_btn:not([disabled])'
  );
  for (var i = 0; i < addBtns.length; i++) addBtns[i].addEventListener('click', handleAdd);

  updateBadges(CartStore.get());
  CartStore.subscribe(updateBadges);

  var animBtns = document.querySelectorAll(
    '.add_to_cart:not([disabled]), .button.add_to_cart:not([disabled]), .featured_button:not([disabled])'
  );
  for (var i = 0; i < animBtns.length; i++) {
    animBtns[i].addEventListener('click', function () {
      var btn = this;
      btn.classList.remove('clicked');
      btn.offsetWidth;   
      btn.classList.add('clicked');
      setTimeout(function () { btn.classList.remove('clicked'); }, 200);
    });
  }
});

function handleAdd(e) {
  var btn = e.currentTarget;
  var id = btn.dataset.productId ? Number(btn.dataset.productId)
            : Number(btn.getAttribute('product_id'));
  var product = null;
  for (var i = 0; i < products.length; i++)
    if (products[i].id === id) { product = products[i]; break; }

  var qty = 1;
  var row = btn.closest ? btn.closest('.buy_row') : null;
  if (row) {
    var box = row.querySelector('.qty_num');
    var n = box ? parseInt(box.textContent, 10) : 1;
    if (!isNaN(n) && n > 0) qty = n;
  }
  if (product) CartStore.add(product, qty);
}

function updateBadges(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++) total += list[i].qty;
  ['cartCount', 'cartCountDesktop', 'cartItemCount', 'cartItemCountDesktop']
    .forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = total;
    });
}