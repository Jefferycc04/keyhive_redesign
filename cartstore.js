/* Portions of this code were wrote with the assistance of ChatGPT. */
export const CartStore = {
  get: function () {
    var str = localStorage.getItem('cartItems');
    try { return str ? JSON.parse(str) : []; }
    catch (e) { return []; }
  },

  set: function (list) {
    localStorage.setItem('cartItems', JSON.stringify(list));
    for (var i = 0; i < this.subs.length; i++) this.subs[i](list);
  },

  add: function (p, qty) {
    qty = qty || 1;
    var list = this.get();
    var found = null;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === p.id) { found = list[i]; break; }
    }
    if (found) { found.qty += qty; }
    else {
      list.push({
        id: p.id, name: p.name, price: p.price,
        img: p.img, color: p.color, qty: qty
      });
    }
    this.set(list);
  },

  remove: function (id) {
    var list = this.get();
    var out = [];
    for (var i = 0; i < list.length; i++) if (list[i].id !== id) out.push(list[i]);
    this.set(out);
  },

  updateQty: function (id, qty) {
    qty = Math.max(1, qty);
    var list = this.get();
    for (var i = 0; i < list.length; i++)
      if (list[i].id === id) { list[i].qty = qty; break; }
    this.set(list);
  },

  clear: function () { this.set([]); },

  subs: [],
  subscribe: function (fn) { this.subs.push(fn); }
};