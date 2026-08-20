"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AnalyticsEvent } from "@/lib/analytics";
import type { SiteContent } from "@/lib/siteContent.shared";

type EditableValue = string | EditableValue[] | { [key: string]: EditableValue };

const labels: Record<string, string> = {
  about: "Sobre nosotros",
  address: "Dirección",
  areas: "Áreas",
  backTop: "Volver arriba",
  badges: "Etiquetas",
  body: "Textos",
  cardEyebrow: "Etiqueta de tarjeta",
  cardTitle: "Título de tarjeta",
  company: "Empresa",
  confidentiality: "Confidencialidad",
  contact: "Contacto",
  copyright: "Copyright",
  catalog: "Catálogo",
  capabilities: "Capacidades",
  capabilitiesTitle: "Título de capacidades",
  customSections: "Apartados nuevos",
  date: "Fecha prevista",
  email: "Email",
  eyebrow: "Etiqueta superior",
  fields: "Campos del formulario",
  file: "Archivo",
  fileHint: "Ayuda de archivo",
  files: "Archivos",
  footer: "Footer",
  hero: "Hero",
  home: "Inicio",
  imageAlt: "Texto alternativo de imagen",
  image: "Imagen",
  items: "Elementos",
  language: "Idioma",
  location: "Ubicación",
  manufacturing: "Fabricación",
  menu: "Menú",
  message: "Mensaje",
  metrics: "Métricas",
  nav: "Navegación",
  note: "Nota",
  options: "Opciones",
  phone: "Teléfono",
  phoneNumber: "Teléfono",
  pillars: "Pilares",
  primaryCta: "Botón principal",
  process: "Proceso",
  projectType: "Tipo de proyecto",
  projects: "Proyectos",
  quantity: "Cantidad estimada",
  reference: "Referencia",
  secondaryCta: "Botón secundario",
  services: "Servicios",
  stats: "Cifras",
  steps: "Pasos",
  submit: "Botón enviar",
  subtitle: "Subtítulo",
  text: "Texto",
  title: "Título",
  trust: "Confianza",
  unavailable: "Texto si no está disponible",
  benefit: "Beneficio",
};

type AnalyticsPayload = {
  events: AnalyticsEvent[];
  summary: {
    downloads: number;
    paths: Record<string, number>;
    referrers: Record<string, number>;
    sections: Record<string, number>;
    totalEvents: number;
    uniqueVisitors: number;
    visits: number;
  };
};

const sectionOrder = [
  "hero",
  "about",
  "trust",
  "manufacturing",
  "process",
  "services",
  "projects",
  "confidentiality",
  "customSections",
  "catalog",
  "contact",
  "footer",
];

function labelFor(key: string) {
  return labels[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function cloneAndSet(value: EditableValue, path: Array<string | number>, nextValue: string): EditableValue {
  if (path.length === 0) return nextValue;

  const [head, ...rest] = path;

  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? cloneAndSet(item, rest, nextValue) : item));
  }

  const current = value as { [key: string]: EditableValue };

  return {
    ...current,
    [head]: cloneAndSet(current[head as string], rest, nextValue),
  };
}

function emptyFrom(value: EditableValue): EditableValue {
  if (typeof value === "string") return "";
  if (Array.isArray(value)) return [];

  return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, emptyFrom(child)]));
}

function templateFor(name: string, path: Array<string | number>): EditableValue {
  if (name === "customSections") {
    return {
      eyebrow: "Nuevo apartado",
      title: "Título del apartado",
      subtitle: "Subtítulo o descripción del apartado.",
      items: [{ title: "Título", text: "Texto del punto." }],
    };
  }

  if (name === "pillars" || name === "items" && path.includes("customSections")) {
    return { title: "Título", text: "Texto descriptivo." };
  }

  if (name === "areas") return ["Nueva área", "Descripción del área."];
  if (name === "body") return "Nuevo párrafo.";
  if (name === "badges") return "Nueva etiqueta";
  if (name === "options") return "Nueva opción";
  if (name === "items") return "Nuevo elemento";

  return "";
}

