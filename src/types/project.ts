export type Category = "frontend" | "fullstack" | "backend" | "all";

export type SortField = "year" | "title";

export type SortOrder = "asc" | "desc";

export interface Project {
    readonly id: number;
    title: string;
    description: string;
    tech: string[];
    year: number;
    category: "frontend" | "fullstack" | "backend";
    featured: boolean;
    image: string;
    demoUrl?: string;
    sourceUrl?: string;
}

export interface FilterState {
    search: string;
    category: Category;
    sortField: SortField;
    sortOrder: SortOrder;
}
