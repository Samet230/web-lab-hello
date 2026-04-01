export default function About() {
    return (
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
                </div>
            </div>
        </section>
    );
}
