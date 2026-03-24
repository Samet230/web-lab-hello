import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

/**
 * Proje verilerini asenkron olarak çeker.
 * PDF Sayfa 21'deki yapıya uygun olarak hata yönetimi içerir.
 */
export async function fetchProjects(): Promise<Project[]> {
    try {
        const response = await fetch(API_URL);

        // PDF Uyarısı: fetch sunucu hatalarında (404, 500) hata fırlatmaz, 
        // manuel kontrol şarttır.
        if (!response.ok) {
            throw new Error(`Projeler yuklenemedi: ${response.status}`);
        }

        const data: Project[] = await response.json();
        return data;

    } catch (error) {
        // Hatayı konsola yazdır ve yukarı ilet
        console.error("Veri cekme hatasi:", error);
        throw error;
    }
}
