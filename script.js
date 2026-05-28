const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const languageSelect = document.querySelector("[data-language-select]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageCurrent = document.querySelector("[data-language-current]");
const languageOptions = document.querySelectorAll("[data-language-option]");

const languageNames = {
  es: "Español",
  en: "English",
  ca: "Català",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  pt: "Português",
};

const translations = {
  es: {
    languageLabel: "Seleccionar idioma",
    navCompany: "Empresa",
    navCatalog: "Catálogo",
    navFactory: "Fabricación",
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroEyebrow: "Fabricante de mobiliario contract",
    heroTitle: "Muebles resistentes, claros y bien acabados para hostelería.",
    heroText:
      "Mesas, pies, tableros y soluciones para restaurantes, hoteles, cafeterías y colectividades, fabricadas en Barcelona con servicio flexible y acabados adaptados a cada proyecto.",
    heroCatalog: "Ver catálogo",
    heroCall: "Llamar ahora",
    heroPanelLabel: "Fabricación propia",
    heroPanelTitle: "Mesas, bases y tableros a medida",
    heroPanelText: "Servicio comercial, producción y logística desde Santa Perpètua de Mogoda.",
    aboutLabel: "Quiénes somos",
    aboutTitle: "Producción local para espacios que trabajan cada día.",
    aboutText1:
      "Equip Contract es una empresa fabricante de mobiliario para hostelería y colectividades, especializada en mesas, pies, tableros, estructuras metálicas y soluciones a medida para proyectos contract.",
    aboutText2:
      "Realiza pedidos a medida, especialmente para hoteles, restaurantes y proyectos que necesitan adaptar medidas, acabados, materiales y cantidades a un espacio concreto.",
    aboutText3:
      "“Made in Barcelona” es el sello de una gama de fabricación propia: calidad, diseños prácticos, elasticidad en el servicio y acabados preparados para competir en plazo, resistencia y personalización.",
    metric1Title: "Fabricación propia",
    metric1Text: "Control de materiales, medidas, acabados y reposiciones.",
    metric2Title: "Servicio flexible",
    metric2Text: "Respuesta ágil para proyectos de hostelería, retail y colectividades.",
    metric3Title: "Producto profesional",
    metric3Text: "Soluciones pensadas para uso intensivo, limpieza y larga vida útil.",
    factoryLabel: "Fabricación",
    factoryTitle: "Talleres propios para proyectos a medida.",
    factoryIntro:
      "Este apartado queda preparado para incorporar fotos reales de máquinas, procesos y detalles de producción cuando estén disponibles.",
    factoryWoodTitle: "Carpintería",
    factoryWoodText: "Fabricación y preparación de tableros, cantos, mecanizados y acabados en madera.",
    factoryMetalTitle: "Taller metálico",
    factoryMetalText: "Producción de bases, pies, estructuras y soluciones resistentes para uso intensivo.",
    factoryCustomTitle: "Pedidos a medida",
    factoryCustomText:
      "Soluciones personalizadas para hoteles, restaurantes y colectividades con necesidades específicas.",
    catalogLabel: "Catálogo",
    catalogTitle: "Familias de producto",
    catalogDownload: "Descargar PDF actual",
    product1Label: "Mesas",
    product1Title: "Pies, estructuras y tableros",
    product1Text: "Combinaciones para comedor interior, terraza cubierta y espacios de alto uso.",
    product2Label: "Sillas",
    product2Title: "Asientos para hostelería",
    product2Text: "Opciones resistentes, fáciles de mover y coherentes con cada ambiente.",
    product3Label: "Taburetes",
    product3Title: "Barras, desayunos y zonas altas",
    product3Text: "Piezas pensadas para hoteles, cafeterías y barras de restaurante.",
    product4Label: "Hoteles y restaurantes",
    product4Title: "Soluciones por volumen",
    product4Text: "Producción coordinada para comedores, terrazas, salones y zonas comunes.",
    processLabel: "Cómo trabajamos",
    processTitle: "Del plano a hostelería, con un equipo cerca.",
    processText:
      "El equipo comercial, logístico y de producción acompaña cada pedido para ajustar medidas, materiales, acabados y plazos. La idea es sencilla: buen producto, buen servicio y una respuesta honesta cuando el proyecto aprieta.",
    step1Title: "Definición",
    step1Text: "Revisamos uso, medidas, estilo, cantidades y necesidades técnicas.",
    step2Title: "Fabricación",
    step2Text: "Coordinamos materiales y producción propia con control de acabados.",
    step3Title: "Entrega",
    step3Text: "Preparamos la logística para que el mobiliario llegue listo para instalar.",
    projectsLabel: "Aplicaciones",
    projectsTitle: "Espacios donde encaja",
    project1Title: "Restaurantes",
    project1Text: "Comedores con mesas robustas, ritmos de servicio altos y acabados cálidos.",
    project2Title: "Hoteles",
    project2Text: "Zonas de desayuno, cafeterías, lounges y áreas polivalentes.",
    project3Title: "Colectividades",
    project3Text: "Comedores de empresa, centros educativos, residencias y equipamientos públicos.",
    contactLabel: "Contacto",
    contactTitle: "Hablemos de medidas, acabados y plazos.",
    contactText:
      "Envía tu consulta o llama directamente para preparar una propuesta de mobiliario contract adaptada al espacio. El equipo comercial puede orientar sobre medidas, materiales, disponibilidad y acabados.",
    contactPhone: "Teléfono",
    contactEmail: "Email",
    contactAddress: "Dirección",
    contactButton: "Solicitar presupuesto",
    mapButton: "Abrir en Google Maps",
    footerTop: "Volver arriba",
  },
  en: {
    languageLabel: "Select language",
    navCompany: "Company",
    navCatalog: "Catalogue",
    navFactory: "Manufacturing",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Contract furniture manufacturer",
    heroTitle: "Durable, refined furniture for hospitality spaces.",
    heroText:
      "Tables, bases, tops and solutions for restaurants, hotels, cafés and communities, manufactured in Barcelona with flexible service and finishes adapted to each project.",
    heroCatalog: "View catalogue",
    heroCall: "Call now",
    heroPanelLabel: "Own manufacturing",
    heroPanelTitle: "Custom tables, bases and tops",
    heroPanelText: "Sales, production and logistics from Santa Perpètua de Mogoda.",
    aboutLabel: "About us",
    aboutTitle: "Local production for spaces that work every day.",
    aboutText1:
      "Equip Contract manufactures furniture for hospitality and communities, specialising in tables, bases, tops, metal structures and custom contract solutions.",
    aboutText2:
      "The company produces made-to-measure orders, especially for hotels, restaurants and projects that need dimensions, finishes, materials and quantities adapted to a specific space.",
    aboutText3:
      "“Made in Barcelona” represents in-house manufacturing: quality, practical design, flexible service and finishes built to compete in lead time, durability and customisation.",
    metric1Title: "Own manufacturing",
    metric1Text: "Control over materials, dimensions, finishes and replacements.",
    metric2Title: "Flexible service",
    metric2Text: "Agile response for hospitality, retail and community projects.",
    metric3Title: "Professional product",
    metric3Text: "Solutions designed for intensive use, easy cleaning and long service life.",
    factoryLabel: "Manufacturing",
    factoryTitle: "In-house workshops for custom projects.",
    factoryIntro:
      "This section is ready for real photos of machines, processes and production details when they are available.",
    factoryWoodTitle: "Carpentry",
    factoryWoodText: "Production and preparation of tops, edges, machining and wood finishes.",
    factoryMetalTitle: "Metal workshop",
    factoryMetalText: "Production of bases, legs, structures and resistant solutions for intensive use.",
    factoryCustomTitle: "Custom orders",
    factoryCustomText: "Tailored solutions for hotels, restaurants and communities with specific needs.",
    catalogLabel: "Catalogue",
    catalogTitle: "Product families",
    catalogDownload: "Download current PDF",
    product1Label: "Tables",
    product1Title: "Bases, structures and tops",
    product1Text: "Combinations for indoor dining rooms, covered terraces and high-use spaces.",
    product2Label: "Chairs",
    product2Title: "Hospitality seating",
    product2Text: "Durable options that are easy to move and consistent with each atmosphere.",
    product3Label: "Stools",
    product3Title: "Bars, breakfasts and high areas",
    product3Text: "Pieces designed for hotels, cafés and restaurant counters.",
    product4Label: "Hotels and restaurants",
    product4Title: "Volume solutions",
    product4Text: "Coordinated production for dining rooms, terraces, lounges and shared areas.",
    processLabel: "How we work",
    processTitle: "From plan to hospitality, with a nearby team.",
    processText:
      "The sales, logistics and production team supports each order to adjust dimensions, materials, finishes and deadlines. The idea is simple: good product, good service and an honest answer when the project is demanding.",
    step1Title: "Definition",
    step1Text: "We review use, dimensions, style, quantities and technical needs.",
    step2Title: "Manufacturing",
    step2Text: "We coordinate materials and in-house production with finish control.",
    step3Title: "Delivery",
    step3Text: "We prepare logistics so the furniture arrives ready to install.",
    projectsLabel: "Applications",
    projectsTitle: "Spaces where it fits",
    project1Title: "Restaurants",
    project1Text: "Dining rooms with robust tables, high service rhythm and warm finishes.",
    project2Title: "Hotels",
    project2Text: "Breakfast areas, cafés, lounges and multipurpose spaces.",
    project3Title: "Communities",
    project3Text: "Company dining rooms, schools, residences and public facilities.",
    contactLabel: "Contact",
    contactTitle: "Let’s talk dimensions, finishes and deadlines.",
    contactText:
      "Send your request or call directly to prepare a contract furniture proposal adapted to the space. The sales team can advise on dimensions, materials, availability and finishes.",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
    contactButton: "Request a quote",
    mapButton: "Open in Google Maps",
    footerTop: "Back to top",
  },
};

translations.ca = {
  ...translations.es,
  languageLabel: "Seleccionar idioma",
  navCompany: "Empresa",
  navCatalog: "Catàleg",
  navFactory: "Fabricació",
  navProjects: "Projectes",
  navContact: "Contacte",
  heroEyebrow: "Fabricant de mobiliari contract",
  heroTitle: "Mobles resistents, clars i ben acabats per a hostaleria.",
  heroCatalog: "Veure catàleg",
  heroCall: "Trucar ara",
  aboutLabel: "Qui som",
  aboutTitle: "Producció local per a espais que treballen cada dia.",
  factoryLabel: "Fabricació",
  factoryTitle: "Tallers propis per a projectes a mida.",
  factoryWoodTitle: "Fusteria",
  factoryMetalTitle: "Taller metàl·lic",
  factoryCustomTitle: "Comandes a mida",
  catalogLabel: "Catàleg",
  catalogTitle: "Famílies de producte",
  catalogDownload: "Descarregar PDF actual",
  processLabel: "Com treballem",
  projectsLabel: "Aplicacions",
  contactLabel: "Contacte",
  contactPhone: "Telèfon",
  contactAddress: "Adreça",
  contactButton: "Sol·licitar pressupost",
  mapButton: "Obrir a Google Maps",
  footerTop: "Tornar a dalt",
};

translations.fr = {
  ...translations.en,
  languageLabel: "Choisir la langue",
  navCompany: "Entreprise",
  navCatalog: "Catalogue",
  navFactory: "Fabrication",
  navProjects: "Projets",
  navContact: "Contact",
  heroEyebrow: "Fabricant de mobilier contract",
  heroTitle: "Du mobilier résistant et soigné pour l’hôtellerie-restauration.",
  heroCatalog: "Voir le catalogue",
  heroCall: "Appeler",
  aboutLabel: "Qui sommes-nous",
  factoryTitle: "Ateliers propres pour projets sur mesure.",
  factoryWoodTitle: "Menuiserie",
  factoryMetalTitle: "Atelier métallique",
  factoryCustomTitle: "Commandes sur mesure",
  catalogTitle: "Familles de produits",
  catalogDownload: "Télécharger le PDF actuel",
  product1Label: "Tables",
  product2Label: "Chaises",
  product3Label: "Tabourets",
  product4Label: "Hôtels et restaurants",
  processLabel: "Notre méthode",
  projectsLabel: "Applications",
  contactTitle: "Parlons dimensions, finitions et délais.",
  contactPhone: "Téléphone",
  contactAddress: "Adresse",
  contactButton: "Demander un devis",
  mapButton: "Ouvrir dans Google Maps",
  footerTop: "Retour en haut",
};

translations.it = {
  ...translations.en,
  languageLabel: "Seleziona lingua",
  navCompany: "Azienda",
  navCatalog: "Catalogo",
  navFactory: "Produzione",
  navProjects: "Progetti",
  navContact: "Contatto",
  heroEyebrow: "Produttore di arredi contract",
  heroTitle: "Arredi resistenti e ben rifiniti per l’ospitalità.",
  heroCatalog: "Vedi catalogo",
  heroCall: "Chiama ora",
  aboutLabel: "Chi siamo",
  factoryTitle: "Laboratori interni per progetti su misura.",
  factoryWoodTitle: "Falegnameria",
  factoryMetalTitle: "Officina metallica",
  factoryCustomTitle: "Ordini su misura",
  catalogTitle: "Famiglie di prodotto",
  catalogDownload: "Scarica il PDF attuale",
  product1Label: "Tavoli",
  product2Label: "Sedie",
  product3Label: "Sgabelli",
  product4Label: "Hotel e ristoranti",
  processLabel: "Come lavoriamo",
  contactPhone: "Telefono",
  contactAddress: "Indirizzo",
  contactButton: "Richiedi preventivo",
  mapButton: "Apri in Google Maps",
  footerTop: "Torna su",
};

translations.de = {
  ...translations.en,
  languageLabel: "Sprache wählen",
  navCompany: "Unternehmen",
  navCatalog: "Katalog",
  navFactory: "Fertigung",
  navProjects: "Projekte",
  navContact: "Kontakt",
  heroEyebrow: "Hersteller von Contract-Möbeln",
  heroTitle: "Robuste, klare Möbel für Gastronomie und Hotellerie.",
  heroCatalog: "Katalog ansehen",
  heroCall: "Jetzt anrufen",
  aboutLabel: "Über uns",
  factoryTitle: "Eigene Werkstätten für Sonderprojekte.",
  factoryWoodTitle: "Schreinerei",
  factoryMetalTitle: "Metallwerkstatt",
  factoryCustomTitle: "Maßanfertigungen",
  catalogTitle: "Produktfamilien",
  catalogDownload: "Aktuelles PDF herunterladen",
  product1Label: "Tische",
  product2Label: "Stühle",
  product3Label: "Hocker",
  product4Label: "Hotels und Restaurants",
  processLabel: "Arbeitsweise",
  contactPhone: "Telefon",
  contactAddress: "Adresse",
  contactButton: "Angebot anfragen",
  mapButton: "In Google Maps öffnen",
  footerTop: "Nach oben",
};

translations.pt = {
  ...translations.en,
  languageLabel: "Selecionar idioma",
  navCompany: "Empresa",
  navCatalog: "Catálogo",
  navFactory: "Fabrico",
  navProjects: "Projetos",
  navContact: "Contacto",
  heroEyebrow: "Fabricante de mobiliário contract",
  heroTitle: "Mobiliário resistente e bem acabado para hotelaria.",
  heroCatalog: "Ver catálogo",
  heroCall: "Ligar agora",
  aboutLabel: "Quem somos",
  factoryTitle: "Oficinas próprias para projetos à medida.",
  factoryWoodTitle: "Carpintaria",
  factoryMetalTitle: "Oficina metálica",
  factoryCustomTitle: "Encomendas à medida",
  catalogTitle: "Famílias de produto",
  catalogDownload: "Descarregar PDF atual",
  product1Label: "Mesas",
  product2Label: "Cadeiras",
  product3Label: "Bancos altos",
  product4Label: "Hotéis e restaurantes",
  processLabel: "Como trabalhamos",
  contactPhone: "Telefone",
  contactAddress: "Morada",
  contactButton: "Pedir orçamento",
  mapButton: "Abrir no Google Maps",
  footerTop: "Voltar ao topo",
};

Object.assign(translations.ca, {
  heroText:
    "Taules, peus, sobres i solucions per a restaurants, hotels, cafeteries i col·lectivitats, fabricades a Barcelona amb servei flexible i acabats adaptats a cada projecte.",
  heroPanelLabel: "Fabricació pròpia",
  heroPanelTitle: "Taules, bases i sobres a mida",
  heroPanelText: "Servei comercial, producció i logística des de Santa Perpètua de Mogoda.",
  aboutText1:
    "Equip Contract és una empresa fabricant de mobiliari per a hostaleria i col·lectivitats, especialitzada en taules, peus, sobres, estructures metàl·liques i solucions a mida per a projectes contract.",
  aboutText2:
    "Realitza comandes a mida, especialment per a hotels, restaurants i projectes que necessiten adaptar mesures, acabats, materials i quantitats a un espai concret.",
  aboutText3:
    "“Made in Barcelona” és el segell d’una gamma de fabricació pròpia: qualitat, dissenys pràctics, elasticitat en el servei i acabats preparats per competir en termini, resistència i personalització.",
  metric1Title: "Fabricació pròpia",
  metric1Text: "Control de materials, mesures, acabats i reposicions.",
  metric2Title: "Servei flexible",
  metric2Text: "Resposta àgil per a projectes d’hostaleria, retail i col·lectivitats.",
  metric3Title: "Producte professional",
  metric3Text: "Solucions pensades per a ús intensiu, neteja fàcil i llarga vida útil.",
  factoryIntro:
    "Aquest apartat queda preparat per incorporar fotos reals de màquines, processos i detalls de producció quan estiguin disponibles.",
  factoryWoodText: "Fabricació i preparació de sobres, cants, mecanitzats i acabats en fusta.",
  factoryMetalText: "Producció de bases, peus, estructures i solucions resistents per a ús intensiu.",
  factoryCustomText: "Solucions personalitzades per a hotels, restaurants i col·lectivitats amb necessitats específiques.",
  product1Label: "Taules",
  product1Title: "Peus, estructures i sobres",
  product1Text: "Combinacions per a menjadors interiors, terrasses cobertes i espais d’ús intensiu.",
  product2Label: "Cadires",
  product2Title: "Seients per a hostaleria",
  product2Text: "Opcions resistents, fàcils de moure i coherents amb cada ambient.",
  product3Label: "Tamborets",
  product3Title: "Barres, esmorzars i zones altes",
  product3Text: "Peces pensades per a hotels, cafeteries i barres de restaurant.",
  product4Label: "Hotels i restaurants",
  product4Title: "Solucions per volum",
  product4Text: "Producció coordinada per a menjadors, terrasses, salons i zones comunes.",
  processTitle: "Del plànol a l’hostaleria, amb un equip proper.",
  processText:
    "L’equip comercial, logístic i de producció acompanya cada comanda per ajustar mesures, materials, acabats i terminis. La idea és senzilla: bon producte, bon servei i una resposta honesta quan el projecte apreta.",
  step1Title: "Definició",
  step1Text: "Revisem ús, mesures, estil, quantitats i necessitats tècniques.",
  step2Title: "Fabricació",
  step2Text: "Coordinem materials i producció pròpia amb control d’acabats.",
  step3Title: "Entrega",
  step3Text: "Preparem la logística perquè el mobiliari arribi llest per instal·lar.",
  projectsTitle: "Espais on encaixa",
  project1Title: "Restaurants",
  project1Text: "Menjadors amb taules robustes, ritmes de servei alts i acabats càlids.",
  project2Title: "Hotels",
  project2Text: "Zones d’esmorzar, cafeteries, lounges i àrees polivalents.",
  project3Title: "Col·lectivitats",
  project3Text: "Menjadors d’empresa, centres educatius, residències i equipaments públics.",
  contactTitle: "Parlem de mesures, acabats i terminis.",
  contactText:
    "Envia la teva consulta o truca directament per preparar una proposta de mobiliari contract adaptada a l’espai. L’equip comercial pot orientar sobre mesures, materials, disponibilitat i acabats.",
});

Object.assign(translations.fr, {
  heroText:
    "Tables, piétements, plateaux et solutions pour restaurants, hôtels, cafés et collectivités, fabriqués à Barcelone avec un service flexible et des finitions adaptées à chaque projet.",
  heroPanelLabel: "Fabrication propre",
  heroPanelTitle: "Tables, bases et plateaux sur mesure",
  heroPanelText: "Service commercial, production et logistique depuis Santa Perpètua de Mogoda.",
  aboutTitle: "Production locale pour des espaces qui travaillent chaque jour.",
  aboutText1:
    "Equip Contract fabrique du mobilier pour l’hôtellerie-restauration et les collectivités, avec une spécialisation dans les tables, piétements, plateaux, structures métalliques et solutions contract sur mesure.",
  aboutText2:
    "L’entreprise réalise des commandes sur mesure, surtout pour les hôtels, restaurants et projets qui doivent adapter dimensions, finitions, matériaux et quantités à un espace concret.",
  aboutText3:
    "« Made in Barcelona » signe une gamme de fabrication propre : qualité, design pratique, souplesse de service et finitions pensées pour les délais, la résistance et la personnalisation.",
  metric1Title: "Fabrication propre",
  metric1Text: "Contrôle des matériaux, dimensions, finitions et réassorts.",
  metric2Title: "Service flexible",
  metric2Text: "Réponse agile pour les projets d’hôtellerie, retail et collectivités.",
  metric3Title: "Produit professionnel",
  metric3Text: "Solutions conçues pour l’usage intensif, le nettoyage facile et la durabilité.",
  factoryIntro:
    "Cette section est prête à recevoir de vraies photos des machines, processus et détails de production lorsqu’elles seront disponibles.",
  factoryWoodText: "Fabrication et préparation de plateaux, chants, usinages et finitions bois.",
  factoryMetalText: "Production de bases, pieds, structures et solutions résistantes pour usage intensif.",
  factoryCustomText: "Solutions personnalisées pour hôtels, restaurants et collectivités aux besoins spécifiques.",
  product1Title: "Piétements, structures et plateaux",
  product1Text: "Combinaisons pour salles intérieures, terrasses couvertes et espaces très sollicités.",
  product2Title: "Assises pour l’hôtellerie-restauration",
  product2Text: "Options résistantes, faciles à déplacer et cohérentes avec chaque ambiance.",
  product3Title: "Bars, petits-déjeuners et zones hautes",
  product3Text: "Pièces pensées pour hôtels, cafés et comptoirs de restaurant.",
  product4Title: "Solutions en volume",
  product4Text: "Production coordonnée pour salles, terrasses, salons et espaces communs.",
  processTitle: "Du plan à l’hôtellerie-restauration, avec une équipe proche.",
  processText:
    "L’équipe commerciale, logistique et production accompagne chaque commande pour ajuster dimensions, matériaux, finitions et délais. L’idée est simple : bon produit, bon service et réponse honnête quand le projet est exigeant.",
  step1Title: "Définition",
  step1Text: "Nous étudions usage, dimensions, style, quantités et besoins techniques.",
  step2Title: "Fabrication",
  step2Text: "Nous coordonnons matériaux et production interne avec contrôle des finitions.",
  step3Title: "Livraison",
  step3Text: "Nous préparons la logistique pour que le mobilier arrive prêt à installer.",
  projectsTitle: "Espaces où il s’intègre",
  project1Title: "Restaurants",
  project1Text: "Salles avec tables robustes, rythmes de service élevés et finitions chaleureuses.",
  project2Title: "Hôtels",
  project2Text: "Zones petit-déjeuner, cafés, lounges et espaces polyvalents.",
  project3Title: "Collectivités",
  project3Text: "Restaurants d’entreprise, centres éducatifs, résidences et équipements publics.",
  contactText:
    "Envoyez votre demande ou appelez directement pour préparer une proposition de mobilier contract adaptée à l’espace. L’équipe commerciale peut vous orienter sur les dimensions, matériaux, disponibilités et finitions.",
});

Object.assign(translations.it, {
  heroText:
    "Tavoli, basi, piani e soluzioni per ristoranti, hotel, caffetterie e collettività, prodotti a Barcellona con servizio flessibile e finiture adattate a ogni progetto.",
  heroPanelLabel: "Produzione propria",
  heroPanelTitle: "Tavoli, basi e piani su misura",
  heroPanelText: "Servizio commerciale, produzione e logistica da Santa Perpètua de Mogoda.",
  aboutTitle: "Produzione locale per spazi che lavorano ogni giorno.",
  aboutText1:
    "Equip Contract produce arredi per ospitalità e collettività, specializzandosi in tavoli, basi, piani, strutture metalliche e soluzioni contract su misura.",
  aboutText2:
    "Realizza ordini su misura, soprattutto per hotel, ristoranti e progetti che devono adattare misure, finiture, materiali e quantità a uno spazio concreto.",
  aboutText3:
    "“Made in Barcelona” è il segno di una gamma di produzione propria: qualità, design pratico, servizio flessibile e finiture pensate per tempi, resistenza e personalizzazione.",
  metric1Title: "Produzione propria",
  metric1Text: "Controllo di materiali, misure, finiture e riassortimenti.",
  metric2Title: "Servizio flessibile",
  metric2Text: "Risposta agile per progetti di ospitalità, retail e collettività.",
  metric3Title: "Prodotto professionale",
  metric3Text: "Soluzioni pensate per uso intensivo, pulizia semplice e lunga durata.",
  factoryIntro:
    "Questa sezione è pronta per inserire foto reali di macchine, processi e dettagli produttivi quando saranno disponibili.",
  factoryWoodText: "Produzione e preparazione di piani, bordi, lavorazioni e finiture in legno.",
  factoryMetalText: "Produzione di basi, gambe, strutture e soluzioni resistenti per uso intensivo.",
  factoryCustomText: "Soluzioni personalizzate per hotel, ristoranti e collettività con esigenze specifiche.",
  product1Title: "Basi, strutture e piani",
  product1Text: "Combinazioni per sale interne, terrazze coperte e spazi ad alto utilizzo.",
  product2Title: "Sedute per l’ospitalità",
  product2Text: "Opzioni resistenti, facili da spostare e coerenti con ogni ambiente.",
  product3Title: "Bar, colazioni e zone alte",
  product3Text: "Elementi pensati per hotel, caffetterie e banconi di ristorante.",
  product4Title: "Soluzioni per volumi",
  product4Text: "Produzione coordinata per sale, terrazze, lounge e aree comuni.",
  processTitle: "Dal progetto all’ospitalità, con un team vicino.",
  processText:
    "Il team commerciale, logistico e produttivo segue ogni ordine per adattare misure, materiali, finiture e tempi. L’idea è semplice: buon prodotto, buon servizio e una risposta onesta quando il progetto è impegnativo.",
  step1Title: "Definizione",
  step1Text: "Analizziamo uso, misure, stile, quantità ed esigenze tecniche.",
  step2Title: "Produzione",
  step2Text: "Coordiniamo materiali e produzione interna con controllo delle finiture.",
  step3Title: "Consegna",
  step3Text: "Prepariamo la logistica affinché gli arredi arrivino pronti da installare.",
  projectsLabel: "Applicazioni",
  projectsTitle: "Spazi in cui si inserisce",
  project1Title: "Ristoranti",
  project1Text: "Sale con tavoli robusti, ritmi di servizio elevati e finiture calde.",
  project2Title: "Hotel",
  project2Text: "Aree colazione, caffetterie, lounge e spazi polivalenti.",
  project3Title: "Collettività",
  project3Text: "Mense aziendali, centri educativi, residenze e strutture pubbliche.",
  contactTitle: "Parliamo di misure, finiture e tempi.",
  contactText:
    "Invia la tua richiesta o chiama direttamente per preparare una proposta di arredo contract adattata allo spazio. Il team commerciale può consigliare su misure, materiali, disponibilità e finiture.",
});

Object.assign(translations.de, {
  heroText:
    "Tische, Gestelle, Platten und Lösungen für Restaurants, Hotels, Cafés und Gemeinschaftsbereiche, gefertigt in Barcelona mit flexiblem Service und projektspezifischen Oberflächen.",
  heroPanelLabel: "Eigene Fertigung",
  heroPanelTitle: "Tische, Gestelle und Platten nach Maß",
  heroPanelText: "Vertrieb, Produktion und Logistik aus Santa Perpètua de Mogoda.",
  aboutTitle: "Lokale Produktion für Räume, die täglich genutzt werden.",
  aboutText1:
    "Equip Contract fertigt Möbel für Gastronomie, Hotellerie und Gemeinschaftsbereiche und ist spezialisiert auf Tische, Gestelle, Platten, Metallstrukturen und maßgeschneiderte Contract-Lösungen.",
  aboutText2:
    "Das Unternehmen realisiert Maßanfertigungen, besonders für Hotels, Restaurants und Projekte, die Maße, Oberflächen, Materialien und Stückzahlen an einen konkreten Raum anpassen müssen.",
  aboutText3:
    "„Made in Barcelona“ steht für eigene Fertigung: Qualität, praktisches Design, flexiblen Service und Oberflächen, die auf Lieferzeit, Widerstandsfähigkeit und Individualisierung ausgelegt sind.",
  metric1Title: "Eigene Fertigung",
  metric1Text: "Kontrolle über Materialien, Maße, Oberflächen und Nachlieferungen.",
  metric2Title: "Flexibler Service",
  metric2Text: "Schnelle Reaktion für Projekte in Gastronomie, Retail und Gemeinschaftsbereichen.",
  metric3Title: "Professionelles Produkt",
  metric3Text: "Lösungen für intensive Nutzung, einfache Reinigung und lange Lebensdauer.",
  factoryIntro:
    "Dieser Bereich ist vorbereitet, um später echte Fotos von Maschinen, Prozessen und Produktionsdetails einzubinden.",
  factoryWoodText: "Fertigung und Vorbereitung von Platten, Kanten, Bearbeitungen und Holzoberflächen.",
  factoryMetalText: "Produktion von Gestellen, Füßen, Strukturen und robusten Lösungen für intensive Nutzung.",
  factoryCustomText: "Maßgeschneiderte Lösungen für Hotels, Restaurants und Gemeinschaftsbereiche mit spezifischen Anforderungen.",
  product1Title: "Gestelle, Strukturen und Platten",
  product1Text: "Kombinationen für Innenräume, überdachte Terrassen und stark genutzte Bereiche.",
  product2Title: "Sitzmöbel für Hospitality",
  product2Text: "Robuste Optionen, leicht zu bewegen und passend zu jedem Ambiente.",
  product3Title: "Bars, Frühstücksbereiche und hohe Zonen",
  product3Text: "Elemente für Hotels, Cafés und Restauranttheken.",
  product4Title: "Lösungen für größere Mengen",
  product4Text: "Koordinierte Produktion für Speiseräume, Terrassen, Lounges und Gemeinschaftsbereiche.",
  processTitle: "Vom Plan bis zur Hospitality, mit einem nahen Team.",
  processText:
    "Vertrieb, Logistik und Produktion begleiten jede Bestellung, um Maße, Materialien, Oberflächen und Fristen abzustimmen. Die Idee ist einfach: gutes Produkt, guter Service und eine ehrliche Antwort, wenn das Projekt anspruchsvoll wird.",
  step1Title: "Definition",
  step1Text: "Wir prüfen Nutzung, Maße, Stil, Mengen und technische Anforderungen.",
  step2Title: "Fertigung",
  step2Text: "Wir koordinieren Materialien und eigene Produktion mit Kontrolle der Oberflächen.",
  step3Title: "Lieferung",
  step3Text: "Wir bereiten die Logistik vor, damit die Möbel montagebereit ankommen.",
  projectsLabel: "Anwendungen",
  projectsTitle: "Räume, in die es passt",
  project1Title: "Restaurants",
  project1Text: "Speiseräume mit robusten Tischen, hohem Servicerhythmus und warmen Oberflächen.",
  project2Title: "Hotels",
  project2Text: "Frühstücksbereiche, Cafés, Lounges und Mehrzweckräume.",
  project3Title: "Gemeinschaftsbereiche",
  project3Text: "Betriebsrestaurants, Bildungseinrichtungen, Residenzen und öffentliche Einrichtungen.",
  contactTitle: "Sprechen wir über Maße, Oberflächen und Fristen.",
  contactText:
    "Senden Sie Ihre Anfrage oder rufen Sie direkt an, um ein Contract-Möbelangebot für Ihren Raum vorzubereiten. Das Vertriebsteam berät zu Maßen, Materialien, Verfügbarkeit und Oberflächen.",
});

Object.assign(translations.pt, {
  heroText:
    "Mesas, bases, tampos e soluções para restaurantes, hotéis, cafetarias e coletividades, fabricadas em Barcelona com serviço flexível e acabamentos adaptados a cada projeto.",
  heroPanelLabel: "Fabrico próprio",
  heroPanelTitle: "Mesas, bases e tampos à medida",
  heroPanelText: "Serviço comercial, produção e logística a partir de Santa Perpètua de Mogoda.",
  aboutTitle: "Produção local para espaços que trabalham todos os dias.",
  aboutText1:
    "A Equip Contract fabrica mobiliário para hotelaria e coletividades, especializada em mesas, bases, tampos, estruturas metálicas e soluções contract à medida.",
  aboutText2:
    "Realiza encomendas à medida, sobretudo para hotéis, restaurantes e projetos que precisam de adaptar medidas, acabamentos, materiais e quantidades a um espaço concreto.",
  aboutText3:
    "“Made in Barcelona” é o selo de uma gama de fabrico próprio: qualidade, design prático, flexibilidade de serviço e acabamentos pensados para prazo, resistência e personalização.",
  metric1Title: "Fabrico próprio",
  metric1Text: "Controlo de materiais, medidas, acabamentos e reposições.",
  metric2Title: "Serviço flexível",
  metric2Text: "Resposta ágil para projetos de hotelaria, retail e coletividades.",
  metric3Title: "Produto profissional",
  metric3Text: "Soluções pensadas para uso intensivo, limpeza fácil e longa vida útil.",
  factoryIntro:
    "Esta secção fica preparada para incorporar fotos reais de máquinas, processos e detalhes de produção quando estiverem disponíveis.",
  factoryWoodText: "Fabrico e preparação de tampos, orlas, maquinações e acabamentos em madeira.",
  factoryMetalText: "Produção de bases, pés, estruturas e soluções resistentes para uso intensivo.",
  factoryCustomText: "Soluções personalizadas para hotéis, restaurantes e coletividades com necessidades específicas.",
  product1Title: "Bases, estruturas e tampos",
  product1Text: "Combinações para salas interiores, esplanadas cobertas e espaços de alto uso.",
  product2Title: "Assentos para hotelaria",
  product2Text: "Opções resistentes, fáceis de mover e coerentes com cada ambiente.",
  product3Title: "Balcões, pequenos-almoços e zonas altas",
  product3Text: "Peças pensadas para hotéis, cafetarias e balcões de restaurante.",
  product4Title: "Soluções por volume",
  product4Text: "Produção coordenada para salas, esplanadas, lounges e zonas comuns.",
  processTitle: "Do plano à hotelaria, com uma equipa próxima.",
  processText:
    "A equipa comercial, logística e de produção acompanha cada encomenda para ajustar medidas, materiais, acabamentos e prazos. A ideia é simples: bom produto, bom serviço e uma resposta honesta quando o projeto aperta.",
  step1Title: "Definição",
  step1Text: "Revemos uso, medidas, estilo, quantidades e necessidades técnicas.",
  step2Title: "Fabrico",
  step2Text: "Coordenamos materiais e produção própria com controlo de acabamentos.",
  step3Title: "Entrega",
  step3Text: "Preparamos a logística para que o mobiliário chegue pronto a instalar.",
  projectsLabel: "Aplicações",
  projectsTitle: "Espaços onde encaixa",
  project1Title: "Restaurantes",
  project1Text: "Salas com mesas robustas, ritmos de serviço elevados e acabamentos acolhedores.",
  project2Title: "Hotéis",
  project2Text: "Zonas de pequeno-almoço, cafetarias, lounges e áreas polivalentes.",
  project3Title: "Coletividades",
  project3Text: "Refeitórios de empresa, centros educativos, residências e equipamentos públicos.",
  contactTitle: "Falemos de medidas, acabamentos e prazos.",
  contactText:
    "Envie a sua consulta ou ligue diretamente para preparar uma proposta de mobiliário contract adaptada ao espaço. A equipa comercial pode orientar sobre medidas, materiais, disponibilidade e acabamentos.",
});

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeNav = () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

const closeLanguageMenu = () => {
  languageMenu.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language;
  languageToggle.setAttribute("aria-label", dictionary.languageLabel);
  languageCurrent.textContent = languageNames[language];
  languageToggle.querySelector(".flag").className = `flag flag-${language}`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageOptions.forEach((option) => {
    const isActive = option.dataset.languageOption === language;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-current", isActive ? "true" : "false");
  });
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
    closeLanguageMenu();
  }
});

languageToggle.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("is-open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const language = option.dataset.languageOption;
    localStorage.setItem("equip-contract-language", language);
    applyLanguage(language);
    closeLanguageMenu();
    closeNav();
  });
});

document.addEventListener("click", (event) => {
  if (!languageSelect.contains(event.target)) {
    closeLanguageMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    closeNav();
  }
});

languageSelect.addEventListener("change", (event) => {
  const language = event.target.value;
  localStorage.setItem("equip-contract-language", language);
  applyLanguage(language);
  closeLanguageMenu();
  closeNav();
});

const savedLanguage = localStorage.getItem("equip-contract-language");
const initialLanguage = translations[savedLanguage] ? savedLanguage : "es";

applyLanguage(initialLanguage);
