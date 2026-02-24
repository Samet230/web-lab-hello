import './App.css';

function App() {
    return (
        <div className="portfolio-container">
            <a href="#main-content" className="skip-link">
                Ana icerige atla
            </a>

            <header className="main-header">
                <h1>Samet Şahin - Portfolio</h1>
                <nav aria-label="Ana navigasyon">
                    <ul className="nav-list">
                        <li><a href="#hakkimda">Hakkimda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">Iletisim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <section id="hakkimda">
                    <h2>Hakkimda</h2>
                    <figure>
                        <img
                            src="/profil.jpg"
                            alt="Samet Şahin'in vesikalık fotoğrafı"
                            className="profile-img"
                        />
                        <figcaption>Samet Şahin - Yazılım Mühendisi Adayı</figcaption>
                    </figure>
                    <div className="intro-content">
                        <p><strong>Ad Soyad:</strong> Samet Şahin</p>
                        <p><strong>Öğrenci No:</strong> 230541096</p>
                        <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
                        <p>Merhaba! Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlamayı hedefliyorum.</p>

                        <h3>Kullandığım Teknolojiler</h3>
                        <ul className="tech-list">
                            <li className="tech-item">React</li>
                            <li className="tech-item">TypeScript</li>
                            <li className="tech-item">Vite</li>
                            <li className="tech-item">HTML5 & CSS3</li>
                            <li className="tech-item">Git & GitHub</li>
                        </ul>
                    </div>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>

                    <article>
                        <h3>Web Lab - 1</h3>
                        <p>Bu portfolyo sitesinin ilk sürümü. React ve Vite kullanılarak, erişilebilirlik (ARIA) ve SEO kurallarına uygun olarak geliştirildi.</p>
                        <p><strong>Teknolojiler:</strong> React, TypeScript, Semantic HTML</p>

                    </article>

                    <article>
                        <h3>Hava Durumu Uygulaması</h3>
                        <p>OpenWeather API kullanarak anlık hava durumu verilerini çeken ve kullanıcıya dinamik bir arayüz sunan uygulama çalışması.</p>
                        <p><strong>Teknolojiler:</strong> JavaScript, API Integration, CSS Animations</p>
                    </article>
                </section>

                <section id="iletisim">
                    <h2>Iletisim</h2>
                    <form action="#" method="POST" noValidate>
                        <fieldset>
                            <legend>Iletisim Formu</legend>

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
                                    <option value="">-- Seciniz --</option>
                                    <option value="is">Is Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Oneri</option>
                                </select>
                                <small id="subject-error" className="error-msg" role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajiniz: </label>
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

                            <button type="submit">Gonder</button>
                        </fieldset>
                    </form>
                </section>
            </main>

            <footer className="main-footer">
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
