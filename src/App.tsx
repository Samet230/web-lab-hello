import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';
import { useState, useEffect, useMemo } from 'react';

// Lab 5 Tipler ve Servisler
import type { Project, Category, SortField, SortOrder } from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

function App() {
    const [currentPath, setCurrentPath] = useState<'home' | 'uikit'>('home');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // --- Lab 5 STATE ---
    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<Category>("all");
    const [sortField, setSortField] = useState<SortField>("year");
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- VERI CEKME (useEffect) ---
    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchProjects();
                setProjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Bilinmeyen bir hata olustu");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    // --- TURETILMIS VERI (Derived State) ---
    const filteredProjects = useMemo(() => {
        return applyFilters(projects, search, category, sortField, sortOrder);
    }, [projects, search, category, sortField, sortOrder]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 5000);
    };

    const categories: Category[] = ["all", "frontend", "fullstack", "backend"];

    if (currentPath === 'uikit') {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen">
                <button
                    onClick={() => setCurrentPath('home')}
                    className="fixed bottom-4 right-4 z-50 bg-sky-600 text-white px-6 py-2 rounded-full shadow-2xl hover:bg-sky-700 transition-all transform hover:scale-105 font-semibold"
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
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-sky-600 text-white p-3 z-50 rounded-b-lg shadow-lg font-medium">
                Ana içeriğe atla
            </a>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="fixed top-4 right-4 z-50 p-2.5 rounded-full shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 hover:scale-110 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="Tema değiştir"
            >
                <span className="dark:hidden text-xl">🌙</span>
                <span className="hidden dark:inline text-xl">☀️</span>
            </button>

            <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
                        Samet Şahin
                    </h1>
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap gap-2">
                            <li><a href="#hakkimda" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 transition-all font-medium">Hakkımda</a></li>
                            <li><a href="#projeler" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 transition-all font-medium">Projeler</a></li>
                            <li><a href="#iletisim" className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-800 transition-all font-medium">İletişim</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main-content" className="flex-grow">
                {/* Hakkımda Bölümü */}
                <section id="hakkimda" className="py-20 px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
                        <figure className="shrink-0 relative">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-600 to-purple-600 rounded-full blur opacity-25"></div>
                            <img
                                src="/profil.jpg"
                                alt="Samet Şahin"
                                className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                            />
                        </figure>
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Hakkımda</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
                                TypeScript ve React ile tip-güvenli mantıksal mimariler kuruyorum.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {["React", "TypeScript", "Tailwind", "Node.js"].map(skill => (
                                    <span key={skill} className="bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300 px-4 py-1 rounded-full text-sm font-semibold border border-sky-100 dark:border-sky-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projelerim Bölümü (Dinamik) */}
                <section id="projeler" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Projelerim</h2>

                        {/* Filtreleme UI Kit */}
                        <div className="mb-12 space-y-6">
                            <div className="flex flex-col lg:flex-row gap-4 items-end">
                                <div className="flex-1 w-full">
                                    <Input
                                        id="search"
                                        placeholder="Proje veya teknoloji ara..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(cat => (
                                        <Button
                                            key={cat}
                                            variant={category === cat ? "primary" : "ghost"}
                                            size="sm"
                                            onClick={() => setCategory(cat)}
                                            className="capitalize"
                                        >
                                            {cat === "all" ? "Tümü" : cat}
                                        </Button>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <select
                                        value={sortField}
                                        onChange={(e) => setSortField(e.target.value as SortField)}
                                        className="h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                                    >
                                        <option value="year">Yıla Göre</option>
                                        <option value="title">Başlığa Göre</option>
                                    </select>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                                        className="h-10 min-w-20"
                                    >
                                        {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Hata Durumu */}
                        {error && (
                            <Alert variant="error" title="Veri Yüklenemedi" className="mb-8">
                                {error} - Lütfen bağlantınızı kontrol edip sayfayı yenileyin.
                            </Alert>
                        )}

                        {/* Yükleniyor Durumu */}
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                                <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-500 font-medium animate-pulse">Projeler yükleniyor...</p>
                            </div>
                        ) : (
                            <>
                                {filteredProjects.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {filteredProjects.map(project => (
                                            <Card
                                                key={project.id}
                                                variant="elevated"
                                                title={project.title}
                                                image={project.image}
                                                imageAlt={project.title}
                                                footer={<Button size="sm" variant="ghost" className="w-full">Detayları Gör</Button>}
                                            >
                                                <p className="mb-4 text-sm line-clamp-2">{project.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tech.map(t => (
                                                        <span key={t} className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-500 uppercase tracking-wider font-bold">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                                                    <span>{project.category}</span>
                                                    <span>{project.year}</span>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                                        <p className="text-gray-400 text-lg">Aradığınız kriterlere uygun proje bulunamadı. 🔍</p>
                                        <Button variant="ghost" size="sm" className="mt-4" onClick={() => { setSearch(""); setCategory("all"); }}>Filtreleri Temizle</Button>
                                    </div>
                                )}

                                {/* Sonuç Sayısı */}
                                {!error && (
                                    <p className="text-center mt-12 text-sm text-gray-400">
                                        Toplam <strong>{projects.length}</strong> projeden <strong>{filteredProjects.length}</strong> tanesi gösteriliyor.
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* İletişim Formu */}
                <section id="iletisim" className="py-20 px-6">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">İletişim</h2>
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
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                                <textarea
                                    id="message" rows={5} required placeholder="Bana bir mesaj bırakın..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 dark:bg-gray-950 dark:text-gray-100 transition-all"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" size="lg" className="w-full shadow-lg shadow-sky-600/20">Gönder</Button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 dark:text-gray-400 font-medium font-serif">&copy; 2025 Samet Şahin. Tüm hakları saklıdır.</p>
                    <div className="mt-6 flex justify-center items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">GitHub</a>
                        <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                        <a href="#" className="text-gray-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">LinkedIn</a>
                        <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                        <button onClick={() => setCurrentPath('uikit')} className="text-sky-600 dark:text-sky-400 hover:underline font-semibold hover:text-sky-700 transition-colors">UI Kit</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
