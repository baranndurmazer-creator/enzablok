# ENZABLOCK — Web sitesi

“Feed Smart, Grow Strong” — sığır, koyun ve keçiler için melas bazlı vitamin & mineral yalama bloğu.

Statik, iki dilli (Türkçe / Macarca) tanıtım ve distribütör sitesi. Derleme adımı yoktur; dosyalar doğrudan herhangi bir statik barındırmada (GitHub Pages, Netlify, cPanel vb.) yayınlanabilir.

## Yapı

```
index.html            Türkçe sayfa (varsayılan)
hu/index.html         Macarca sayfa
assets/css/style.css  Tüm stiller (marka renkleri :root içinde)
assets/js/main.js     Menü, animasyonlar, blok hesaplayıcı, iletişim formu
assets/img/           Logo, ürün görseli, sertifikalar, etiket, favicon, paylaşım görseli
```

## Bölümler

Ürün · 6 farklılık · Bileşim ve premiks tabloları (AB katkı numaralarıyla) · Bilimsel temel (150 g/gün ile ihtiyaç karşılama, NASEM 2016) · 10 saha faydası · Kullanım ve blok ihtiyacı hesaplayıcı · Kalite & mevzuat (ISO 9001, GMP, etiket) · Hakkımızda ve tedarik zinciri · Pazarlar, lojistik ve 36 aylık yol haritası · Distribütörlük (marj modeli, hacim kademeleri, 3 aşamalı model, 30 günlük saha denemesi, destek paketi) · SSS · İletişim.

## Yerelde açmak

`index.html` dosyasını tarayıcıda açmanız yeterli. Ya da:

```
python3 -m http.server 8000
# http://localhost:8000
```

## Notlar

- İletişim formu sunucu gerektirmez: ziyaretçinin e-posta uygulamasını `info@enzablock.com` adresine hazır bir mesajla açar. Formun doğrudan gelen kutusuna düşmesi istenirse Formspree / Netlify Forms gibi bir servis bağlanabilir.
- Fiyatlar ve rakip karşılaştırmaları bilinçli olarak sitede yer almaz; net fiyat listesi distribütör görüşmesinde paylaşılır.
- İçerik kaynağı: ENZABLOCK distribütör sunumu (TR/HU), şirket tanıtımı (HU), fiyat & rakip analizi ve kartvizit.
