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



---

## 🚀 Kurulum ve Çalıştırma



