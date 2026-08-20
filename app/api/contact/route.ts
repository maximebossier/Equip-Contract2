import { NextRequest, NextResponse } from "next/server";
import {
  assertValidOrigin,
  checkRateLimit,
  getClientIp,
  hasAllowedContentLength,
  jsonError,
  sanitizeText,
} from "@/lib/security";

const MAX_CONTACT_BODY_BYTES = 25_000_000;
const MAX_TOTAL_FILE_BYTES = 20_000_000;
const MAX_FILE_BYTES = 8_000_000;
const allowedExtensions = new Set(["pdf", "dwg", "dxf", "step", "stp", "jpg", "jpeg", "png"]);
const allowedMimeTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/octet-stream",
  "model/step",
]);

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

  if (!rate.allowed) {
    return jsonError("Too many requests.", 429, rate.retryAfter);
  }

  if (!assertValidOrigin(request)) {
    return jsonError("Invalid origin.", 403);
  }

  if (!hasAllowedContentLength(request, MAX_CONTACT_BODY_BYTES)) {
    return jsonError("Request body too large.", 413);
  }

  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return jsonError("Invalid form payload.", 400);
  }

  const honeypot = sanitizeText(formData.get("website"), 120);

  if (honeypot) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = sanitizeText(formData.get("name"), 120);
  const company = sanitizeText(formData.get("company"), 140);
  const email = sanitizeText(formData.get("email"), 160).toLowerCase();
  const phone = sanitizeText(formData.get("phone"), 40);
  const country = sanitizeText(formData.get("country"), 80);
  const quantity = sanitizeText(formData.get("quantity"), 40);
  const date = sanitizeText(formData.get("date"), 40);
  const projectType = sanitizeText(formData.get("projectType"), 120);
  const message = sanitizeText(formData.get("message"), 2200);

  if (!name || !company || !isValidEmail(email) || !message) {
    return jsonError("Required fields are invalid.", 400);
  }

  if (phone && !/^[+()\d\s.-]{6,40}$/.test(phone)) {
    return jsonError("Invalid phone number.", 400);
  }

  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return jsonError("Invalid expected date.", 400);
  }

  if (quantity && !/^[\w\s+.,-]{1,40}$/.test(quantity)) {
    return jsonError("Invalid quantity.", 400);
  }

  const files = formData.getAll("files").filter((value): value is File => value instanceof File && value.size > 0);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  if (totalSize > MAX_TOTAL_FILE_BYTES) {
    return jsonError("Attached files are too large.", 413);
  }

  for (const file of files) {
    const extension = file.name.split(".").pop()?.toLowerCase() || "";

    if (
      file.size > MAX_FILE_BYTES ||
      !allowedExtensions.has(extension) ||
      (file.type && !allowedMimeTypes.has(file.type))
    ) {
      return jsonError("Attached file type is not allowed.", 400);
    }
  }

  const validatedSubmission = {
    name,
    company,
    email,
    phone,
    country,
    quantity,
    date,
    projectType,
    message,
  };

  void validatedSubmission;

  return NextResponse.json(
    {
      ok: true,
      received: {
        files: files.length,
      },
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 160;
}
