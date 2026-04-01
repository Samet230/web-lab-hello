import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
    return (
        <section id="iletisim" className="py-24 px-6">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">İletişime Geç</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Bir projeniz mi var? Veya sadece merhaba demek mi istiyorsunuz?
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl shadow-sky-500/5 border border-gray-100 dark:border-gray-800/10">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
