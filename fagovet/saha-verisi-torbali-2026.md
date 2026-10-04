# FAGOVET – Saha Verisi ve Değerlendirme (Ekim 2026)

> Not: Bu depo **herkese açık (public)**. Bu yüzden buraya yalnızca saha verisi ve genel analiz kondu. Kişiler, tedarik zinciri, sözleşme ve açık hukuki konular depo gizliye alınana kadar **eklenmedi**.

## 1. Gelişmeler

- **Bakanlık sunumu (Eylül 2026 sonu):** Ürün için **yem katkı maddesi kategorisi onaylandı.** Böylece Türkiye tarafında "sınıflandırma köprüsü" sorunu kapanmış oldu. Macaristan'daki 128/2009 "gyógyhatású készítmény" kaydı artık TR dosyasının önünde engel değil. Yine de ruhsat dosyasında bu farkın bir paragrafla açıklanması gerekiyor.
- **Saha bilgisi (İzmir / Torbalı – Kızılca):**
  - Çiftlikler sözleşmeli büyütücü. Entegre firma **civciv, yem ve su** sağlıyor, çiftçi **canlı kg başına 10 TL** büyütme ücreti alıyor.
  - **Elektrik, ısıtma, bakım ve işçilik çiftçiye** ait.
  - İlk yem Banvit A.Ş. tarafından gönderiliyor (Banvitaş yem fabrikası, onay no αTR-1000027). Sonraki yemleri çiftçi iki gün önceden sipariş ediyor.
  - **Yem fiyatı ≈ 17.000 TL/ton.**
  - Yemde **E765 Narasin (Monteban G100) 70 mg/kg** (iyonofor koksidiyostat) kullanılıyor. Ayrıca 4a22 ksilanaz (1250 VU) ve 4a37 fitaz (1500 FTU) var. Etiket: "Etlik Piliç Büyütme Yemi (2. Dönem)", 26. günden kesime kadar, toplam ~2.200 g/canlı.

## 2. Kümes verileri (8 Ağustos – 18 Eylül 2026, 42 gün)

Ham veriler: [`veri/kumes_A_162koli.csv`](veri/kumes_A_162koli.csv), [`veri/kumes_B_218koli.csv`](veri/kumes_B_218koli.csv)

| | Kümes A (162 koli) | Kümes B (218 koli) |
|---|---|---|
| 1. hafta ölüm | 185 | 204 |
| Toplam ölüm (42 gün) | ~1.014 (+45 seleksiyon) | ~636 |
| 41.–42. gün ölüm | **120 + 360** | 16 + 17 |
| Toplam yem | ~62 t | ~85 t |
| 42. gün tartım | – (35. gün 2.166 g) | 2.641 g (Ross hedefi 2.809) |

**Civciv sayısı:** Çiftlik sahibine göre iki kümeste toplam yaklaşık **32.000 kuş** var. 380 koliyle bu, koli başına **≈84 civciv** demek: A ≈ 13.600, B ≈ 18.400. Oranlar buna göre:

| | Kümes A | Kümes B | Çiftlik toplamı |
|---|---|---|---|
| 1. hafta ölüm % | 1,36 | 1,11 | 1,22 |
| Toplam ölüm % (42 gün) | 7,4 (seleksiyonla 7,8) | 3,5 | 5,3 (1.695 ölüm + seleksiyon) |
| FCR (yem/canlı kg) | – | 1,82 | – |

Okuma notları: El yazısı haftalık toplamlar günlük değerlerle her zaman tutmuyor (örneğin B'de 4. gün "60" mı "40" mı belli değil; B'nin kümülatif toplamı 607 yazılmış ama doğrusu 637). B'de 32.–33. gün yem değerleri 2223/2291 olarak okunuyor; sıralamaya bakınca bunlar muhtemelen 3223/3291. Değerler okunduğu gibi girildi.

## 3. Değerlendirme

