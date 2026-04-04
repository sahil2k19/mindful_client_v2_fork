import { MetadataRoute } from 'next';
import axios from 'axios';

const BASE_URL = 'https://mindfultms.in';

/** Do not pre-render sitemap at build time (Docker/CI often cannot reach the API in time). */
export const dynamic = 'force-dynamic';

const DOCTOR_FETCH_TIMEOUT_MS = 10_000;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ─── Dynamic: doctor profile pages ──────────────────────────────────────
  let doctorRoutes: MetadataRoute.Sitemap = [];
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  try {
    if (!apiBase) {
      throw new Error('NEXT_PUBLIC_API_URL is not set');
    }
    const res = await axios.get(`${apiBase}doctors/search/doctors`, {
      timeout: DOCTOR_FETCH_TIMEOUT_MS,
    });
    const doctors = Array.isArray(res.data) ? res.data : [];
    doctorRoutes = doctors.map((doc: { _id: string; slug?: string; updatedAt?: string }) => ({
      url: `${BASE_URL}/doctor/${doc._id}${doc.slug ? `/${doc.slug}` : ''}`,
      lastModified: doc.updatedAt ? new Date(doc.updatedAt) : new Date('2026-01-01'),
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    }));
  } catch {
    // silently skip if API unavailable at build time
  }

  // ─── Static pages with honest last-modified dates ────────────────────────
  return [
    // Homepage
    { url: `${BASE_URL}`,                                          lastModified: new Date('2026-03-17'), priority: 1.0, changeFrequency: 'weekly' },

    // Core service pages
    { url: `${BASE_URL}/services/rtms`,                            lastModified: new Date('2026-03-17'), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/neurofeedback`,                   lastModified: new Date('2026-03-17'), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/therapy`,                         lastModified: new Date('2026-03-17'), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/psychiatry`,                      lastModified: new Date('2026-03-17'), priority: 0.9, changeFrequency: 'monthly' },

    // Clinic locations
    { url: `${BASE_URL}/clinicLocation/Bengaluru-Whitefield`,      lastModified: new Date('2026-01-01'), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/clinicLocation/Bengaluru-Hebbal`,          lastModified: new Date('2026-01-01'), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/clinicLocation/New-Delhi`,                 lastModified: new Date('2026-01-01'), priority: 0.8, changeFrequency: 'monthly' },

    // Supporting pages
    { url: `${BASE_URL}/assesment`,                                lastModified: new Date('2025-06-01'), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/clinicalAssessment`,                       lastModified: new Date('2025-06-01'), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/pages/ourExpert`,                          lastModified: new Date('2026-01-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/doctor`,                                   lastModified: new Date('2026-01-01'), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contactUs`,                                lastModified: new Date('2025-01-01'), priority: 0.5, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/careers`,                                  lastModified: new Date('2025-01-01'), priority: 0.5, changeFrequency: 'monthly' },

    // Dynamic doctor pages
    ...doctorRoutes,
  ];
}
