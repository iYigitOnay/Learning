// 'Product' adında bir arayüz (interface) tanımlıyoruz.
// Bu, 'Product' tipine sahip her objenin (object) uyması gereken bir sözleşmedir (contract).
interface Product {
  // readonly: Bu özelliğin (property) sadece okunabilir (read-only) olduğunu belirtir.
  // İlk atamadan sonra değeri değiştirilemez.
  readonly sku: string; 
  name: string;
  price: number;

  // '?' işareti bu özelliğin (property) opsiyonel (optional) olduğunu gösterir.
  // Yani bu özelliğe sahip olmayan 'Product' objeleri de geçerli sayılır.
  stock?: number; 
}

// 'displayProduct' fonksiyonu, parametre (parameter) olarak 'Product' arayüzüne (interface) uyan bir obje (object) bekler.
function displayProduct(product: Product): void { // void: Bu fonksiyonun bir değer döndürmediğini belirtir.
  console.log(`Ürün Adı: ${product.name}, Fiyat: ${product.price} TL`);
  
  // Opsiyonel (optional) bir özelliği kullanmadan önce varlığını kontrol etmek iyi bir pratiktir.
  if (product.stock) {
    console.log(`Stok Adedi: ${product.stock}`);
  }
}

// 'Product' arayüzüne (interface) uygun bir obje (object) oluşturalım.
const keyboard: Product = {
  sku: "LOGI-K120",
  name: "Logitech K120 Klavye",
  price: 450.50,
  stock: 150
};

// Opsiyonel (optional) 'stock' özelliği olmayan bir obje (object). Bu da geçerlidir.
const mouse: Product = {
  sku: "LOGI-M185",
  name: "Logitech M185 Mouse",
  price: 299.90
};

// keyboard.sku = "YENI-SKU"; // HATA! 'sku' özelliği readonly (salt okunur) olduğu için değiştirilemez.

displayProduct(keyboard);
displayProduct(mouse);