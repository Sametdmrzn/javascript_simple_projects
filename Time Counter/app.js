// Sayaç başlangıç değeri
let counterValue = 0;

// Sayaç değerini gösteren eleman
const counterDisplay = document.getElementById("counter");

// Tüm butonları seç
const buttons = document.querySelectorAll(".btn");

// İşlemleri bir nesneye tanımla
const actions = {
  increase: () => counterValue++, // Sayacı artır
  decrease: () => counterValue--, // Sayacı azalt
  reset: () => (counterValue = 0), // Sayacı sıfırla
};

// Butonlara tıklama olayları ekle
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Tıklanan butonun id'sine göre işlem seç ve uygula
    const action = actions[e.target.id];
    if (action) action(); // Eğer geçerli bir işlem varsa çalıştır

    // Yeni sayaç değerini ekrana yazdır
    counterDisplay.textContent = counterValue;
  });
});
