// app.js
document.getElementById("generate").addEventListener("click", function () {
    const sifreUzunlugu = parseInt(document.getElementById("length").value);
    if (!sifreUzunlugu || sifreUzunlugu <= 0) {
      alert("Lütfen geçerli bir şifre uzunluğu giriniz!");
      return;
    }
  
    // Karakter havuzu
    const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
    const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sayilar = "0123456789";
    const ozelKarakterler = "@#$%&";
    const karakterHavuzu = kucukHarfler + buyukHarfler + sayilar + ozelKarakterler;
  
    let rastgeleSifre = "";
    for (let i = 0; i < sifreUzunlugu; i++) {
      const rastgeleIndeks = Math.floor(Math.random() * karakterHavuzu.length);
      rastgeleSifre += karakterHavuzu[rastgeleIndeks];
    }
  
    // Şifreyi ekrana yazdır
    document.getElementById("password").value = rastgeleSifre;
  });
  
  // Kopyala butonu
  document.getElementById("copy").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.value === "") {
      alert("Henüz bir şifre oluşturulmadı!");
      return;
    }
  
    passwordField.select();
    document.execCommand("copy");
    alert("Şifre kopyalandı!");
  });
  