function cloneAndInsert(value: EditableValue, path: Array<string | number>, template: EditableValue): EditableValue {
  if (path.length === 0 && Array.isArray(value)) {
    return [...value, template];
  }

  const [head, ...rest] = path;

  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? cloneAndInsert(item, rest, template) : item));
  }

  const current = value as { [key: string]: EditableValue };

  return {
    ...current,
    [head]: cloneAndInsert(current[head as string], rest, template),
  };
}

function cloneAndRemove(value: EditableValue, path: Array<string | number>, indexToRemove: number): EditableValue {
  if (path.length === 0 && Array.isArray(value)) {
    return value.filter((_, index) => index !== indexToRemove);
  }

  const [head, ...rest] = path;

  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? cloneAndRemove(item, rest, indexToRemove) : item));
  }

  const current = value as { [key: string]: EditableValue };

  return {
    ...current,
    [head]: cloneAndRemove(current[head as string], rest, indexToRemove),
  };
}

function EditorField({
  name,
  path,
  value,
  onChange,
  onAdd,
  onRemove,
}: {
  name: string;
  path: Array<string | number>;
  value: EditableValue;
  onChange: (path: Array<string | number>, value: string) => void;
  onAdd: (path: Array<string | number>, template: EditableValue) => void;
  onRemove: (path: Array<string | number>, index: number) => void;
}) {
  if (typeof value === "string") {
    const multiline = value.length > 72 || value.includes(".");

    return (
      <label className="grid gap-2 text-sm font-semibold text-stone/78">
        {labelFor(name)}
        {multiline ? (
          <textarea
            value={value}
            rows={4}
            onChange={(event) => onChange(path, event.target.value)}
            className="resize-y rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern"
          />
        ) : (
          <input
            value={value}
            onChange={(event) => onChange(path, event.target.value)}
            className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern"
          />
        )}
      </label>
    );
  }

  if (Array.isArray(value)) {
    const template = value.length > 0 ? emptyFrom(value[value.length - 1]) : templateFor(name, path);

    return (
      <div className="grid gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-fern">{labelFor(name)}</h4>
          <button
            type="button"
            onClick={() => onAdd(path, template)}
            className="rounded-md border border-fern/35 px-3 py-2 text-xs font-bold text-fern transition hover:bg-fern hover:text-graphite"
          >
            Añadir
          </button>
        </div>
        <div className="grid gap-3">
          {value.map((item, index) => (
            <div key={`${name}-${index}`} className="rounded-md border border-stone/10 bg-white/[0.025] p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-stone/42">
                  {labelFor(name)} {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(path, index)}
                  className="rounded-md border border-red-400/25 px-3 py-2 text-xs font-bold text-red-200/75 transition hover:bg-red-400/12 hover:text-red-100"
                >
                  Quitar
                </button>
              </div>
              <EditorField
                name={`${labelFor(name)} ${index + 1}`}
                path={[...path, index]}
                value={item}
                onChange={onChange}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <fieldset className="grid gap-4 rounded-md border border-stone/10 bg-white/[0.025] p-5">
      <legend className="px-2 text-sm font-semibold uppercase tracking-[0.18em] text-fern">{labelFor(name)}</legend>
      {Object.entries(value).map(([key, child]) => (
        <EditorField
          key={key}
          name={key}
          path={[...path, key]}
          value={child}
          onChange={onChange}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </fieldset>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsPayload | null>(null);
  const [language, setLanguage] = useState<keyof SiteContent>("es");
  const [view, setView] = useState<"content" | "activity">("content");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sections = useMemo(() => {
    if (!content) return [];
    return sectionOrder.filter((key) => key in content[language]);
  }, [content, language]);

  async function loadContent() {
    setLoading(true);
    setStatus("");

    const response = await fetch("/api/admin/content", {
      headers: { "x-admin-password": password },
    });

    if (!response.ok) {
      setStatus("Contraseña incorrecta o acceso no autorizado.");
      setLoading(false);
      return;
    }

    setContent((await response.json()) as SiteContent);
    setStatus("Contenido cargado.");
    await loadAnalytics();
    setLoading(false);
  }

  async function loadAnalytics() {
    const response = await fetch("/api/admin/analytics", {
      headers: { "x-admin-password": password },
    });

    if (response.ok) {
      setAnalytics((await response.json()) as AnalyticsPayload);
    }
  }

  async function saveContent() {
    if (!content) return;

    setLoading(true);
    setStatus("");

    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify(content),
    });

    setStatus(response.ok ? "Cambios guardados. Recarga la web pública para verlos." : "No se han podido guardar los cambios.");
    setLoading(false);
  }

  function updateContent(path: Array<string | number>, value: string) {
    if (!content) return;
    setContent(cloneAndSet(content as EditableValue, path, value) as SiteContent);
  }

  function addItem(path: Array<string | number>, template: EditableValue) {
    if (!content) return;
    setContent(cloneAndInsert(content as EditableValue, path, template) as SiteContent);
  }

  function removeItem(path: Array<string | number>, index: number) {
    if (!content) return;
    setContent(cloneAndRemove(content as EditableValue, path, index) as SiteContent);
  }

  return (
    <main className="min-h-screen bg-graphite px-4 py-8 text-stone md:px-8">
      <div className="mx-auto grid w-[min(1180px,100%)] gap-8">
        <header className="flex flex-col gap-5 border-b border-stone/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Acceso privado</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#f8f8f4] md:text-6xl">Editor de la web</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone/62">
              Edita textos, etiquetas, proyectos, servicios, contacto y contenido por idioma sin tocar código.
            </p>
          </div>
          <Link href="/" className="rounded-md border border-stone/20 px-4 py-3 text-sm font-bold transition hover:border-fern hover:text-fern">
            Ver web
          </Link>
        </header>

        {!content ? (
          <section className="glass-line grid max-w-xl gap-5 rounded-md p-6">
            <label className="grid gap-2 text-sm font-semibold text-stone/78">
              Contraseña
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") loadContent();
                }}
                className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern"
              />
            </label>
            <button
              type="button"
              onClick={loadContent}
              disabled={loading || !password}
              className="rounded-md bg-fern px-5 py-3 text-sm font-bold text-graphite transition hover:bg-[#a9dd52] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Entrar
            </button>
            {status && <p className="text-sm text-stone/60">{status}</p>}
          </section>
        ) : (
          <>
            <div className="sticky top-0 z-40 -mx-4 border-y border-stone/10 bg-graphite/92 px-4 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
              <div className="mx-auto flex w-[min(1180px,100%)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setView("content")}
                    className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                      view === "content" ? "bg-fern text-graphite" : "border border-stone/12 text-stone/70 hover:text-fern"
                    }`}
                  >
                    Contenido
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setView("activity");
                      void loadAnalytics();
                    }}
                    className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                      view === "activity" ? "bg-fern text-graphite" : "border border-stone/12 text-stone/70 hover:text-fern"
                    }`}
                  >
                    Actividad
                  </button>
                  {view === "content" && (["es", "en"] as Array<keyof SiteContent>).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLanguage(item)}
                      className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                        language === item ? "bg-fern text-graphite" : "border border-stone/12 text-stone/70 hover:text-fern"
                      }`}
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {status && <span className="text-sm text-stone/58">{status}</span>}
                  {view === "content" ? (
                    <button
                      type="button"
                      onClick={saveContent}
                      disabled={loading}
                      className="rounded-md bg-fern px-5 py-3 text-sm font-bold text-graphite transition hover:bg-[#a9dd52] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Guardar cambios
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={loadAnalytics}
                      className="rounded-md bg-fern px-5 py-3 text-sm font-bold text-graphite transition hover:bg-[#a9dd52]"
                    >
                      Actualizar actividad
                    </button>
                  )}
                </div>
              </div>
            </div>

            {view === "content" ? (
              <section className="grid gap-6">
                {sections.map((section) => (
                  <EditorField
                    key={`${language}-${section}`}
                    name={section}
                    path={[language, section]}
                    value={content[language][section as keyof SiteContent[typeof language]] as EditableValue}
                    onChange={updateContent}
                    onAdd={addItem}
                    onRemove={removeItem}
                  />
                ))}
              </section>
            ) : (
              <ActivityView analytics={analytics} />
            )}
          </>
        )}
      </div>
    </main>
  );
}

function ActivityView({ analytics }: { analytics: AnalyticsPayload | null }) {
  if (!analytics) {
    return <p className="text-sm text-stone/58">Cargando actividad...</p>;
  }

  const cards = [
    ["Visitas", analytics.summary.visits],
    ["Visitantes", analytics.summary.uniqueVisitors],
    ["Descargas catálogo", analytics.summary.downloads],
    ["Eventos", analytics.summary.totalEvents],
  ];

  return (
    <section className="grid gap-6">
      <div className="grid gap-3 md:grid-cols-4">
        {cards.map(([label, value]) => (
          <div key={label} className="rounded-md border border-stone/10 bg-white/[0.035] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-fern">{label}</p>
            <p className="mt-4 text-3xl font-semibold text-[#f8f8f4]">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Ranking title="Entradas" data={analytics.summary.paths} />
        <Ranking title="Secciones vistas" data={analytics.summary.sections} />
        <Ranking title="Origen" data={analytics.summary.referrers} />
      </div>

      <div className="overflow-hidden rounded-md border border-stone/10">
        <div className="border-b border-stone/10 bg-white/[0.035] px-5 py-4">
          <h2 className="text-lg font-semibold text-[#f8f8f4]">Eventos recientes</h2>
          <p className="mt-1 text-sm text-stone/50">
            El visitante es un identificador anónimo. Para saber nombre real, debe dejar sus datos en un formulario.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-stone/10 text-stone/46">
              <tr>
                <th className="px-5 py-3">Fecha</th>
                <th className="px-5 py-3">Tipo</th>
                <th className="px-5 py-3">Dónde</th>
                <th className="px-5 py-3">Visitante</th>
                <th className="px-5 py-3">IP</th>
                <th className="px-5 py-3">Origen</th>
              </tr>
            </thead>
            <tbody>
              {analytics.events.slice(0, 80).map((event) => (
                <tr key={event.id} className="border-b border-stone/10 text-stone/64">
                  <td className="px-5 py-3">{new Date(event.createdAt).toLocaleString("es-ES")}</td>
                  <td className="px-5 py-3">{event.type}</td>
                  <td className="px-5 py-3">{event.section || event.path}</td>
                  <td className="px-5 py-3 font-mono text-xs">{event.visitorId.slice(0, 8)}</td>
                  <td className="px-5 py-3">{event.ip || "-"}</td>
                  <td className="max-w-[260px] truncate px-5 py-3">{event.referrer || "Directo"}</td>
                </tr>
              ))}
              {!analytics.events.length && (
                <tr>
                  <td className="px-5 py-6 text-stone/50" colSpan={6}>
                    Todavía no hay actividad registrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Ranking({ title, data }: { title: string; data: Record<string, number> }) {
  const rows = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 8);

  return (
    <div className="rounded-md border border-stone/10 bg-white/[0.025] p-5">
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-fern">{title}</h3>
      <div className="mt-5 grid gap-3">
        {rows.length ? (
          rows.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 text-sm">
              <span className="truncate text-stone/62">{label}</span>
              <span className="font-bold text-[#f8f8f4]">{value}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-stone/46">Sin datos todavía.</p>
        )}
      </div>
    </div>
  );
}
