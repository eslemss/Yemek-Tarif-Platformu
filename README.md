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

Sistemin arayüzü ve çalışma mantığını gösteren ekran görüntülerini aşağıda inceleyebilirsiniz:

"✨ Kapsamlı Tarif İnceleme Sayfası: Kullanıcıların seçtikleri yemeğin tüm detaylarına tek bir ekrandan ulaşabildiği dinamik arayüz. Malzeme listesi ve numaralandırılmış yapılış adımları ile kolay okunabilirlik hedeflenmiştir."

<img width="1027" height="84" alt="WhatsApp Image 2026-04-24 at 02 05 40" src="https://github.com/user-attachments/assets/4376ee08-19db-40a3-9da3-7459234ce79f" />

"📂 Kapsamlı Tarif Kataloğu: Ziyaretçilerin aradıkları lezzetlere hızlıca ulaşabilmesi için tasarlanmış modern liste görünümü. Her bir tarif kartı; hazırlama süresi, zorluk derecesi ve porsiyon gibi özet bilgileri barındırarak kullanıcıya kolay bir seçim imkanı sunar."
<img width="1600" height="661" alt="WhatsApp Image 2026-04-24 at 02 05 58" src="https://github.com/user-attachments/assets/fd3c9d6f-c70f-4229-b4ce-47a55e33c8b9" />

"🛡️ Yönetim Paneli Erişimi: Platformdaki tarifleri, kategorileri ve sistem ayarlarını kontrol etmek üzere tasarlanmış yönetim paneline güvenli giriş sağlayan ekran. Siteden yönetim paneline geçiş, sade ve kullanıcı dostu bir arayüzle sağlanmıştır."
<img width="896" height="315" alt="WhatsApp Image 2026-04-24 at 02 06 10" src="https://github.com/user-attachments/assets/04080fff-2d9c-42c9-bbfd-ccacbaecf7fb" />

"❗ Başarısız Giriş ve Uyarı Sistemi: Yönetim paneline yetkisiz veya hatalı bilgilerle erişilmeye çalışıldığında sistemin verdiği tepki. Kullanıcı dostu bir arayüzle, ziyaretçiye sorunun ne olduğu (Kullanıcı adı veya şifre hatası) net bir şekilde iletilmektedir.
<img width="682" height="441" alt="WhatsApp Image 2026-04-24 at 02 06 20" src="https://github.com/user-attachments/assets/9e3eccdf-91e7-4b1d-9a41-715f4b8e32da" />

"📊 Tarif Yönetim Merkezi (Admin Dashboard): Yöneticilerin platformdaki tüm içeriklere tam hakimiyet kurmasını sağlayan gelişmiş panel. Sistemde kayıtlı tüm tariflerin özet görselleriyle listelendiği, anlık arama yapılabildiği ve tek tıkla aksiyon (Görüntüleme, Düzenleme, Silme) alınabildiği modern bir yönetim arayüzü sunar."
<img width="500" height="183" alt="WhatsApp Image 2026-04-24 at 02 06 35" src="https://github.com/user-attachments/assets/fece67f0-79af-4b73-830f-ac987f7a727d" />

"🔄 Veri Güncelleme (Update) Ekranı: Tarif sınıfında tanımlanan tarif_guncelle() metodunun arayüzdeki (UI) karşılığıdır. Sistemdeki mevcut bir kaydın çağrılarak form alanlarına doldurulduğu (data binding) bu ekranda yöneticiler; yemeğin temel özelliklerini, Malzeme listesini, yapılış aşamalarını ve görselini tek merkezden kolayca modifiye edebilir."
<img width="621" height="442" alt="WhatsApp Image 2026-04-24 at 02 07 13" src="https://github.com/user-attachments/assets/4da6203b-1cbc-4f29-9383-dfe279f76fbe" />

"📝 Dinamik Tarif Ekleme Formu: Sisteme yeni bir içerik girmek için tasarlanmış, kullanıcı dostu arayüz. Hatalı veya formata uymayan girişlerde anında uyarı veren akıllı form yapısı ve canlı görsel önizleme özelliği sayesinde, veri bütünlüğü ve hatasız içerik yönetimi sağlanmaktadır."
<img width="1258" height="842" alt="WhatsApp Image 2026-04-24 at 01 55 19" src="https://github.com/user-attachments/assets/6aa4c853-8f5b-4f63-9408-5a1b525c201a" />

