const ACCESS_TOKEN_KEY = "app_access_token";

function storage(): Storage | null {
  if (typeof window === "undefined") return null;
  return window.sessionStorage;
}

/** Persist JWT/access token returned by your backend after login (not Supabase service role). */
export function getAccessToken(): string | null {
  return storage()?.getItem(ACCESS_TOKEN_KEY) ?? null;
}

export function setAccessToken(token: string): void {
  storage()?.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearSession(): void {
  storage()?.removeItem(ACCESS_TOKEN_KEY);
}

/** Best-effort parse of common backend JSON shapes: { access_token }, { token }, { data: { access_token } } */
export function extractAccessTokenFromJson(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  const direct =
    (typeof o.access_token === "string" && o.access_token) ||
    (typeof o.token === "string" && o.token) ||
    null;
  if (direct) return direct;
  const inner = o.data;
  if (inner && typeof inner === "object") {
    const d = inner as Record<string, unknown>;
    if (typeof d.access_token === "string") return d.access_token;
    if (typeof d.token === "string") return d.token;
  }
  return null;
}
