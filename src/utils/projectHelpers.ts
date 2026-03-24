import type {
    Project,
    Category,
    SortField,
    SortOrder
} from "../types/project";

/**
 * Projeleri metin aramasına göre filtreler.
 * PDF Sayfa 22: Başlık , açıklama ve teknoloji listesinde arama yapar.
 */
export function filterBySearch(
    projects: Project[],
    query: string
): Project[] {
    if (!query.trim()) return projects;

    const lower = query.toLowerCase();
    return projects.filter(p =>
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.tech.some(t => t.toLowerCase().includes(lower))
    );
}

/**
 * Projeleri kategorisine göre filtreler.
 */
export function filterByCategory(
    projects: Project[],
    category: Category
): Project[] {
    if (category === "all") return projects;
    return projects.filter(p => p.category === category);
}

/**
 * Projeleri belirli bir alana ve yöne göre sıralar.
 * PDF Sayfa 22: localeCompare (tr) kullanımı önemlidir.
 */
export function sortProjects(
    projects: Project[],
    field: SortField,
    order: SortOrder
): Project[] {
    const sorted = [...projects].sort((a, b) => {
        if (field === "year") {
            return a.year - b.year;
        }
        // Türkçe karakter desteği için localeCompare kullanımı
        return a.title.localeCompare(b.title, "tr");
    });

    return order === "desc" ? sorted.reverse() : sorted;
}

/**
 * Tüm filtreleme ve sıralama işlemlerini sırasıyla uygular.
 * Bu fonksiyon ana state yönetiminde kullanılacaktır.
 */
export function applyFilters(
    projects: Project[],
    search: string,
    category: Category,
    sortField: SortField,
    sortOrder: SortOrder
): Project[] {
    let result = filterBySearch(projects, search);
    result = filterByCategory(result, category);
    result = sortProjects(result, sortField, sortOrder);
    return result;
}
