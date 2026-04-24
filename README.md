# 🍽️ Proje 6: Yemek Tarif Platformu

Bu proje, kullanıcıların yeni yemek tarifleri keşfedebildiği, kendi tariflerini sisteme ekleyip güncelleyebildiği ve mevcut tarifleri değerlendirebildiği dinamik bir **Yemek Tarif Platformu** simülasyonudur. Proje mimarisi, Nesne Yönelimli Programlama (OOP) prensipleri temel alınarak modüler ve genişletilebilir bir yapıda tasarlanmıştır.

## 🏗️ Sistem Mimarisi ve Sınıf Yapısı

Proje, verilerin düzenli tutulması ve işlemlerin kolay yönetilebilmesi için üç temel sınıf üzerinden kurgulanmıştır:

### 1. `Tarif` Sınıfı
Sistemin çekirdeğini oluşturan, yemek tariflerine ait temel bilgilerin ve işlemlerin tutulduğu sınıftır.
* **Özellikler (Attributes):**
  * `tarif_id`: Her tarifi benzersiz kılan kimlik numarası.
  * `tarif_adi`: Yemeğin adı.
  * `kategori`: Yemeğin ait olduğu kategori (Örn: Çorbalar, Ana Yemekler, Tatlılar).
  * `hazirlama_suresi`: Yemeğin ortalama hazırlık ve pişirme süresi.
* **Metotlar (Methods):**
  * `tarif_ekle()`: Sisteme yeni bir tarif nesnesi dahil eder.
  * `tarif_guncelle()`: Mevcut bir tarifin içerik veya detaylarını günceller.

### 2. `Malzeme` Sınıfı
Tariflerin içeriklerini detaylandırmak için kullanılan, malzeme ve ölçü bilgilerini tutan sınıftır.
* **Özellikler (Attributes):**
  * `malzeme_adi`: Kullanılan malzemenin adı.
  * `miktar`: İlgili tarif için gereken malzeme ölçüsü (Örn: 2 Su Bardağı, 100 gram).

### 3. `Kullanıcı` Sınıfı
Platformla etkileşime giren kullanıcıların tanımlandığı ve yetkilendirildiği sınıftır.
* **Özellikler (Attributes):**
  * `kullanici_id`: Kullanıcıyı sistemde benzersiz kılan numara.
  * `ad`: Kullanıcının ad ve soyad bilgisi.
* **Metotlar (Methods):**
  * `tarif_degerlendir()`: Kullanıcının, platformdaki bir tarife puan vermesini veya yorum yapmasını sağlayan işlev.

---

## 📸 Proje Ekran Görüntüleri
"🛡️ Güvenli Silme (Delete) Onayı: Veritabanından kalıcı olarak veri silinmeden önce devreye giren ve kazara veri kaybını (data loss) önleyen güvenlik katmanı. Kullanıcı 'Sil' butonuna tıkladığında işlem doğrudan veritabanına iletilmez; öncelikle niyet doğrulaması (Confirmation Dialog) istenir ve ancak onay verilirse arka plandaki silme metodu tetiklenir."
<img width="1600" height="374" alt="WhatsApp Image 2026-04-24 at 02 04 30" src="https://github.com/user-attachments/assets/81385f13-b17b-4654-88c0-102a6c88b754" />

"👤 Kullanıcı/Admin Arayüzü: Yönetici veya kayıtlı kullanıcıların sisteme giriş yaptıktan sonra siteyi nasıl görüntülediğini gösteren detay ekranı. Dinamik üst menü (Navbar), kullanıcının giriş durumuna göre güncellenmektedir."
<img width="1600" height="794" alt="WhatsApp Image 2026-04-24 at 02 05 02" src="https://github.com/user-attachments/assets/b6b67b82-ac1d-47f2-b2b1-497629e77f72" />

"🧭 Akıllı Üst Menü (Navbar): Platform içinde dolaşımı kolaylaştıran merkezi navigasyon çubuğu. Yöneticilerin normal site görünümü (Tarifler) ile Yönetim Paneli arasında tek tıkla geçiş yapabilmesi ve güvenli bir şekilde oturumlarını kapatabilmeleri için tasarlanmış sade ve işlevsel bir arayüz bileşenidir."
<img width="1027" height="84" alt="WhatsApp Image 2026-04-24 at 02 05 40" src="https://github.com/user-attachments/assets/0f868a81-261d-4f75-b271-ff4008841bcc" />

"🗂️ Dinamik Kategori Yönetimi (CRUD): Platformdaki tariflerin sınıflandırılmasını sağlayan ve ana sayfa filtreleme altyapısını besleyen kategori yönetim arayüzü. Kategorilerin statik metinler yerine veritabanı üzerinden dinamik olarak çekildiği bu ekranda; yöneticiler yeni kategoriler ekleyebilir, mevcutları düzenleyebilir veya silebilir. Bu yapı, projenin ileride büyümeye açık (scalable) olduğunu gösterir."
<img width="1600" height="661" alt="WhatsApp Image 2026-04-24 at 02 05 58" src="https://github.com/user-attachments/assets/f4f6b9b1-e3f6-4d98-9dd0-195718440c10" />

