"use client";

import Script from "next/script";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MotionDiv } from "./Motion";

type ConsentCategory = "necessary" | "analytics" | "marketing" | "functional";
type OptionalConsentCategory = Exclude<ConsentCategory, "necessary">;

type ConsentState = Record<ConsentCategory, boolean>;

type StoredConsent = {
  version: number;
  updatedAt: string;
  categories: ConsentState;
};

const consentVersion = 1;
const storageKey = "equipcontract_cookie_consent";
const cookieName = "equipcontract_cookie_consent";
const optionalCategories: OptionalConsentCategory[] = ["analytics", "functional", "marketing"];
const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

const categoryCopy: Record<ConsentCategory, { title: string; text: string }> = {
  necessary: {
    title: "Necesarias",
    text: "Seguridad, idioma, sesión y preferencias básicas. Siempre activas.",
  },
  analytics: {
    title: "Analíticas",
    text: "Medición de visitas, secciones vistas, descargas y rendimiento. Desactivadas por defecto.",
  },
  functional: {
    title: "Funcionales",
    text: "Servicios externos como Google Maps o futuros vídeos/calendarios. Solo se cargan si lo aceptas.",
  },
  marketing: {
    title: "Marketing",
    text: "Píxeles publicitarios o remarketing. No se cargan sin consentimiento explícito.",
  },
};

