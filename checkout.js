/* Portions of this code were generated with the assistance of ChatGPT. */
import { CartStore } from './cartstore.js';

var mql = window.matchMedia('(min-width:1368px)');
mql.addEventListener('change', chooseTargets);

var $ = {}; 
chooseTargets();

function chooseTargets() {
  var desktop = mql.matches;
  $.list = document.getElementById(desktop ? 'orderListDesktop'   : 'orderList');
  $.subtotal = document.getElementById(desktop ? 'subtotalDesktop'    : 'subtotal');
  $.button = document.getElementById(desktop ? 'completeBtnDesktop' : 'completeBtn');
  render(CartStore.get());
}

function render(list) {
  $.list.innerHTML = '';
  if (!list.length) {
    $.list.innerHTML =
      '<p class="font-tiny">YOUR CART IS EMPTY</p>';
    $.subtotal.textContent = '$0';
    $.button.disabled = true;
    return;
  }

  var subtotal = 0;
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var lineTotal = item.qty * item.price;
    subtotal += lineTotal;

    var html =
      '<div class="checkout_item">' +
        '<img src="' + item.img + '" alt="' + item.name + '">' +
        '<div class="info_box">' +
          '<h3>' + item.name + '</h3>' +
          '<span>' + item.color + '</span>' +
        '</div>' +
        '<div class="qty_badge">QTY: ' + item.qty + '</div>' +
        '<div class="line_total">$' + lineTotal + '</div>' +
      '</div>';
    $.list.insertAdjacentHTML('beforeend', html);
  }
  $.subtotal.textContent = '$' + subtotal;
  $.button.disabled = false;
}

CartStore.subscribe(render);

$.button.addEventListener('click', function () {
  alert('Order placed!  (demo)');
  CartStore.clear();
});