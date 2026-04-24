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
"🍽️ Tarif Detay Ekranı: Tarif ve Malzeme sınıflarından (sınıf ilişkileri kullanılarak) çekilen verilerin birleştirildiği sayfa. Kullanıcılar bu ekranda tarifin porsiyon, süre ve zorluk bilgilerini görürken, adım adım hazırlanış aşamalarını inceleyebilirler.

<img width="998" height="942" alt="WhatsApp Image 2026-04-24 at 02 07 44" src="https://github.com/user-attachments/assets/0d6ab4b0-987b-4c74-be0d-5fe1ccd2726a" />

"📂 Kapsamlı Tarif Kataloğu: Ziyaretçilerin aradıkları lezzetlere hızlıca ulaşabilmesi için tasarlanmış modern liste görünümü. Her bir tarif kartı; hazırlama süresi, zorluk derecesi ve porsiyon gibi özet bilgileri barındırarak kullanıcıya kolay bir seçim imkanı sunar."

<img width="1258" height="842" alt="WhatsApp Image 2026-04-24 at 01 55 19" src="https://github.com/user-attachments/assets/3983b7af-4a38-426c-80f4-c31260c2be60" />

"🛡️ Yönetim Paneli Erişimi: Platformdaki tarifleri, kategorileri ve sistem ayarlarını kontrol etmek üzere tasarlanmış yönetim paneline güvenli giriş sağlayan ekran. Siteden yönetim paneline geçiş, sade ve kullanıcı dostu bir arayüzle sağlanmıştır."

<img width="546" height="377" alt="WhatsApp Image 2026-04-24 at 01 55 37" src="https://github.com/user-attachments/assets/483a547e-f21f-4652-a90f-2f9374b767bd" />

"❗ Başarısız Giriş ve Uyarı Sistemi: Yönetim paneline yetkisiz veya hatalı bilgilerle erişilmeye çalışıldığında sistemin verdiği tepki. Kullanıcı dostu bir arayüzle, ziyaretçiye sorunun ne olduğu (Kullanıcı adı veya şifre hatası) net bir şekilde iletilmektedir."

<img width="842" height="436" alt="WhatsApp Image 2026-04-24 at 01 55 58" src="https://github.com/user-attachments/assets/bc48c000-fb92-44bc-a60f-b095d8bfa415" />

"📊 Tarif Yönetim Merkezi (Admin Dashboard): Yöneticilerin platformdaki tüm içeriklere tam hakimiyet kurmasını sağlayan gelişmiş panel. Sistemde kayıtlı tüm tariflerin özet görselleriyle listelendiği, anlık arama yapılabildiği ve tek tıkla aksiyon (Görüntüleme, Düzenleme, Silme) alınabildiği modern bir yönetim arayüzü sunar."

<img width="1600" height="779" alt="WhatsApp Image 2026-04-24 at 01 56 21" src="https://github.com/user-attachments/assets/3010d260-2073-4f82-8e8e-e03a2ac25c11" />

"📝 Kapsamlı Tarif Düzenleme Formu: İçerik yönetimini pratikleştirmek için tasarlanmış güncelleme sayfası. Seçilen tarife ait tüm bilgilerin üç modül halinde (Temel Bilgiler, Görsel, Tarif Detayları) derli toplu sunulduğu bu arayüz, yöneticilere hızlı ve güvenli bir veri düzenleme deneyimi sağlar."

<img width="1600" height="759" alt="WhatsApp Image 2026-04-24 at 01 56 40" src="https://github.com/user-attachments/assets/7408f574-4750-4e87-9561-33aeb91a61e5" />

"📝 Dinamik Tarif Ekleme Formu: Sisteme yeni bir içerik girmek için tasarlanmış, kullanıcı dostu arayüz. Hatalı veya formata uymayan girişlerde anında uyarı veren akıllı form yapısı ve canlı görsel önizleme özelliği sayesinde, veri bütünlüğü ve hatasız içerik yönetimi sağlanmaktadır."

<img width="1600" height="805" alt="WhatsApp Image 2026-04-24 at 02 02 45" src="https://github.com/user-attachments/assets/19a6d7bf-d88b-4e92-b30f-2384b3907712" />