const ConsentContext = createContext<{
  consent: ConsentState;
  hasChoice: boolean;
  openPreferences: () => void;
} | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [hasChoice, setHasChoice] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = readStoredConsent();

      if (stored?.version === consentVersion) {
        setConsent(stored.categories);
        setDraft(stored.categories);
        setHasChoice(true);
        return;
      }

      setIsBannerVisible(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setDraft(consent);
      setIsBannerVisible(false);
      setIsPreferencesOpen(true);
    };

    window.addEventListener("equipcontract:open-cookie-settings", handleOpenPreferences);
    return () => window.removeEventListener("equipcontract:open-cookie-settings", handleOpenPreferences);
  }, [consent]);

  const saveConsent = useCallback((nextConsent: ConsentState) => {
    const normalizedConsent = { ...nextConsent, necessary: true };
    const stored: StoredConsent = {
      version: consentVersion,
      updatedAt: new Date().toISOString(),
      categories: normalizedConsent,
    };

    const secureCookie = window.location.protocol === "https:" ? "; Secure" : "";

    window.localStorage.setItem(storageKey, JSON.stringify(stored));
    document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(stored))}; Max-Age=15552000; Path=/; SameSite=Lax${secureCookie}`;
    setConsent(normalizedConsent);
    setDraft(normalizedConsent);
    setHasChoice(true);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, functional: true, marketing: true });
  const rejectAll = () => saveConsent(defaultConsent);
  const openPreferences = useCallback(() => {
    setDraft(consent);
    setIsBannerVisible(false);
    setIsPreferencesOpen(true);
  }, [consent]);

  const value = useMemo(() => ({ consent, hasChoice, openPreferences }), [consent, hasChoice, openPreferences]);

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentScripts consent={consent} hasChoice={hasChoice} />
      {isBannerVisible && (
        <MotionDiv
          role="region"
          aria-label="Aviso de cookies"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-3 bottom-3 z-[120] rounded-md border border-fern/25 bg-[#0b0e0c]/96 p-4 text-stone shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl md:left-auto md:right-6 md:w-[min(440px,calc(100vw-48px))] md:p-5"
        >
          <p className="eyebrow">Privacidad</p>
          <h2 className="mt-2 text-lg font-semibold text-[#f8f8f4]">Cookies bajo control</h2>
          <p className="mt-3 text-sm leading-6 text-stone/68">
            Usamos cookies necesarias para que la web funcione. Analítica, marketing y servicios como mapas solo se activan si lo permites.
          </p>
          <div className="mt-5 grid gap-2 min-[390px]:grid-cols-3">
            <button type="button" onClick={acceptAll} className="premium-button rounded-md bg-fern px-4 py-3 text-sm font-bold text-graphite">
              Aceptar todo
            </button>
            <button type="button" onClick={rejectAll} className="rounded-md border border-stone/18 px-4 py-3 text-sm font-bold text-stone/80 transition hover:border-fern hover:text-fern">
              Rechazar
            </button>
            <button type="button" onClick={openPreferences} className="rounded-md border border-stone/18 px-4 py-3 text-sm font-bold text-stone/80 transition hover:border-fern hover:text-fern">
              Configurar
            </button>
          </div>
        </MotionDiv>
      )}
      {isPreferencesOpen && (
        <div className="fixed inset-0 z-[130] grid place-items-end bg-black/55 p-3 backdrop-blur-sm md:place-items-center md:p-6" role="presentation">
          <MotionDiv
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-2xl rounded-md border border-stone/12 bg-[#0b0e0c] p-4 text-stone shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:p-6"
          >
            <div className="flex items-start justify-between gap-5 border-b border-stone/10 pb-5">
              <div>
                <p className="eyebrow">RGPD</p>
                <h2 id="cookie-preferences-title" className="mt-2 text-2xl font-semibold text-[#f8f8f4]">
                  Configuración de cookies
                </h2>
              </div>
              <button type="button" onClick={() => setIsPreferencesOpen(false)} className="rounded-md border border-stone/14 px-3 py-2 text-sm font-bold text-stone/70 transition hover:border-fern hover:text-fern">
                Cerrar
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              {(Object.keys(categoryCopy) as ConsentCategory[]).map((category) => (
                <label key={category} className="grid gap-3 rounded-md border border-stone/10 bg-white/[0.025] p-4 md:grid-cols-[1fr_auto] md:items-center">
                  <span>
                    <span className="block text-base font-semibold text-[#f8f8f4]">{categoryCopy[category].title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone/62">{categoryCopy[category].text}</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={draft[category]}
                    disabled={category === "necessary"}
                    onChange={(event) => setDraft((current) => ({ ...current, [category]: event.target.checked }))}
                    className="h-6 w-6 accent-fern disabled:opacity-60"
                  />
                </label>
              ))}
            </div>
            <div className="mt-6 grid gap-2 min-[390px]:grid-cols-3">
              <button type="button" onClick={() => saveConsent(draft)} className="premium-button rounded-md bg-fern px-4 py-3 text-sm font-bold text-graphite">
                Guardar
              </button>
              <button type="button" onClick={acceptAll} className="rounded-md border border-stone/18 px-4 py-3 text-sm font-bold text-stone/80 transition hover:border-fern hover:text-fern">
                Aceptar todo
              </button>
              <button type="button" onClick={rejectAll} className="rounded-md border border-stone/18 px-4 py-3 text-sm font-bold text-stone/80 transition hover:border-fern hover:text-fern">
                Rechazar todo
              </button>
            </div>
          </MotionDiv>
        </div>
      )}
    </ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  }

  return context;
}

function ConsentScripts({ consent, hasChoice }: { consent: ConsentState; hasChoice: boolean }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  useEffect(() => {
    if (!hasChoice || !consent.analytics || !gaId) return;

    const sendEngagement = window.setTimeout(() => {
      window.gtag?.("event", "engagement_30s", { event_category: "engagement" });
    }, 30_000);

    const sentScrollDepths = new Set<number>();
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;

      const depth = Math.round((window.scrollY / height) * 100);
      [50, 90].forEach((target) => {
        if (depth >= target && !sentScrollDepths.has(target)) {
          sentScrollDepths.add(target);
          window.gtag?.("event", "scroll_depth", { event_category: "engagement", value: target });
        }
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a,button") : null;
      if (!target) return;

      window.gtag?.("event", "ui_click", {
        event_category: "interaction",
        event_label: target.textContent?.trim().slice(0, 80) || target.getAttribute("aria-label") || "unknown",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    return () => {
      window.clearTimeout(sendEngagement);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [consent.analytics, gaId, hasChoice]);

  if (!hasChoice || !consent.analytics) return null;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
          <Script id="ga4-consent-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: true });
            `}
          </Script>
        </>
      )}
      {clarityId && (
        <Script id="microsoft-clarity-consent-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}

function readStoredConsent() {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredConsent;
    return isValidStoredConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function isValidStoredConsent(value: StoredConsent) {
  return (
    Boolean(value) &&
    typeof value.version === "number" &&
    Boolean(value.categories) &&
    optionalCategories.every((category) => typeof value.categories[category] === "boolean")
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}
