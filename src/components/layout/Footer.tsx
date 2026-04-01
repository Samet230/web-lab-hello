
interface FooterProps {
    onUIKitClick: () => void;
}

export default function Footer({ onUIKitClick }: FooterProps) {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                    Samet Şahin
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">
                    &copy; {new Date().getFullYear()} Tüm hakları saklıdır. Modern web teknolojileriyle sevgiyle geliştirildi. 💻
                </p>

                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <a href="#" className="group flex items-center gap-2 text-gray-500 hover:text-sky-600 transition-colors font-semibold">
                        <span className="text-lg">🐙</span> GitHub
                    </a>
                    <a href="#" className="group flex items-center gap-2 text-gray-500 hover:text-sky-600 transition-colors font-semibold">
                        <span className="text-lg">💼</span> LinkedIn
                    </a>
                    <button
                        onClick={onUIKitClick}
                        className="text-sky-600 dark:text-sky-400 hover:underline font-bold transition-all px-4 py-1 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20"
                    >
                        🎨 UI Kit'i İncele
                    </button>
                </div>
            </div>
        </footer>
    );
}
