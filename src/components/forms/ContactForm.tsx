import { useState, type FormEvent } from "react";
import Button from "../ui/Button";

// --- Form veri modeli ---
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// --- Form hata modeli ---
interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

// --- Baslangic degerleri ---
const initialFormData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    // Form state
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // --- Dogrulama (Validation) ---
    function validate(data: ContactFormData): FormErrors {
        const newErrors: FormErrors = {};

        if (!data.name.trim()) {
            newErrors.name = "Ad soyad zorunludur.";
        } else if (data.name.trim().length < 2) {
            newErrors.name = "Ad soyad en az 2 karakter olmalidir.";
        }

        if (!data.email.trim()) {
            newErrors.email = "E-posta zorunludur.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Gecerli bir e-posta adresi giriniz.";
        }

        if (!data.subject.trim()) {
            newErrors.subject = "Konu zorunludur.";
        }

        if (!data.message.trim()) {
            newErrors.message = "Mesaj zorunludur.";
        } else if (data.message.trim().length < 10) {
            newErrors.message = "Mesaj en az 10 karakter olmalidir.";
        }

        return newErrors;
    }

    // --- Tek alan guncelleme ---
    function handleChange(field: keyof ContactFormData, value: string) {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));

        // Hata mesajini temizle
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined,
            }));
        }
    }

    // --- Form gonderme ---
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        // Dogrula
        const newErrors = validate(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            // Simule edilmis API cagirisi
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Form verisi:", formData);
            setSubmitSuccess(true);
            setFormData(initialFormData);
        } catch (error) {
            alert("Gonderim basarisiz. Tekrar deneyin.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitSuccess) {
        return (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Mesajınız Alındı!</h3>
                <p className="text-emerald-700 dark:text-emerald-300 mb-6">En kısa sürede dönüş sağlayacağım.</p>
                <Button onClick={() => setSubmitSuccess(false)} variant="primary">
                    Yeni Mesaj Gönder
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Ad Soyad */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Ad Soyad
                </label>
                <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={e => handleChange("name", e.target.value)}
                    placeholder="Adınız Soyadınız"
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-4 ${errors.name
                            ? "border-error focus:ring-error/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/20 dark:bg-gray-800 dark:text-white"
                        }`}
                />
                {errors.name && <p className="text-error text-xs mt-1.5 font-medium">{errors.name}</p>}
            </div>

            {/* E-posta */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    E-posta
                </label>
                <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e => handleChange("email", e.target.value)}
                    placeholder="ornek@mail.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-4 ${errors.email
                            ? "border-error focus:ring-error/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/20 dark:bg-gray-800 dark:text-white"
                        }`}
                />
                {errors.email && <p className="text-error text-xs mt-1.5 font-medium">{errors.email}</p>}
            </div>

            {/* Konu */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Konu
                </label>
                <select
                    id="subject"
                    value={formData.subject}
                    onChange={e => handleChange("subject", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-4 ${errors.subject
                            ? "border-error focus:ring-error/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/20 dark:bg-gray-800 dark:text-white"
                        }`}
                >
                    <option value="">Konu seçiniz...</option>
                    <option value="genel">Genel Soru</option>
                    <option value="is">İş Birliği</option>
                    <option value="destek">Teknik Destek</option>
                    <option value="diger">Diğer</option>
                </select>
                {errors.subject && <p className="text-error text-xs mt-1.5 font-medium">{errors.subject}</p>}
            </div>

            {/* Mesaj */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Mesaj
                </label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    placeholder="Mesajınızı buraya yazın..."
                    className={`w-full px-4 py-3 rounded-xl border transition-all resize-none focus:outline-none focus:ring-4 ${errors.message
                            ? "border-error focus:ring-error/20"
                            : "border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/20 dark:bg-gray-800 dark:text-white"
                        }`}
                />
                {errors.message && <p className="text-error text-xs mt-1.5 font-medium">{errors.message}</p>}
            </div>

            {/* Gonder Butonu */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full shadow-lg shadow-primary/20"
                size="lg"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Gönderiliyor...
                    </span>
                ) : (
                    "Mesaj Gönder"
                )}
            </Button>
        </form>
    );
}
