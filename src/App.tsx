import './App.css';

function App() {
    return (
        <div>
            <a href="#main-content" className="skip-link">
                Ana içeriğe atla
            </a>

            <header>
                <h1 className="site-title">Samet Şahin - Portfolyo</h1>
                <nav aria-label="Ana navigasyon">
                    <ul>
                        <li><a href="#hakkimda">Hakkımda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">İletişim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <section id="hakkimda">
                    <h2>Hakkımda</h2>
                    <div className="about-content">
                        <figure>
                            <img
                                src="/profil.jpg"
                                alt="Samet Şahin'in vesikalık fotoğrafı"
                            />
                            <figcaption>Samet Şahin - Yazılım Mühendisi Adayı</figcaption>
                        </figure>
                        <div className="bio">
                            <p><strong>Ad Soyad:</strong> Samet Şahin</p>
                            <p><strong>Öğrenci No:</strong> 230541096</p>
                            <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
                            <p>Merhaba! Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlamayı hedefliyorum.</p>

                            <h3>Kullandığım Teknolojiler</h3>
                            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Vite</li>
                                <li>HTML5 & CSS3</li>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>
                    <div className="project-grid">
                        <article className="project-card">
                            <img src="/proje1.jpg" alt="E-Ticaret sitesi anasayfa ekran görüntüsü" />
                            <h3>E-Ticaret Sitesi</h3>
                            <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
                            <ul className="skill-tags" role="list">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </article>

                        <article className="project-card">
                            <img src="/proje2.jpg" alt="Blog uygulaması yazı listesi görünümü" />
                            <h3>Blog Uygulaması</h3>
                            <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
                            <ul className="skill-tags" role="list">
                                <li>TypeScript</li>
                                <li>Next.js</li>
                            </ul>
                        </article>

                        <article className="project-card">
                            <img src="/proje3.jpg" alt="Hava durumu uygulaması arayüzü" />
                            <h3>Hava Durumu</h3>
                            <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
                            <ul className="skill-tags" role="list">
                                <li>JavaScript</li>
                                <li>API</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section id="iletisim">
                    <h2>İletişim</h2>
                    <form action="#" method="POST" noValidate>
                        <fieldset>
                            <legend>İletişim Formu</legend>

                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad: </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    minLength={2}
                                    aria-describedby="name-error"
                                />
                                <small id="name-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta: </label>
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
                                <label htmlFor="subject">Konu: </label>
                                <select id="subject" name="subject" required aria-describedby="subject-error">
                                    <option value="">-- Seçiniz --</option>
                                    <option value="is">İş Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Öneri</option>
                                </select>
                                <small id="subject-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajınız: </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    minLength={10}
                                    aria-describedby="message-error"
                                >
                                </textarea>
                                <small id="message-error" className="error-msg" role="alert"></small>
                            </div>

                            <button type="submit">Gönder</button>
                        </fieldset>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Samet Şahin. Tüm hakları saklıdır.</p>
                <ul className="social-links">
                    <li><a href="https://github.com/Samet230" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
