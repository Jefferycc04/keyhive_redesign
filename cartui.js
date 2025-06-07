/* Portions of this code were generated with the assistance of ChatGPT. */
import { CartStore } from './cartstore.js'; 

function grab(ids) {
  var arr = [];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (el) arr.push(el);
  }
  return arr;
}
var containers = grab(['cartContainer', 'cartContainerDesktop']);
var emptyMsgs = grab(['emptyMsg', 'emptyMsgDesktop']);
var chkBtns = grab(['checkoutBtn', 'checkoutBtnDesktop']);

function render(list) {

  for (var i = 0; i < containers.length; i++) containers[i].innerHTML = '';

  var empty = list.length === 0;
  for (var i = 0; i < emptyMsgs.length; i++)
    emptyMsgs[i].style.display = empty ? 'block' : 'none';

  for (var i = 0; i < chkBtns.length; i++) {
    var btn = chkBtns[i];
    if (empty) {
      btn.classList.add('disabled');
      btn.onclick = null;
    } else {
      btn.classList.remove('disabled');
      btn.onclick = function () { window.location.href = 'checkoutpage.html'; };
    }
  }

  if (empty) return;

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < containers.length; j++) {
      containers[j].appendChild(createCard(list[i]));
    }
  }
}

function createCard(item) {
  var wrap = document.createElement('div');
  wrap.className = 'cart_item';
  var total = (item.price * item.qty).toFixed(2);

  wrap.innerHTML =
    '<img src="' + item.img + '" alt="">' +
    '<div class="item_info">' +
      '<h3>' + item.name + '</h3>' +
      '<div class="color">' + item.color + '</div>' +
      '<div class="qty_box_cart">' +
        '<button class="minus">-</button>' +
        '<span class="q">' + item.qty + '</span>' +
        '<button class="plus">+</button>' +
      '</div>' +
    '</div>' +
    '<div class="right_col">' +
      '<div class="price">$ ' + total + '</div>' +
      '<button class="remove_btn"><img src="closeicon.svg" alt="remove"></button>' +
    '</div>';

  wrap.querySelector('.plus').onclick  = function () { CartStore.updateQty(item.id, item.qty + 1); };
  wrap.querySelector('.minus').onclick = function () { CartStore.updateQty(item.id, item.qty - 1); };
  wrap.querySelector('.remove_btn').onclick = function () { CartStore.remove(item.id); };

  return wrap;
}

render(CartStore.get());
CartStore.subscribe(render);