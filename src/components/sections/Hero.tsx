import Button from "../ui/Button";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900 px-4">
            <div className="text-center max-w-2xl">
                <p className="text-sky-600 dark:text-sky-400 font-semibold mb-3 tracking-wide uppercase text-sm">
                    Merhaba, ben
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                    Samet Şahin
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    Frontend Developer | React & TypeScript tutkunu.
                    Modern, hızlı ve erişilebilir web deneyimleri tasarlıyorum.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <a href="#projeler">
                        <Button size="lg" className="px-8 shadow-xl shadow-sky-600/20">
                            Projelerimi Gör
                        </Button>
                    </a>
                    <a href="#iletisim">
                        <Button variant="ghost" size="lg" className="px-8">
                            İletişime Geç
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
