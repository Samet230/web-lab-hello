# CSS Tasarım Kararları (CSS Decisions)

Bu belge, Web Lab - 3 kapsamında uygulanan CSS mimarisi ve responsive tasarım stratejilerini teknik detaylarıyla açıklamaktadır.

## 1. Design Tokens ve Merkezi Yönetim
Projede tüm renk, boşluk (spacing), kenar yuvarlama (radius) ve geçiş süreleri `tokens.css` dosyasında CSS Değişkenleri (Custom Properties) olarak tanımlanmıştır. 
- **Neden:** Tasarımda tutarlılığı (consistency) sağlamak ve olası bir tema değişikliğini (örneğin Dark Mode) tek bir merkezden yönetebilmek için bu yaklaşım tercih edilmiştir. Ad-hoc (rastgele) değerler yerine bu token'ların kullanımı, kodun bakımını kolaylaştırmaktadır.

## 2. Flexbox ve CSS Grid Hibrit Kullanımı
Düzenleme (Layout) işlemlerinde her iki teknolojinin de güçlü yönlerinden faydalanılmıştır:
- **Flexbox (1D):** Header ve Navigasyon bölümlerinde, öğelerin tek bir eksen üzerinde hizalanması ve mobil ekranlarda kolayca dikey yığın (`flex-direction: column`) haline getirilmesi için kullanılmıştır. `flex-wrap: wrap` özelliği ile menü öğelerinin küçük ekranlarda taşması engellenmiştir.
- **CSS Grid (2D):** Projeler (Project Grid) bölümünde kullanılmıştır. `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` yapısı, herhangi bir media query yazmaya gerek kalmadan, ekran genişliği değiştikçe ızgaranın otomatik olarak yeniden şekillenmesini (reflow) sağlamaktadır. Bu, karmaşık responsive hesaplamalarını tarayıcıya bırakarak daha temiz kod üretmemizi sağlar.

## 3. Fluid Typography ve Responsive Ölçeklendirme
Yazı boyutları (Typography), `tokens.css` içinde `clamp()` fonksiyonu kullanılarak tanımlanmıştır.
- **Neden:** Geleneksel "breakpoint-based" (media query bağımlı) yazı boyutu değiştirme yöntemi yerine Akışkan Tipografi (Fluid Typography) tercih edilmiştir. `clamp(minimum, preferred, maximum)` yapısı sayesinde, metinler mobil ve masaüstü arasında sarsıntısız bir şekilde geçiş yapar. Bu, kullanıcı deneyimini iyileştirirken CSS dosyasındaki media query kalabalığını azaltmaktadır.
- **Erişilebilirlik:** Tüm etkileşimli öğeler (butonlar, linkler) için `*:focus` seçicisi ile belirgin bir odaklanma çerçevesi (outline) eklenerek klavye kullanıcıları için navigasyon kolaylaştırılmıştır.
