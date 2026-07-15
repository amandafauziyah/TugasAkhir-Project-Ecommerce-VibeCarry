/* ============================================================
   VIBECARRY v5 — Product Catalog
   10 Produk: 5 Sling Bag + 5 Backpack
   ============================================================ */

const PRODUCTS = [
  /* ──────────── SLING BAG ──────────── */
  {
    id: "vc-sb01",
    name: "Vibecarry Cherry Tweed Shoulder Bag",
    type: "Sling Bag",
    price: 199000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.9, reviews: 118,
    image: "images/1.katalogslingbag.JPG.jpeg",
    colors: ["Pink Pastel", "Ivory"],
    colorHex: ["#FFD6E0", "#FAFAF5"],
    short: "Feminim dan menggemaskan dengan material kulit sintetis premium berwarna pink pastel dan aksen kain tweed elegan.",
    desc: "Tampil feminim dan menggemaskan dengan Cherry Blossom Tweed Bag. Perpaduan material kulit sintetis premium berwarna pink pastel dan aksen kain tweed yang elegan memberikan kesan mewah sekaligus playful. Dilengkapi dengan gantungan buah ceri yang manis dan chain strap berwarna emas. Cocok untuk acara kasual, nge-date, maupun pesta formal.",
    features: ["Penutup magnet", "Tali bahu semi-rantai emas", "Kompartemen smartphone & kosmetik", "Gantungan buah ceri dekoratif"],
    material: "Kulit sintetis premium + Kain Tweed",
    sizes: ["One Size"],
    stock: 45,
  },
  {
    id: "vc-sb02",
    name: "Vibecarry Amora Quilted Shoulder Bag",
    type: "Sling Bag",
    price: 245000,
    oldPrice: null,
    badge: "BEST",
    rating: 4.8, reviews: 203,
    image: "images/2.katalogslingbag.JPG.jpeg",
    colors: ["Beige", "Camel", "Ivory"],
    colorHex: ["#E8D5B7", "#C8A87A", "#FAFAF5"],
    short: "Siluet baguette klasik dengan jahitan quilted belah ketupat. Nuansa earth-tone krem yang hangat dan mudah dipadukan.",
    desc: "Amora Quilted Shoulder Bag hadir untuk Anda yang memuja estetika minimalis, clean, dan bernuansa earth-tone. Menampilkan siluet baguette klasik yang tak lekang oleh waktu, tas ini dibalut dengan tekstur jahitan quilted (belah ketupat) yang empuk dan sangat presisi. Warna krem (beige) lembutnya memberikan kesan hangat sekaligus mudah dipadukan dengan berbagai outfit.",
    features: ["Jahitan quilted presisi", "Klem gesper emas", "Strap adjustable", "Kompartemen berlapis"],
    material: "Kulit sintetis smooth premium",
    sizes: ["One Size"],
    stock: 62,
  },
  {
    id: "vc-sb03",
    name: "Vibecarry Chevron Crescent Hobo",
    type: "Sling Bag",
    price: 210000,
    oldPrice: null,
    badge: null,
    rating: 4.7, reviews: 87,
    image: "images/3.katalogslingbag.JPG.jpeg",
    colors: ["Ivory White", "Off White"],
    colorHex: ["#FAFAF5", "#F0EDE8"],
    short: "Siluet hobo klasik dengan detail jahitan V-shape dan logo emas minimalis. Warna ivory netral, cocok semua outfit.",
    desc: "Tas dengan siluet hobo klasik yang tak lekang oleh waktu. Menampilkan detail jahitan berbentuk huruf 'V' yang presisi di bagian depan serta logo emas minimalis yang menambah kesan mewah. Warna putih gadingnya (ivory) sangat netral, mudah dipadupadankan dengan outfit kerja maupun kasual.",
    features: ["Kantong ritsleting depan", "Tali bahu nyaman", "Tali panjang ekstra", "Logo emas embossed"],
    material: "Kulit sintetis pebble",
    sizes: ["One Size"],
    stock: 38,
  },
  {
    id: "vc-sb04",
    name: "Vibecarry Luna Chain Quilted Bag",
    type: "Sling Bag",
    price: 260000,
    oldPrice: 310000,
    badge: "SALE",
    rating: 4.9, reviews: 156,
    image: "images/4.katalogslingbag.JPG.jpeg",
    colors: ["White Gold", "Silver"],
    colorHex: ["#F5F0E8", "#E8E8E8"],
    short: "Tas bulan sabit (crescent) dengan detail quilted kotak-kotak dan aksen rantai putih-emas yang elegan dan trendi.",
    desc: "Ekspresikan gayamu dengan tas berbentuk bulan sabit (crescent bag) yang sedang tren! Detail quilted (kotak-kotak empuk) memberikan tekstur yang elegan, dipercantik dengan aksen rantai kombinasi warna putih dan emas di bagian depan. Memiliki tali bahu lebar yang trendi dan nyaman dipakai seharian.",
    features: ["Aksesoris rantai (lepas pasang)", "Strap tebal lebar", "Penutup ritsleting utama", "Quilted detail premium"],
    material: "Faux leather + rantai logam alloy",
    sizes: ["One Size"],
    stock: 24,
  },
  {
    id: "vc-sb05",
    name: "Vibecarry Noir Pebble Crossbody",
    type: "Sling Bag",
    price: 195000,
    oldPrice: null,
    badge: null,
    rating: 4.6, reviews: 94,
    image: "images/5.katalogslingbag.JPG.jpeg",
    colors: ["Jet Black", "Dark Brown"],
    colorHex: ["#1A1A1A", "#3D2314"],
    short: "Warna hitam pekat bertekstur pebble leather yang tahan gores. Aksen gesper perak klasik untuk tampilan profesional.",
    desc: "Hadir dengan warna hitam pekat bermotif kulit jeruk (pebble leather texture) yang tahan gores dan mudah dibersihkan. Aksen gesper (buckle) perak di bagian depan memberikan sentuhan klasik yang berkelas. Sangat pas untuk menemani aktivitas harian, kuliah, maupun ke kantor.",
    features: ["Tali adjustable", "Penutup magnet di balik gesper", "Material tebal & kokoh", "Tahan gores & mudah dibersihkan"],
    material: "Pebble faux leather premium",
    sizes: ["One Size"],
    stock: 51,
  },

  /* ──────────── BACKPACK ──────────── */
  {
    id: "vc-bp01",
    name: "Vibecarry Safia Anti-Theft Backpack",
    type: "Backpack",
    price: 240000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.8, reviews: 131,
    image: "images/1.katalogransel.JPG.jpeg",
    colors: ["Moka Brown", "Black"],
    colorHex: ["#6B4226", "#1A1A1A"],
    short: "Desain anti-theft cerdas dengan material nylon premium water-resistant. Dual function: bisa jadi shoulder bag.",
    desc: "Keamanan dan kenyamanan bersatu dalam Safia Backpack. Hadir dengan desain anti-theft (akses ritsleting utama yang cerdas) serta material premium nylon yang tahan cipratan air. Perpaduan warna moka yang elegan dengan detail quilted di kantong depan memberikan kesan berkelas, menjadikannya pilihan tepat untuk wanita aktif yang dinamis.",
    features: ["Kompartemen rahasia anti-theft", "Bahan ringan & kuat nylon", "Multifunctional strap (shoulder/back)", "Water-resistant"],
    material: "Premium Nylon Water-Resistant",
    sizes: ["One Size"],
    stock: 40,
  },
  {
    id: "vc-bp02",
    name: "Vibecarry Vienna Minimalist Buckle Backpack",
    type: "Backpack",
    price: 285000,
    oldPrice: null,
    badge: "BEST",
    rating: 4.9, reviews: 178,
    image: "images/2.katalogransel.JPG.jpeg",
    colors: ["Cream White", "Walnut Brown", "Charcoal"],
    colorHex: ["#F5F0E8", "#7A5C3A", "#4A4A4A"],
    short: "Minimalis berkelas dengan penutup flap sistem serut dan aksen gesper kembar vintage. Ideal untuk kantor & rapat.",
    desc: "Untuk Anda yang mendambakan tampilan yang bersih, rapi, dan berkelas ala smart-casual. Ransel Vienna mengusung desain minimalis dengan penutup flap bersistem serut serta aksen gesper kembar bernuansa vintage. Terbuat dari kulit sintetis smooth berkualitas tinggi yang kokoh, tas ini sangat pas untuk menemani aktivitas ke kantor.",
    features: ["Kantong ritsleting depan luas", "Dua kantong botol di samping", "Kompartemen laptop mini", "Aksen gesper kembar vintage"],
    material: "Smooth faux leather premium",
    sizes: ["One Size"],
    stock: 29,
  },
  {
    id: "vc-bp03",
    name: "Vibecarry Stella Marine Backpack",
    type: "Backpack",
    price: 215000,
    oldPrice: null,
    badge: null,
    rating: 4.7, reviews: 96,
    image: "images/3.katalogransel.JPG.jpeg",
    colors: ["Pink Pastel", "Sky Blue"],
    colorHex: ["#FFD6E0", "#B8D8F0"],
    short: "Pink pastel menggemaskan dengan bordir bintang laut. Kapasitas ekstra luas + bonus dompet koin mini senada.",
    desc: "Cerahkan hari-hari produktif Anda dengan Stella Marine Backpack! Mengusung warna pink pastel yang super menggemaskan, ransel ini dihiasi detail bordir bintang laut yang manis serta bonus gantungan koin bulat senada. Dirancang khusus dengan kapasitas ekstra luas dan busa punggung tebal.",
    features: ["Gratis dompet koin mini", "Tali berlapis busa breathable mesh", "Banyak sekat penyimpanan", "Bordir bintang laut eksklusif"],
    material: "Poliester premium + Busa punggung tebal",
    sizes: ["One Size"],
    stock: 55,
  },
  {
    id: "vc-bp04",
    name: "Vibecarry Aurora Daily Explorer Backpack",
    type: "Backpack",
    price: 195000,
    oldPrice: null,
    badge: null,
    rating: 4.6, reviews: 73,
    image: "images/4.katalogransel.JPG.jpeg",
    colors: ["Sage Green", "Olive", "Cream"],
    colorHex: ["#87AE6A", "#6B7A3A", "#F5F0E8"],
    short: "Sage green sporty-minimalis dengan kompartemen super lapang. Semi-waterproof canvas untuk kuliah hingga traveling.",
    desc: "Tampil trendi dengan nuansa alam yang menenangkan bersama Aurora Explorer Backpack. Dibalut warna sage green yang sedang populer, ransel ini menawarkan siluet kasual yang sporty namun tetap minimalis. Kompartemen utama sangat lapang dan kantong depan horizontal untuk akses cepat.",
    features: ["Semi-waterproof canvas/polyester", "Tali kompresi estetis", "Slot botol minum kedua sisi", "Kantong depan horizontal lebar"],
    material: "Canvas/Polyester Semi-Waterproof",
    sizes: ["One Size"],
    stock: 48,
  },
  {
    id: "vc-bp05",
    name: "Vibecarry Luna Mini Quilted Backpack",
    type: "Backpack",
    price: 175000,
    oldPrice: null,
    badge: "HIT",
    rating: 4.8, reviews: 144,
    image: "images/5.katalogransel.JPG.jpeg",
    colors: ["Blush Pink", "Lilac", "Cream"],
    colorHex: ["#F0C0C8", "#C3A8DC", "#F5F0E8"],
    short: "Compact & manis. Quilted belah ketupat, plat logam emas, dan pompon bulu pink. 'Lucu tapi tetap elegan'.",
    desc: "Luna Mini Backpack hadir dengan ukuran compact yang manis, dilapisi tekstur jahitan quilted (belah ketupat) pada kantong depannya. Ditambah dengan aksen plat logam emas minimalis serta gantungan bulu (pompon) merah muda yang lembut, tas ini adalah definisi sempurna dari konsep 'lucu tapi tetap elegan'.",
    features: ["Ukuran mini & ringan", "Gantungan pompon lembut (lepas pasang)", "Ritsleting ganda emas anti karat", "Quilted detail presisi"],
    material: "Faux leather + Pompon faux fur",
    sizes: ["One Size"],
    stock: 67,
  },
];