1. **Kümes A'daki son iki gün en önemli bulgu.** 41. ve 42. günde 480 ölüm var, bu sürünün %3–4'ü demek. Yem tüketimi düşmemiş, bu da akut bir olaya işaret ediyor (sıcak stres, hastalık ya da kesim/yükleme kayıpları). Sebep E. coli, Salmonella veya C. perfringens çıkarsa bu, ürünün tam kullanım senaryosu olur.
2. **1. hafta ölümleri yüksek.** Her iki kümeste de %1'in üzerinde. Bu genelde civciv kaynaklı enfeksiyonlara (göbek/yolk sac, E. coli, Salmonella) bağlanır ve fajın en güçlü konumlandığı alan burası.
3. **Asıl müşteri entegre firma, çiftlik değil.** Yem, civciv ve FCR maliyeti entegratörün üzerinde. Çiftçi yemi seçmiyor, kg başına ücret alıyor. Bu yüzden satış Banvit gibi entegratörlere ve onların yem fabrikalarına (premiks/formülasyon) yapılmalı.
4. **Ekonomi (17.000 TL/t yem ile):**
   - 1,7 FCR'de yalnızca yem maliyeti ≈ **29 TL / canlı kg**, buna 10 TL çiftçi ücreti ekleniyor.
   - FCR'de 0,01 iyileşme ≈ **0,17 TL / canlı kg**. B kümesi (~47 t canlı) için 0,03 FCR iyileşmesi sürü başına ≈ **24 bin TL** ediyor.
   - A'daki 480 kuşluk kaybın maliyeti: ~1,3 t canlı ağırlık (çiftçi için ~13 bin TL) ve bu kuşlara yedirilmiş ~2 t yem (entegratör için ~37 bin TL), civciv bedeli hariç.
   - Fiyatlama mantığı: değeri TL/ton yem olarak ifade etmek. 0,03 FCR iyileşmesi ≈ ~300 TL/ton yem değer yaratır. Bu değer paylaşılmalı. Bu kaba bir tahmindir, deneme verisiyle doğrulanmalı.
5. **Narasinle rekabet değil, birlikte kullanım.** Narasin koksidiyoz ve C. perfringens'e karşı zaten yemde. Faj bunun yerine geçmeye değil, narasinin kapsamadığı **Salmonella / E. coli** tarafına odaklanmalı. Birlikte kullanım uyumluluğu dosyada gösterilmeli.
6. **Teknik risk: pelet ısısı.** Entegre yemler buharla peletleniyor (~80–85 °C). Fajlar ısıya hassas ve ürünün saklama koşulu +2–8 °C. Ürün yem fabrikasında karıştırılırsa büyük olasılıkla etkisini kaybeder. Seçenekler: **içme suyu yoluyla uygulama** (BAFASAL da suyla veriliyor) veya pelet sonrası sıvı uygulama (PPLA). Uygulama yolu ruhsat dosyasıyla uyumlu olmalı.
7. **Hazır saha denemesi altyapısı.** Bu kayıt formları Ross/Cobb hedefleriyle birlikte günlük ölüm, yem, su ve tartım tutuyor. Aynı çiftlikte bir kümes uygulama, diğeri kontrol olacak şekilde bir sonraki sürüde deneme yapılabilir. Ölçülecekler: 1. hafta ölüm, toplam ölüm, FCR, 42. gün ağırlık, Salmonella svabı. Türkiye'den gelen saha verisi hem TAGEM dosyasını hem satış görüşmelerini güçlendirir.

## 4. Netleştirilecekler

- Kesin yerleşim sayısı kümes bazında (şimdilik çiftlik toplamı ~32.000'den hesaplandı).
- Kümes A'da 41.–42. günlerde ne oldu? Kesim günü müydü, veteriner teşhisi var mı?
- Bakanlık onayının kapsamı: yalnızca kategori tespiti mi, yoksa dosya kabulü mü? Yazılı belge var mı?
- Entegratör (Banvit) ile deneme için temas imkânı.
