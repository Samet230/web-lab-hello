import type { Project } from "../../types/project";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Alert from "../ui/Alert";

interface ProjectListProps {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

export default function ProjectList({ projects, loading, error }: ProjectListProps) {
    // Hata Durumu
    if (error) {
        return (
            <div className="max-w-4xl mx-auto py-10">
                <Alert variant="error" title="Hata Oluştu" className="shadow-lg">
                    {error}. Lütfen sayfayı yenileyiniz veya daha sonra tekrar deneyiniz.
                </Alert>
            </div>
        );
    }

    // Yükleniyor Durumu
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium animate-pulse">Projeler Getiriliyor...</p>
            </div>
        );
    }

    // Boş Sonuç Durumu
    if (projects.length === 0) {
        return (
            <div className="text-center py-24 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50/30 dark:bg-gray-900/10">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                    Aradığınız kriterlere uygun bir proje eşleşmedi. Lütfen filtreleri değiştirmeyi deneyin.
                </p>
            </div>
        );
    }

    // Liste Görünümü
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
            {projects.map((project) => (
                <Card
                    key={project.id}
                    variant="elevated"
                    title={project.title}
                    image={project.image}
                    imageAlt={project.title}
                    footer={
                        <Button variant="ghost" size="sm" className="w-full font-semibold group-hover:bg-primary group-hover:text-white transition-all">
                            Detayları İncele
                        </Button>
                    }
                >
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-bold uppercase tracking-wider border border-sky-100 dark:border-sky-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center text-xs font-medium text-gray-400 dark:text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="flex items-center gap-1">
                            📁 {project.category}
                        </span>
                        <span className="flex items-center gap-1">
                            📅 {project.year}
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );
}
