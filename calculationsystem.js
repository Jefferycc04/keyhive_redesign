import { products } from './products.js';

const cartCount = document.getElementById('cartCount');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;

// 初始渲染
cartCount.textContent = cart.length;

/**
 * 將商品加入購物車，並更新 localStorage 及 UI
 * @param {number} id 商品 ID
 */
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  cartTotal += product.price;

  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartTotal', cartTotal.toFixed(2));
  cartCount.textContent = cart.length;
}

// 綁定所有可用的「加入購物車」按鈕
document.querySelectorAll('.button.add_to_cart:not([disabled])')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.productId, 10);
      addToCart(id);
    });
  });

/**
 * 供結算或其他頁面讀取整個購物車及總額
 */
export function getCart() {
  return cart;
}

export function getCartTotal() {
  return cartTotal;
}