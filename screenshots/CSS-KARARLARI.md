## 1. Breakpoint Secimi

 Kırılım noktalarını cihazlardan ziyade içeriğin nerede bozulduğuna göre veya genel geçerli standartlara göre belirledim.
 640px değerini tabletler, 1024px değerini ise masaüstü ekranlar için yaygın kırılım noktaları olduğu için tercih ettim
 Cep telefonu ekranları yatayda dar olduğu için, içerikleri yan yana koymak sıkışık ve okunaksız bir görünüme sebep olur. Bu yüzden CSS'te en dar ekranlar için flex-direction: column kuralını yazdım.
 640px (tablet) kırılım noktasında ekran genişlediği için 'Hakkımda' içeriğini yan yana (row) aldım ve butonu normal boyutuna küçülttüm. 1024px (masaüstü) kırılım noktasına geldiğimizde ise proje kartlarını 3 sütunlu sabit bir ızgaraya yerleştirdim ve çok büyük ekranlarda sayfanın yayılmasını engellemek için içeriğe maksimum genişlik (1200px) verip ortaladım.

 ## 2. Layout Tercihleri

 Header ve navigasyon gibi tek bir eksen (sadece yatay) boyunca hizalama gerektiren yerlerde Flexbox kullandım.
 Ancak proje kartları gibi hem satır hem de sütun yapısı barındıran iki boyutlu alanlarda CSS Grid tercih ettim.
 Kartların ekrana göre esnemesi ve boş sütun kalmaması için auto-fill yerine auto-fit özelliğini kullandım.

## 3. Design Tokens

 İleride bir renk veya boşluk değerini değiştirmek istediğimde tek satırda halledebilmek için Design Tokens (CSS değişkenleri) kullandım.
 Yazı boyutlarının ekran genişliğine göre kesintisiz ve akıcı bir şekilde büyüyüp küçülmesi için clamp() fonksiyonu ile fluid typography uyguladım.

 ## 4. Responsive Stratejiler

 Performansı artırmak ve mobil cihazların gereksiz masaüstü kodlarını yüklemesini engellemek için kodlarımı Mobile-First felsefesiyle, en küçük ekrandan başlayarak yazdım. Görsellerin ekran daraldığında orantısız şekilde basıklaşmasını veya uzamasını engellemek için object-fit: cover yöntemini kullandım.