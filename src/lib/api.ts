/**
 * All graded / business logic calls go to the external backend.
 * Do not use Next.js route handlers for these flows unless you intentionally add a BFF.
 */

import { getAccessToken } from "@/lib/auth-session";

export function getApiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");
}

export function apiUrl(path: string): string {
  const base = getApiBaseUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not set. Add it to .env.local (e.g. http://localhost:3001).",
    );
  }
  return `${base}${normalized}`;
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const headers = new Headers(init?.headers);
  if (init?.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return fetch(apiUrl(path), { ...init, headers });
}

/** Use from client components after login when your backend expects Authorization: Bearer … */
export async function apiFetchAuthed(path: string, init?: RequestInit): Promise<Response> {
  const headers = new Headers(init?.headers);
  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return apiFetch(path, { ...init, headers });
}
