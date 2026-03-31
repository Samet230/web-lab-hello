import { useState } from "react";

const navLinks = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#hakkimda", label: "Hakkımda" },
    { href: "#projeler", label: "Projeler" },
    { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    Portfolyo
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-sky-600 transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobil menu butonu */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <span className="text-2xl">✕</span>
                    ) : (
                        <div className="space-y-1.5">
                            <span className="block w-6 h-0.5 bg-current" />
                            <span className="block w-6 h-0.5 bg-current" />
                            <span className="block w-6 h-0.5 bg-current" />
                        </div>
                    )}
                </button>
            </nav>

            {/* Mobil menu */}
            {menuOpen && (
                <ul className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
