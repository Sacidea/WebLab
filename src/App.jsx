import './App.css';

import profilGorseli from'./assets/profil.png'
import proje1Gorseli from'./assets/proje1.jpg'
import proje2Gorseli from'./assets/proje2.jpg'

function App() {
  return (

    <>
   { /* 1. Ana içeriğe atla bağlantısı (Skip Link) */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>
      <header>
         {/* 2. ARIA etiketi eklendi */}
        <nav aria-label="Ana navigasyon"></nav>
        {/* Sayfada yalnızca bir tane h1 olmalı kuralı */}
        <h1 className="site-title">Sacide Direk - Kişisel Portföy</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Ana içerik main içinde, sayfada sadece 1 tane olabilir */}
      <main>
          
        <section id="hakkimda">
            <div className="about-content">
          <h2>Hakkımda</h2>
          
          <figure>
            <img src={profilGorseli} alt="Sacide Direk profil fotoğrafı"/>
            <figcaption>Sacide Direk</figcaption>
          </figure>
          <p>Merhaba, ben Sacide Direk. Web geliştirme alanında çalışmalar yapıyorum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, corporis doloremque<br></br>
             quod omnis distinctio, quaerat iusto dolorum libero temporibus, veniam hic ex nisi natus <br></br>
             ipsa ab impedit obcaecati aut non?</p>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
       <li>HTML5</li>
       <li>CSS3</li>
       <li>JavaScript</li>
       <li>React</li>
       <li>TypeScript</li>
       <li>Git</li>
       </ul>
       </div>
        </section>
        
        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Kartlari sarmalayan Grid kapsayicisi */}
          <div className="project-grid">
          
          {/* 1. Proje Kartı */}
          <article className="project-card">
            <h3>E-Ticaret Sitesi</h3>
              <img src={proje1Gorseli} alt="E-Ticaret sitesi ana sayfa ekran görüntüsü" />
      <p>React ve Node.js ile gelistirilmis tam kapsamli bir e-ticaret uygulamasi.</p>
      <ul className="skill-tags">
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
          </article>
          

          {/* 2. Proje Kartı */}
          <article className="project-card">
            <h3>Blog Uygulaması</h3>
            <img src={proje2Gorseli} alt="Blog uygulaması makale okuma sayfası ekran görüntüsü" />
            <p>Kişisel yazılarımı paylaştığım blog platformu.</p>
          </article>
          </div>
        </section>
        

        <section id="iletisim">
          <h2>İletişim</h2>
          
  {/* noValidate tarayıcının varsayılan hata balonlarını kapatır, kendi mesajlarımızı kullanmamızı sağlar */}
  <form action="#" method="POST" noValidate>
    <fieldset>
      <legend>İletişim Formu</legend>

      <div className="form-group">
        {/* Her input mutlaka bir label ile htmlFor/id eşleşmesiyle bağlanmalıdır */}
        <label htmlFor="name">Ad Soyad:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          minLength="2" 
          aria-describedby="name-error" 
        />
        {/* Hata mesajı alanı. role="alert" sayesinde hata çıktığında ekran okuyucu anında sesli okur */}
        <small id="name-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-posta:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-describedby="email-error" 
        />
        <small id="email-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Konu:</label>
        <select id="subject" name="subject" required aria-describedby="subject-error">
          <option value="">-- Seçiniz --</option>
          <option value="is">İş Teklifi</option>
          <option value="soru">Soru</option>
          <option value="oneri">Öneri</option>
        </select>
        <small id="subject-error" className="error-msg" role="alert"></small>
      </div>

      <div className="form-group">
        <label htmlFor="message">Mesajınız:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          required 
          minLength="10" 
          aria-describedby="message-error">
        </textarea>
        <small id="message-error" className="error-msg" role="alert"></small>
      </div>

      <button type="submit">Gönder</button>
    </fieldset>
  </form>
  </section>
  </main>



      


      <footer>
        <p>&copy; 2026 Sacide Direk. Tüm hakları saklıdır.</p>
      </footer>
      
      
    </>
  );
}
export default App;