"🗑️ Veri Silme (Delete) ve Sistem Geri Bildirimi: Yönetim panelinden tetiklenen silme işleminin başarıyla sonuçlandığını gösteren doğrulama mesajı. Bu adım, veritabanı bütünlüğünü koruyarak hedeflenen kaydın sistemden güvenli bir şekilde kaldırıldığını kanıtlar ve CRUD döngüsünü tamamlar."
<img width="546" height="377" alt="WhatsApp Image 2026-04-24 at 01 55 37" src="https://github.com/user-attachments/assets/bd64d1e5-1fa0-4df8-b199-e42f78feca36" />

"⚠️ İşlem Onay Mekanizması: Kritik bir yönetim işlemi olan 'Silme' eyleminden önce kullanıcının kararını doğrulamasını sağlayan arayüz. Yönetim panelinde yanlışlıkla butona basılma ihtimaline karşı, endüstri standartlarına uygun bir kullanıcı deneyimi (UX) hedeflenmiştir."
<img width="842" height="436" alt="WhatsApp Image 2026-04-24 at 01 55 58" src="https://github.com/user-attachments/assets/9044f67c-a881-4e50-890e-b0d100dc96a8" />

"👤 Kullanıcı/Admin Arayüzü: Yönetici veya kayıtlı kullanıcıların sisteme giriş yaptıktan sonra siteyi nasıl görüntülediğini gösteren detay ekranı. Dinamik üst menü (Navbar), kullanıcının giriş durumuna göre güncellenmektedir."
<img width="1600" height="779" alt="WhatsApp Image 2026-04-24 at 01 56 21" src="https://github.com/user-attachments/assets/87994e67-6dbc-4e87-8fed-fcecd3e57d1d" />

"⚙️ Kategori Kontrol Merkezi: Sitenin ön yüzünde (Frontend) ziyaretçilerin kullandığı kategori menüsünün arka planda yönetildiği liste ekranı. Sistemin modüler yapısı sayesinde, koda müdahale etmeden paneli kullanarak platforma yepyeni mutfak kategorileri dahil edilebilmektedir."
<img width="1600" height="759" alt="WhatsApp Image 2026-04-24 at 01 56 40" src="https://github.com/user-attachments/assets/036be885-d23e-4359-afc1-23df5a836ca8" />

"🧭 Akıllı Üst Menü (Navbar): Platform içinde dolaşımı kolaylaştıran merkezi navigasyon çubuğu. Yöneticilerin normal site görünümü (Tarifler) ile Yönetim Paneli arasında tek tıkla geçiş yapabilmesi ve güvenli bir şekilde oturumlarını kapatabilmeleri için tasarlanmış sade ve işlevsel bir arayüz bileşenidir."
<img width="1600" height="805" alt="WhatsApp Image 2026-04-24 at 02 02 45" src="https://github.com/user-attachments/assets/ffdf4198-9ba1-42f2-a9ef-c6690c80f407" />

"🔧 Kategori Düzenleme Arayüzü: Yöneticilerin mevcut kategori isimlerini hızlıca değiştirebilmesi için tasarlanmış sade form ekranı. İşlemi iptal etmek isteyen kullanıcılar için 'Listeye Dön' butonu ile güvenli navigasyon (routing) imkanı sunulmuştur."
<img width="690" height="230" alt="WhatsApp Image 2026-04-24 at 02 04 09" src="https://github.com/user-attachments/assets/5270890f-d7e9-437e-a9b9-c096c8c185e8" />

"⚠️ Anlık Hata Yönetimi: Kullanıcının form formatına uymayan veri (örneğin rakam) girmeye çalıştığında karşılaştığı güvenlik önlemi. Sayfa yenilenmeden verilen anlık geri bildirimler sayesinde hem kullanıcı deneyimi artırılmış hem de sistemdeki veri kalitesi korunmuştur."
<img width="1600" height="374" alt="WhatsApp Image 2026-04-24 at 02 04 30" src="https://github.com/user-attachments/assets/0f8173c0-a880-4716-a2e5-26a47fc895f2" />

"🔔 Başarılı İşlem Bildirimi: Yöneticinin form üzerinden yaptığı değişikliklerin sisteme başarıyla işlendiğini gösteren onay ekranı. İyi bir kullanıcı deneyimi (UX) ilkesi olarak, kullanıcılar yaptıkları kritik işlemlerin sonuçları hakkında bu şekilde anında bilgilendirilmektedir."
<img width="1600" height="794" alt="WhatsApp Image 2026-04-24 at 02 05 02" src="https://github.com/user-attachments/assets/0f30f522-fc76-4d26-a969-ae45f312c077" />




---


  