"🗑️ Veri Silme (Delete) ve Sistem Geri Bildirimi: Yönetim panelinden tetiklenen silme işleminin başarıyla sonuçlandığını gösteren doğrulama mesajı. Bu adım, veritabanı bütünlüğünü koruyarak hedeflenen kaydın sistemden güvenli bir şekilde kaldırıldığını kanıtlar ve CRUD döngüsünü tamamlar."

<img width="690" height="230" alt="WhatsApp Image 2026-04-24 at 02 04 09" src="https://github.com/user-attachments/assets/fa132dce-2637-4ae9-bb21-50a2e9e4278c" />

"⚠️ İşlem Onay Mekanizması: Kritik bir yönetim işlemi olan 'Silme' eyleminden önce kullanıcının kararını doğrulamasını sağlayan arayüz. Yönetim panelinde yanlışlıkla butona basılma ihtimaline karşı, endüstri standartlarına uygun bir kullanıcı deneyimi (UX) hedeflenmiştir."

<img width="1600" height="374" alt="WhatsApp Image 2026-04-24 at 02 04 30" src="https://github.com/user-attachments/assets/f8d28f86-4049-4eb1-ba38-351cb0a96589" />

"👤 Kullanıcı/Admin Arayüzü: Yönetici veya kayıtlı kullanıcıların sisteme giriş yaptıktan sonra siteyi nasıl görüntülediğini gösteren detay ekranı. Dinamik üst menü (Navbar), kullanıcının giriş durumuna göre güncellenmektedir."

<img width="1600" height="794" alt="WhatsApp Image 2026-04-24 at 02 05 02" src="https://github.com/user-attachments/assets/8b20fb70-5012-4727-99a9-c082cf9fc100" />

"🧭 Akıllı Üst Menü (Navbar): Platform içinde dolaşımı kolaylaştıran merkezi navigasyon çubuğu. Yöneticilerin normal site görünümü (Tarifler) ile Yönetim Paneli arasında tek tıkla geçiş yapabilmesi ve güvenli bir şekilde oturumlarını kapatabilmeleri için tasarlanmış sade ve işlevsel bir arayüz bileşenidir."

<img width="1027" height="84" alt="WhatsApp Image 2026-04-24 at 02 05 40" src="https://github.com/user-attachments/assets/d8c1e93d-ae32-4610-a143-bc4ce773e7f2" />

"⚙️ Kategori Kontrol Merkezi: Sitenin ön yüzünde (Frontend) ziyaretçilerin kullandığı kategori menüsünün arka planda yönetildiği liste ekranı. Sistemin modüler yapısı sayesinde, koda müdahale etmeden paneli kullanarak platforma yepyeni mutfak kategorileri dahil edilebilmektedir."

<img width="1600" height="661" alt="WhatsApp Image 2026-04-24 at 02 05 58" src="https://github.com/user-attachments/assets/3646e333-39b7-49b8-b0f6-f9c5d9ba96cb" />

"🔧 Kategori Düzenleme Arayüzü: Yöneticilerin mevcut kategori isimlerini hızlıca değiştirebilmesi için tasarlanmış sade form ekranı. İşlemi iptal etmek isteyen kullanıcılar için 'Listeye Dön' butonu ile güvenli navigasyon (routing) imkanı sunulmuştur."

<img width="896" height="315" alt="WhatsApp Image 2026-04-24 at 02 06 10" src="https://github.com/user-attachments/assets/361a573b-9568-478c-b185-6e39117fe93b" />



<img width="682" height="441" alt="WhatsApp Image 2026-04-24 at 02 06 20" src="https://github.com/user-attachments/assets/9df84ef3-63b3-4afd-a7ce-7e0eb61f9c41" />

<img width="500" height="183" alt="WhatsApp Image 2026-04-24 at 02 06 35" src="https://github.com/user-attachments/assets/08236f6a-16f8-4b7b-8d0b-7d944b64397a" />

<img width="621" height="442" alt="WhatsApp Image 2026-04-24 at 02 07 13" src="https://github.com/user-attachments/assets/fd7ea222-bb4c-49c8-bb18-5c58095cea44" />



---





