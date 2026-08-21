import { About } from "@/components/About";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Catalog } from "@/components/Catalog";
import { Confidentiality } from "@/components/Confidentiality";
import { Contact } from "@/components/Contact";
import { CookieConsentProvider } from "@/components/CookieConsent";
import { CustomSections } from "@/components/CustomSections";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Manufacturing } from "@/components/Manufacturing";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { getSiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://equipcontract.com/#organization",
        name: "Equip Contract",
        url: "https://equipcontract.com",
        logo: "https://equipcontract.com/assets/logo-equip-contract-transparent.png",
        email: "info@equipcontract.com",
        telephone: "+34932224808",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrer Anoia, 3, Nave 5",
          addressLocality: "Santa Perpètua de Mogoda",
          addressRegion: "Barcelona",
          postalCode: "08130",
          addressCountry: "ES",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://equipcontract.com/#localbusiness",
        name: "Equip Contract",
        image: "https://equipcontract.com/assets/logo-equip-contract-transparent.png",
        url: "https://equipcontract.com",
        telephone: "+34932224808",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrer Anoia, 3, Nave 5",
          addressLocality: "Santa Perpètua de Mogoda",
          addressRegion: "Barcelona",
          postalCode: "08130",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Service",
        "@id": "https://equipcontract.com/#service",
        name: "Fabricación contract OEM y white-label",
        provider: { "@id": "https://equipcontract.com/#organization" },
        areaServed: "Europe",
        serviceType: "Contract furniture manufacturing",
        description: content.es.hero.subtitle,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          businessFunction: "https://schema.org/Manufacture",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://equipcontract.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Equip Contract vende directamente a hoteles o restaurantes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Equip Contract fabrica para distribuidores, estudios, empresas contract y marcas que trabajan con clientes horeca.",
            },
          },
          {
            "@type": "Question",
            name: "¿Trabaja bajo acuerdos de confidencialidad?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Muchos proyectos permanecen confidenciales por acuerdos NDA y por el modelo de producción white-label.",
            },
          },
          {
            "@type": "Question",
            name: "¿Dónde fabrica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La fabricación y coordinación se realiza desde Barcelona, en Santa Perpètua de Mogoda.",
            },
          },
        ],
      },
    ],
  };

  return (
    <LanguageProvider initialContent={content}>
      <CookieConsentProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AnalyticsTracker />
        <Header />
        <main id="contenido">
          <Hero />
          <About />
          <Trust />
          <Manufacturing />
          <Process />
          <Services />
          <Projects />
          <Confidentiality />
          <CustomSections />
          <Catalog />
          <Contact />
        </main>
        <Footer />
      </CookieConsentProvider>
    </LanguageProvider>
  );
}
