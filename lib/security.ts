import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();
const MAX_RATE_LIMIT_KEYS = 1_000;

export const MAX_ADMIN_BODY_BYTES = 180_000;
export const MAX_ANALYTICS_BODY_BYTES = 8_000;

export function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();

  if (rateLimitStore.size > MAX_RATE_LIMIT_KEYS) {
    rateLimitStore.forEach((entry, entryKey) => {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(entryKey);
      }
    });
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  current.count += 1;

  if (current.count > limit) {
    return {
      allowed: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  return { allowed: true, retryAfter: 0 };
}

export function jsonError(message: string, status: number, retryAfter?: number) {
  const response = NextResponse.json({ error: message }, { status });

  if (retryAfter) {
    response.headers.set("Retry-After", String(retryAfter));
  }

  response.headers.set("Cache-Control", "no-store");
  return response;
}

export function hasAllowedContentLength(request: NextRequest, maxBytes: number) {
  const contentLength = request.headers.get("content-length");

  if (!contentLength) return true;

  const parsed = Number(contentLength);
  return Number.isFinite(parsed) && parsed <= maxBytes;
}

export function sanitizeText(value: unknown, maxLength: number, fallback = "") {
  if (typeof value !== "string") return fallback;

  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function sanitizePath(value: unknown) {
  const path = sanitizeText(value, 180, "/");

  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
    return "/";
  }

  return path;
}

export function sanitizeVisitorId(value: unknown) {
  const visitorId = sanitizeText(value, 80, "unknown");
  return /^[a-zA-Z0-9_-]{1,80}$/.test(visitorId) ? visitorId : "unknown";
}

export function sanitizeScreen(value: unknown) {
  const screen = sanitizeText(value, 24);
  return /^\d{2,5}x\d{2,5}$/.test(screen) ? screen : undefined;
}

export function sanitizeUrl(value: unknown, maxLength = 320) {
  const url = sanitizeText(value, maxLength);

  if (!url) return undefined;

  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.toString().slice(0, maxLength) : undefined;
  } catch {
    return undefined;
  }
}

export function assertValidOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) return true;

  try {
    const parsedOrigin = new URL(origin);
    return parsedOrigin.host === request.nextUrl.host;
  } catch {
    return false;
  }
}

export function verifyAdminRequest(request: NextRequest) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = request.headers.get("x-admin-password") || "";

  if (!configuredPassword || configuredPassword.length < 16 || configuredPassword === "change-this-private-password") {
    return { ok: false, status: 503, message: "Admin access is not configured." };
  }

  const configured = Buffer.from(configuredPassword);
  const provided = Buffer.from(providedPassword);

  if (configured.length !== provided.length || !timingSafeEqual(configured, provided)) {
    return { ok: false, status: 401, message: "Unauthorized." };
  }

  return { ok: true, status: 200, message: "OK." };
}
