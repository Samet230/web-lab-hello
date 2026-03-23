import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';
import { useState } from 'react';

function App() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [currentPath, setCurrentPath] = useState<'home' | 'uikit'>('home');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 5000);
    };

    if (currentPath === 'uikit') {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen">
                <button
                    onClick={() => setCurrentPath('home')}
                    className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-6 py-2 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold"
                >
                    Ana Sayfaya Dön
                </button>
                <UIKit />
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 flex flex-col">
            {/* Erişilebilirlik: Ana içeriğe atla */}
            <a href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-3 z-50 rounded-b-lg shadow-lg font-medium">
                Ana içeriğe atla
            </a>

            {/* Uygulama-5: Dark Mode Toggle */}
            <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="fixed top-4 right-4 z-50 p-2.5 rounded-full shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 hover:scale-110 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="Tema değiştir"
            >
                <span className="dark:hidden text-xl">🌙</span>
                <span className="hidden dark:inline text-xl">☀️</span>
            </button>

            {/* Uygulama-10: Header ve Navigasyon */}
            <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
                        Samet Şahin
                    </h1>
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap gap-2">
                            <li>
                                <a href="#hakkimda" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium">
                                    Hakkımda
                                </a>
                            </li>
                            <li>
                                <a href="#projeler" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium">
                                    Projeler
                                </a>
                            </li>
                            <li>
                                <a href="#iletisim" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all font-medium">
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main-content" className="flex-grow">
                {/* Hakkımda Bölümü */}
                <section id="hakkimda" className="py-20 px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
                        <figure className="shrink-0 relative">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur opacity-25"></div>
                            <img
                                src="/profil.jpg"
                                alt="Samet Şahin vesikalık fotoğrafı"
                                className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                            />
                        </figure>
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Hakkımda
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
                                Temiz kod ve erişilebilirlik prensiplerini her projeme yansıtıyorum.
                            </p>
                            <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <span className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-sky-200 dark:border-sky-800">React</span>
                                <span className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-sky-200 dark:border-sky-800">TypeScript</span>
                                <span className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-sky-200 dark:border-sky-800">Tailwind</span>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projelerim Bölümü */}
                <section id="projeler" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            Projelerim
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card
                                variant="elevated"
                                title="E-Ticaret Sitesi"
                                image="/proje1.jpg"
                                imageAlt="E-Ticaret anasayfa görünümü"
                                footer={<Button size="sm" variant="ghost">Detayları Gör</Button>}
                            >
                                React ve Node.js ile tam kapsamlı uygulama.
                            </Card>

                            <Card
                                variant="elevated"
                                title="Blog Uygulaması"
                                image="/proje2.jpg"
                                imageAlt="Blog anasayfa görünümü"
                                footer={<Button size="sm" variant="ghost">Detayları Gör</Button>}
                            >
                                Next.js ve Tailwind ile dinamik içerik yönetimi.
                            </Card>

                            <Card
                                variant="elevated"
                                title="Hava Durumu"
                                image="/proje3.jpg"
                                imageAlt="Hava durumu görünümü"
                                footer={<Button size="sm" variant="ghost">Detayları Gör</Button>}
                            >
                                JavaScript ve API entegrasyonu ile canlı veriler.
                            </Card>
                        </div>
                    </div>
                </section>

                {/* İletişim Formu */}
                <section id="iletisim" className="py-20 px-6">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            İletişim
                        </h2>

                        {isFormSubmitted && (
                            <div className="mb-8">
                                <Alert variant="success" title="Başarılı" dismissible onDismiss={() => setIsFormSubmitted(false)}>
                                    Mesajınız başarıyla gönderildi!
                                </Alert>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" required />
                            <Input id="email" label="E-posta" type="email" placeholder="ahmet@example.com" required />
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Bana bir mesaj bırakın..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 transition-all"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" size="lg" className="w-full shadow-lg shadow-blue-600/20">
                                Gönder
                            </Button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 dark:text-gray-400 font-medium font-serif">
                        &copy; 2025 Samet Şahin. Tüm hakları saklıdır.
                    </p>
                    <div className="mt-6 flex justify-center items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">GitHub</a>
                        <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">LinkedIn</a>
                        <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                        <button
                            onClick={() => setCurrentPath('uikit')}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold hover:text-blue-700 transition-colors"
                        >
                            UI Kit
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
