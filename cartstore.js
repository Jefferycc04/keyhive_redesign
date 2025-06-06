export const CartStore = {
  get() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  },

  set(list) {
    localStorage.setItem('cartItems', JSON.stringify(list));
    this.subs.forEach(fn => fn(list));
  },

  add(product, qty = 1) {
    const list  = this.get();
    const found = list.find(i => i.id === product.id);
    if (found) found.qty += qty;
    else list.push({ ...product, qty });
    this.set(list);
  },

  remove(id){
    const list = this.get().filter(i => i.id !== id);
    this.set(list);
  },

  updateQty(id, qty){
    const list = this.get().map(i => i.id === id ? { ...i, qty:Math.max(1, qty)} : i);
    this.set(list);
  },

  subs: [],
  subscribe(fn){ this.subs.push(fn); }
};
