import { CartStore } from './cartstore.js';

const mql = matchMedia('(min-width:1368px)');
mql.addEventListener('change', () => {
  selectTargets();
  render(CartStore.get());
});

let $ = {};             
selectTargets();    

function selectTargets () {
  const desktop = mql.matches; 
  $ = {
    list     : document.getElementById(desktop ? 'orderListDesktop' : 'orderList'),
    subtotal : document.getElementById(desktop ? 'subtotalDesktop' : 'subtotal'),
    button   : document.getElementById(desktop ? 'completeBtnDesktop' : 'completeBtn')
  };
}

function render (list) {
  $.list.innerHTML = '';

  if (!list.length) {
    $.list.innerHTML =
      '<p style="font-family:Tiny5;font-size:18px;color:#F5F5F5;">YOUR CART IS EMPTY</p>';
    $.subtotal.textContent = '$0';
    $.button.disabled = true;
    return;
  }

  let subtotal = 0;
  list.forEach(item => {
    const lineTotal = item.qty * item.price;
    subtotal += lineTotal;

    $.list.insertAdjacentHTML('beforeend', `
      <div class="checkout_item">
        <img src="${item.img}" alt="${item.name}">
        <div class="info_box">
          <h3>${item.name}</h3>
          <span>${item.color}</span>
        </div>
        <div class="qty_badge">QTY: ${item.qty}</div>
        <div class="line_total">$${lineTotal}</div>
      </div>
    `);
  });

  $.subtotal.textContent = `$${subtotal}`;
  $.button.disabled = false;
}

render(CartStore.get());
CartStore.subscribe(render);

$.button.addEventListener('click', () => {
  alert('Order placed!  (demo)');
  CartStore.clear();
});
