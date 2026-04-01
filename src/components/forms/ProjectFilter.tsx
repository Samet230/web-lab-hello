import type { Category, SortField, SortOrder } from "../../types/project";
import Button from "../ui/Button";

interface ProjectFilterProps {
    search: string;
    onSearchChange: (value: string) => void;
    category: Category;
    onCategoryChange: (value: Category) => void;
    sortField: SortField;
    onSortFieldChange: (value: SortField) => void;
    sortOrder: SortOrder;
    onSortOrderChange: (value: SortOrder) => void;
    resultCount: number;
    totalCount: number;
}

const categories: { value: Category; label: string }[] = [
    { value: "all", label: "Tümü" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
    search,
    onSearchChange,
    category,
    onCategoryChange,
    sortField,
    onSortFieldChange,
    sortOrder,
    onSortOrderChange,
    resultCount,
    totalCount,
}: ProjectFilterProps) {
    return (
        <div className="space-y-6 mb-12 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-end">
                {/* Arama Kutusu */}
                <div className="flex-1 w-full relative">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 ml-1">
                        Proje veya Teknoloji Ara
                    </label>
                    <div className="relative">
                        <input
                            id="search"
                            type="text"
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Örn: React, Node.js, Dashboard..."
                            className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all dark:text-white"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
                    </div>
                </div>

                {/* Kategori Filtresi */}
                <div className="w-full lg:w-auto">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 ml-1">Kategori</p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat.value}
                                variant={category === cat.value ? "primary" : "ghost"}
                                size="sm"
                                onClick={() => onCategoryChange(cat.value)}
                                className={`min-w-[80px] ${category !== cat.value ? 'bg-white dark:bg-gray-800' : ''}`}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Sıralama */}
                <div className="flex gap-2 w-full lg:w-auto">
                    <div className="flex-1 lg:w-32">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 ml-1">Sırala</p>
                        <select
                            value={sortField}
                            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
                            className="w-full h-[42px] px-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all dark:text-white"
                        >
                            <option value="year">Yıla Göre</option>
                            <option value="title">Başlığa Göre</option>
                        </select>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-transparent mb-2">.</p>
                        <Button
                            variant="ghost"
                            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
                            className="h-[42px] min-w-[100px] border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        >
                            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Sonuç Sayısı */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>{resultCount}</strong> / {totalCount} proje listeleniyor
                </p>
                {search && (
                    <button
                        onClick={() => { onSearchChange(""); onCategoryChange("all"); }}
                        className="text-xs text-sky-600 dark:text-sky-400 hover:underline font-medium"
                    >
                        Filtreleri Temizle
                    </button>
                )}
            </div>
        </div>
    );
}