/* ── Helpers ── */
function formatRupiah(v) { return "Rp" + v.toLocaleString("id-ID"); }
function getProductById(id) { return PRODUCTS.find(p => p.id === id); }

/* ── Color swatches HTML ── */
function colorSwatchesHTML(colorHex, colors, max = 4) {
  const shown  = colorHex.slice(0, max);
  const names  = colors.slice(0, max);
  const extra  = colorHex.length > max ? colorHex.length - max : 0;
  const dots   = shown.map((hex, i) =>
    `<span class="swatch-vc" style="background:${hex}" title="${names[i]}"></span>`
  ).join("");
  const plus   = extra > 0 ? `<span style="font-size:.7rem;color:#6B6B6B;font-weight:700"> +${extra}</span>` : "";
  return `<div class="color-swatches-vc">${dots}${plus}</div>`;
}

/* ── Canvas placeholder for missing product images ── */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("error", e => {
    const img = e.target;
    if (img.tagName !== "IMG" || !img.dataset.placeholder) return;
    const type = img.dataset.placeholder;
    const c = document.createElement("canvas");
    c.width = 400; c.height = 530;
    const ctx = c.getContext("2d");
    /* Background */
    ctx.fillStyle = "#F2F2F2"; ctx.fillRect(0, 0, 400, 530);
    /* Inner rect */
    ctx.fillStyle = "#E8E8E8"; ctx.fillRect(40, 40, 320, 400);
    /* Icon */
    ctx.fillStyle = "#C9A97E"; ctx.font = "bold 48px serif"; ctx.textAlign = "center";
    ctx.fillText(type === "Backpack" ? "🎒" : "👜", 200, 200);
    /* Brand */
    ctx.fillStyle = "#1A1A1A"; ctx.font = "bold 18px Inter, sans-serif";
    ctx.fillText("VIBECARRY", 200, 380);
    ctx.fillStyle = "#6B6B6B"; ctx.font = "13px Inter, sans-serif";
    ctx.fillText("Photo Coming Soon", 200, 400);
    img.src = c.toDataURL("image/png");
  }, true);
  /* Set data-placeholder on all product images */
  document.querySelectorAll(".prod-img[data-type]").forEach(img => {
    img.dataset.placeholder = img.dataset.type;
  });
});
