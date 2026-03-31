import { useState, useEffect, useMemo } from 'react';

// UI Kit Sayfası
import UIKit from './pages/UIKit';

// --- Lab 6 BILESENLER ---
// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// Sections
import Hero from './components/sections/Hero';
import ProjectList from './components/sections/ProjectList';
// Forms
import ContactForm from './components/forms/ContactForm';
import ProjectFilter from './components/forms/ProjectFilter';

// Lab 5 Tipler ve Servisler
import type { Project, Category, SortField, SortOrder } from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

function App() {
    const [currentPath, setCurrentPath] = useState<'home' | 'uikit'>('home');

    // --- Lab 5 & 6 STATE ---
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
                setError(err instanceof Error ? err.message : "Veri yüklenirken bir hata oluştu");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    // --- TURETILMIS VERI (useMemo) ---
    const filteredProjects = useMemo(() => {
        return applyFilters(projects, search, category, sortField, sortOrder);
    }, [projects, search, category, sortField, sortOrder]);

    // --- ROUTING ---
    if (currentPath === 'uikit') {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen">
                <button
                    onClick={() => setCurrentPath('home')}
                    className="fixed bottom-8 right-8 z-50 bg-sky-600 text-white px-8 py-3 rounded-2xl shadow-2xl hover:bg-sky-700 transition-all transform hover:scale-105 font-bold flex items-center gap-2"
                >
                    <span>🏠</span> Ana Sayfaya Dön
                </button>
                <UIKit />
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 flex flex-col selection:bg-sky-100 dark:selection:bg-sky-900/50">
            {/* Erişilebilirlik */}
            <a href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-sky-600 text-white p-4 z-[100] rounded-br-2xl shadow-2xl font-bold">
                Ana içeriğe atla
            </a>

            {/* Tema Kontrolü */}
            <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="fixed top-20 right-4 z-40 p-3 rounded-full shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-100 hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700 md:top-24"
                aria-label="Tema değiştir"
            >
                <span className="dark:hidden text-2xl">🌙</span>
                <span className="hidden dark:inline text-2xl">☀️</span>
            </button>

            {/* Uygulama-3: Header */}
            <Header />

            <main id="main-content" className="flex-grow">
                {/* Uygulama-4: Hero */}
                <Hero />

                {/* Hakkımda (Not modularized yet as per PDF, but clean) */}
                <section id="hakkimda" className="py-24 px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
                        <div className="shrink-0 relative group">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-600 to-indigo-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src="/profil.jpg"
                                alt="Samet Şahin"
                                className="relative w-56 h-56 rounded-full object-cover shadow-2xl border-8 border-white dark:border-gray-800 transform transition-transform group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Hakkımda</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
                                Merhaba! Ben Samet. Teknolojinin görsel dünyasını seviyorum.
                                React ve TypeScript kullanarak sürdürülebilir, ölçeklenebilir ve en önemlisi
                                kullanıcı odaklı dijital ürünler inşa ediyorum.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {["React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"].map(skill => (
                                    <span key={skill} className="px-5 py-2 rounded-xl text-sm font-bold bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300 border border-sky-100 dark:border-sky-800 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projeler Bölümü */}
                <section id="projeler" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Projelerim</h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                                İşte üzerinde çalıştığım ve geliştirdiğim en yeni dijital projeler.
                            </p>
                        </div>

                        {/* Uygulama-5: ProjectFilter */}
                        <ProjectFilter
                            search={search}
                            onSearchChange={setSearch}
                            category={category}
                            onCategoryChange={setCategory}
                            sortField={sortField}
                            onSortFieldChange={setSortField}
                            sortOrder={sortOrder}
                            onSortOrderChange={setSortOrder}
                            resultCount={filteredProjects.length}
                            totalCount={projects.length}
                        />

                        {/* Uygulama-6: ProjectList */}
                        <ProjectList
                            projects={filteredProjects}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </section>

                {/* İletişim Bölümü */}
                <section id="iletisim" className="py-24 px-6">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">İletişime Geç</h2>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">
                                Bir projeniz mi var? Veya sadece merhaba demek mi istiyorsunuz?
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl shadow-sky-500/5 border border-gray-100 dark:border-gray-800/10">
                            {/* Uygulama-1: ContactForm */}
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>

            {/* Uygulama-7 Ek: Footer */}
            <Footer onUIKitClick={() => setCurrentPath('uikit')} />
        </div>
    );
}

export default App;
