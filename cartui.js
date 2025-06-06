import { CartStore } from '/cartstore.js';

const containers = ['cartContainer', 'cartContainerDesktop']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const emptyMsgs = ['emptyMsg', 'emptyMsgDesktop']
  .map(id => document.getElementById(id))
  .filter(Boolean);

const chkBtns = ['checkoutBtn', 'checkoutBtnDesktop']
  .map(id => document.getElementById(id))
  .filter(Boolean);

render(CartStore.get());
CartStore.subscribe(render);

function render(list){
  containers.forEach(c => c.innerHTML = ''); 
  const empty = list.length === 0;

  emptyMsgs.forEach(m => m.style.display = empty ? 'block' : 'none');

  chkBtns.forEach(btn=>{
    if(empty){
      btn.classList.add('disabled');
      btn.onclick = null;
    }else{
      btn.classList.remove('disabled');
      btn.onclick = () => location.href = 'checkoutpage.html';
    }
  });

  if(empty) return;

  list.forEach(item=>{
    containers.forEach(c => c.appendChild(createCard(item)));
  });
}

function createCard(item){
  const wrap   = document.createElement('div');
  const total  = (item.price * item.qty).toFixed(2);

  wrap.className = 'cart_item';
  wrap.innerHTML = `
    <img src="${item.img}" alt="">
    <div class="item_info">
        <h3>${item.name}</h3>
        <div class="color">${item.color}</div>
        <div class="qty_box_cart">
           <button class="minus">-</button>
           <span class="q">${item.qty}</span>
           <button class="plus">+</button>
        </div>
    </div>
    <div class="right_col">
        <div class="price">$ ${total}</div>
        <button class="remove_btn"><img src="closeicon.svg" alt="remove"></button>
    </div>`;

  wrap.querySelector('.plus').onclick  = () => CartStore.updateQty(item.id, item.qty + 1);
  wrap.querySelector('.minus').onclick = () => CartStore.updateQty(item.id, item.qty - 1);
  wrap.querySelector('.remove_btn').onclick = () => CartStore.remove(item.id);

  return wrap;
}
