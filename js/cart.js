
const CART_KEY = "vibecarry_cart_v5";

const Cart = (() => {
  function getRaw() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  function save(arr) {
    localStorage.setItem(CART_KEY, JSON.stringify(arr));
    document.dispatchEvent(new CustomEvent("cart:change"));
  }
  return {
    all()  { return getRaw(); },
    count(){ return getRaw().reduce((s, i) => s + i.qty, 0); },
    total(){ return getRaw().reduce((s, i) => { const p = getProductById(i.id); return s + (p ? p.price * i.qty : 0); }, 0); },
    add(id, qty = 1) {
      const arr = getRaw(); const idx = arr.findIndex(i => i.id === id);
      if (idx > -1) arr[idx].qty += qty; else arr.push({ id, qty });
      save(arr);
    },
    remove(id) {
      const arr = getRaw(); const idx = arr.findIndex(i => i.id === id);
      if (idx > -1) { arr[idx].qty > 1 ? arr[idx].qty-- : arr.splice(idx, 1); save(arr); }
    },
    removeAll(id) { save(getRaw().filter(i => i.id !== id)); },
    clear() { save([]); },
  };
})();
