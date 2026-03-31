# Profesyonel Web Portfolyosu 🚀 (Lab 6 - Checkpoint #1)

Bu proje, modern web teknolojileri (React 19, TypeScript, Tailwind CSS v4) kullanılarak geliştirilmiş, tamamen modüler bir yapıya sahip profesyonel bir portfolyo uygulamasıdır. 

## 🏁 Ara Checkpoint #1 Özeti

Lab 6 kapsamında uygulama, PDF Sayfa 22 standartlarına göre tamamen refactor edilmiş ve atomik bileşen mimarisine geçilmiştir.

### ✨ Öne Çıkan Özellikler

- **📦 Komple Modüler Mimari:**
  - `ui/`: Atomik bileşenler (Button, Card, Input, Alert).
  - `layout/`: İskelet bileşenler (Header, Footer).
  - `sections/`: Sayfa bölümleri (Hero, About, Skills, ProjectList, ContactSection).
  - `forms/`: Karmaşık form mantığı (ContactForm, ProjectFilter).
- **🎨 Modern Arayüz:**
  - `Header`: Mobil uyumlu hamburger menü, sticky effect ve backdrop-blur.
  - `Hero`: Dinamik giriş alanı ve Call to Action (CTA) butonları.
  - `Footer`: Sosyal medya linkleri ve UI Kit erişimi.
- **🔍 Dinamik Filtreleme & Sıralama:**
  - Başlık ve teknolojiye göre anlık arama.
  - Kategori bazlı filtreleme ve çoklu sıralama seçenekleri.
- **📝 Gelişmiş Form Yönetimi:**
  - Real-time validation (doğrulama) ve dinamik hata mesajları.
  - Yükleme ve başarı durumları.

### 📸 Ekran Görüntüleri

#### 1. Masaüstü Karanlık Mod (Hero & Hero)
![Masaüstü Görünümü](file:///C:/Users/smt1s/.gemini/antigravity/brain/ce879f06-0f8e-460f-a5b9-3b7cb491b187/top_fold_dark_v2_1774991683862.png)

#### 2. Projeler ve Gelişmiş Filtreleme
![Filtreleme Sistemi](file:///C:/Users/smt1s/.gemini/antigravity/brain/ce879f06-0f8e-460f-a5b9-3b7cb491b187/projects_filters_dark_1774991702843.png)

#### 3. Mobil Menü Görünümü (375px)
![Mobil Menü](file:///C:/Users/smt1s/.gemini/antigravity/brain/ce879f06-0f8e-460f-a5b9-3b7cb491b187/mobile_menu_dark_1774991716115.png)

## 🏗️ Mimari Yapı

- **Dil:** TypeScript (Sıkı tip kontrolü, Sıfır `any`).
- **State Yönetimi:** `useState`, `useMemo` (Performans optimizasyonu).
- **Veri:** Asenkron JSON fetch ve Error/Loading state yönetimi.
- **Git:** `feature/checkpoint-1` branch yönetimi.

## 🚀 Hızlı Başlangıç

1. `npm install`
2. `npm run dev`
3. Tarayıcıda aç: `http://localhost:5173`

---
&copy; 2025 Samet Şahin - WEB-LAB Deneyleri