"✏️ Kategori Güncelleme (Update) İşlemi: Sistemdeki mevcut bir yemek kategorisinin adının düzenlendiği yönetim formu. Seçilen kategori bilgisi form alanına otomatik olarak çekilir (Data Binding) ve yapılan değişiklikler veritabanına anlık olarak yansıtılarak, ana sayfadaki dinamik filtreleme menüsünün güncel kalması sağlanır."
<img width="896" height="315" alt="WhatsApp Image 2026-04-24 at 02 06 10" src="https://github.com/user-attachments/assets/d203b9fa-9f85-4f19-a0cf-32f006229288" />

"🚫 Kategori Validasyonu (Form Validation): Veritabanı bütünlüğünü sağlamak amacıyla kategori formlarında uygulanan anlık doğrulama işlemi. Kullanıcının kategori ismine rakam girmesi durumunda, sistem (regex/tip kontrolü ile) bu girişi yakalar ve dinamik bir hata mesajıyla geçersiz kaydın sunucuya iletilmesini engeller."
<img width="682" height="441" alt="WhatsApp Image 2026-04-24 at 02 06 20" src="https://github.com/user-attachments/assets/c0c5f44d-df12-4823-beea-05611965dad8" />

"✅ Veritabanı Senkronizasyonu ve Sistem Geri Bildirimi: Güncelleme (Update) metodunun arka planda hatasız çalıştığını ve yeni verilerin veritabanına başarıyla yazıldığını doğrulayan sistem mesajı. Bu bildirim, istemci (Frontend) ile sunucu (Backend) arasındaki işlemin sorunsuz tamamlandığını yöneticiye anlık olarak iletir."
<img width="500" height="183" alt="WhatsApp Image 2026-04-24 at 02 06 35" src="https://github.com/user-attachments/assets/f06fa36c-9d93-4d3d-a0fe-5d1ee9a07303" />

"➕ Yeni Kategori Ekleme (Create) İşlemi: Sistemin mimarisini dışarıdan koda müdahale etmeden genişletmeye olanak tanıyan veri giriş arayüzü. Veritabanına yeni bir kategori kaydı atan bu form sayesinde, platformun ana sayfasındaki filtreleme menüsüne yepyeni sınıflandırmalar (örneğin: Tatlılar, Yöresel Lezzetler) anında eklenebilir."
<img width="621" height="442" alt="WhatsApp Image 2026-04-24 at 02 07 13" src="https://github.com/user-attachments/assets/340db94c-3dc7-4197-b8a8-4438a185b469" />

"🍽️ Tarif Detay Ekranı: Tarif ve Malzeme sınıflarından (sınıf ilişkileri kullanılarak) çekilen verilerin birleştirildiği sayfa. Kullanıcılar bu ekranda tarifin porsiyon, süre ve zorluk bilgilerini görürken, adım adım hazırlanış aşamalarını inceleyebilirler."
<img width="998" height="942" alt="WhatsApp Image 2026-04-24 at 02 07 44" src="https://github.com/user-attachments/assets/f254eb66-eaa4-49fc-a5cf-95eaf6058f64" />

"📂 Kapsamlı Tarif Kataloğu: Ziyaretçilerin aradıkları lezzetlere hızlıca ulaşabilmesi için tasarlanmış modern liste görünümü. Her bir tarif kartı; hazırlama süresi, zorluk derecesi ve porsiyon gibi özet bilgileri barındırarak kullanıcıya kolay bir seçim imkanı sunar."
<img width="1258" height="842" alt="WhatsApp Image 2026-04-24 at 01 55 19" src="https://github.com/user-attachments/assets/cb46ff98-9cbf-4418-93ea-f705ae5cecbf" />

"🔐 Yönetici (Admin) Giriş Ekranı: Sistemin arka planındaki veri yönetimi ve CRUD (Ekleme, Okuma, Güncelleme, Silme) işlemleri için yetkilendirilmiş kullanıcıların sisteme eriştiği güvenli doğrulama sayfası. Bu ekran, Kullanıcı sınıfı üzerinden kimlik doğrulama (authentication) ve yetkilendirme (authorization) süreçlerinin yönetimini temsil eder."
<img width="546" height="377" alt="WhatsApp Image 2026-04-24 at 01 55 37" src="https://github.com/user-attachments/assets/4b766e9b-ebad-4410-95a1-37b4f9d9a206" />


<img width="842" height="436" alt="WhatsApp Image 2026-04-24 at 01 55 58" src="https://github.com/user-attachments/assets/f967e86f-0c7b-4bb0-9dbb-8a678548defd" />
<img width="1600" height="779" alt="WhatsApp Image 2026-04-24 at 01 56 21" src="https://github.com/user-attachments/assets/7e7ddc1f-ea7d-454d-b92d-f483a1e6a6de" />
<img width="1600" height="759" alt="WhatsApp Image 2026-04-24 at 01 56 40" src="https://github.com/user-attachments/assets/4ed05b2d-38e6-4481-a589-48e0a123426e" />
<img width="1600" height="805" alt="WhatsApp Image 2026-04-24 at 02 02 45" src="https://github.com/user-attachments/assets/ad7f8810-88b1-4b2a-8cda-7e3e894e237e" />
<img width="690" height="230" alt="WhatsApp Image 2026-04-24 at 02 04 09" src="https://github.com/user-attachments/assets/c8eb06cb-290d-4257-8683-6d0c98a648d6" />



