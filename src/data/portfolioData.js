export const portfolioData = {
  personal: {
    name: "Lucas",
    lastName: "Güimil.",
    fullName: "Lucas Güimil",
    badgeHandle: "lg",
    badgeSlug: "/lucas",
    role: "SOFTWARE DEVELOPER",
    headline: "Desarrollo sistemas backend de alta criticidad y productos integrados con agentes de Inteligencia Artificial — desde la arquitectura distribuida hasta la ejecución en producción.",
    quickFacts: {
      now: { label: "AHORA", value: "Consultoría Global · Full Stack Developer" },
      base: { label: "BASE", value: "Buenos Aires · Remoto o híbrido" }
    },
    contact: {
      emailFreelance: "lgsoftwaredev@gmail.com",
      emailLaboral: "lucasfguimil00@gmail.com",
      email: "lucasfguimil00@gmail.com",
      linkedin: "https://m.linkedin.com/in/lucas-güimil-28bb22243",
      github: "https://github.com",
      cv: "/CV-Lucas-Guimil.pdf",
      cvAts: "/CV-Lucas-Guimil-ATS.docx",
      location: "Buenos Aires, Argentina"
    }
  },

  experiences: [
    {
      id: "exp-1",
      period: "Sep 2026 — Presente",
      isCurrent: true,
      company: "Consultoría Global S.A.",
      client: "Proyectos de Innovación",
      role: "Desarrollo de Productos con Agentes de Inteligencia Artificial",
      description: "Diseño e implementación de arquitecturas orientadas a productos impulsados por agentes autónomos de Inteligencia Artificial. Desarrollo de pipelines que combinan razonamiento de LLMs, integración de APIs y flujos automatizados de toma de decisiones.",
      achievements: [
        "Diseño de orquestadores multi-agente basados en grafos con memoria contextual persistente y ejecución paralela",
        "Integración de Tool Calling con microservicios backend para ejecución determinística de transacciones y consultas",
        "Investigación, prototipado y benchmarking de latencia en modelos de lenguaje para entornos de producción",
        "Implementación de guardrails y validaciones determinísticas contra alucinaciones en respuestas críticas"
      ],
      skills: ["python", "typescript", "langchain", "autonomous-agents", "fastapi", "redis", "docker", "llms"]
    },
    {
      id: "exp-2",
      period: "2023 — Ago 2026",
      isCurrent: false,
      company: "Consultoría Global S.A.",
      client: "Santander Tecnología",
      role: "Desarrollador Full Stack / Backend",
      description: "Participación activa en células ágiles de ingeniería bancaria para Santander Tecnología (Cross-Product y Fondos Comunes de Inversión - FCI), desarrollando microservicios backend críticos tolerantes a fallos y con estrictos estándares de seguridad financiera.",
      achievements: [
        "Desarrollo de microservicios backend aplicando reglas de negocio complejas y validaciones financieras",
        "Procesamiento asíncrono de eventos transaccionales de alto volumen utilizando Apache Kafka y Redis",
        "Integración bidireccional con APIs core bancarias, servicios legacy SOAP y modernas interfaces RESTful",
        "Diseño e indexación de esquemas de datos relacionales en Oracle DB y PostgreSQL para auditorías financieras",
        "Despliegues en contenedores sobre clústeres empresariales de Red Hat OpenShift y Google Cloud Platform (GCP)"
      ],
      skills: ["nestjs", "node.js", "typescript", "apache-kafka", "redis", "oracle", "postgresql", "openshift", "gcp"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "ArmorCut PPF",
      subtitle: "SaaS de gestión de stock, bobinas y consumibles para detailing vehicular",
      status: "En producción",
      statusColor: "#10b981",
      image: "/projects/armorcut_ppf.png",
      description: "Plataforma SaaS full-stack diseñada a medida para talleres y centros de detailing vehicular. Especializada en la administración y fraccionamiento de bobinas de PPF (Paint Protection Film) con cálculo de metros lineales y control de desperdicio, integrando además módulos de stock para consumibles (shampoo neutro, revividores, selladores cerámicos y tratamientos).",
      highlights: [
        "Control granular de stock de bobinas de PPF: cálculo exacto de metros disponibles, ancho, código de lote y acabado (Gloss, Satin Matte, Windshield)",
        "Registro de cortes y salidas en tiempo real con trazabilidad operativa y cálculo automático de m² restantes",
        "Módulo de control de inventario para insumos y químicos: revividores de interiores, shampoo neutro y selladores cerámicos",
        "Arquitectura serverless optimizada sobre Vercel con persistencia relacional en Supabase (PostgreSQL + RLS) con $0 costo de infraestructura",
        "Generación y exportación de auditorías a CSV con métricas de consumo y trazabilidad integral"
      ],
      tags: ["react", "typescript", "supabase", "postgresql", "tailwind", "serverless", "vercel"]
    },
    {
      id: "proj-2",
      title: "Condo-Management",
      subtitle: "SaaS B2B de administración de consorcios, liquidación de expensas e IA multimodal",
      status: "MVP Funcional",
      statusColor: "#8b5cf6",
      image: "/projects/condo_management.png",
      description: "Plataforma B2B integral diseñada para administradores profesionales de consorcios. Automatiza la gestión multi-edificio, padrón de unidades funcionales (UFs), clasificación de gastos según los 10 rubros oficiales de la Ley 941 GCBA y liquidación de expensas con motor de prorrateos, integrando ingesta inteligente de comprobantes mediante IA multimodal.",
      highlights: [
        "Gestión multi-consorcio y padrón granular de UFs (deptos, cocheras, bauleras) con coeficientes de copropiedad A/B/C y saldos",
        "Módulo de gastos y egresos con auditoría de comprobantes y clasificación estricta bajo los 10 rubros de la Ley 941 GCBA",
        "AI Invoice Ingestion: extracción automática de CUIT, CAE, importes y clasificación de facturas complejas con Google Gemini",
        "Backend robusto con NestJS, arquitectura modular, validaciones DTO y persistencia relacional en Oracle Database",
        "Frontend reactivo de alto rendimiento en React 19, TypeScript y Tailwind CSS con interfaz moderna para administradores"
      ],
      tags: ["react", "typescript", "nestjs", "oracle-db", "typeorm", "google-gemini", "tailwind", "rest-api"]
    }
  ],

  skillCategories: [
    {
      category: "Frontend",
      skills: [
        { name: "React", icons: ["/skills/react.svg"] },
        { name: "React Native", icons: ["/skills/reactnative.svg"] },
        { name: "Next.js", icons: ["/skills/nextjs.svg"] },
        { name: "TypeScript", icons: ["/skills/typescript.svg"] },
        { name: "JavaScript", icons: ["/skills/javascript.svg"] },
        { name: "HTML & CSS", icons: ["/skills/html5.svg", "/skills/css.svg"] },
        { name: "Tailwind", icons: ["/skills/tailwindcss.svg"] }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icons: ["/skills/nodejs.svg"] },
        { name: "Nest.js", icons: ["/skills/nestjs.svg"] },
        { name: "Express", icons: ["/skills/expressjs.svg"] },
        { name: "Microservicios", icons: ["/skills/microservices.svg"] },
        { name: "Java", icons: ["/skills/java.svg"] },
        { name: "Spring Boot", icons: ["/skills/spring.svg"] },
        { name: "Python", icons: ["/skills/python.svg"] },
        { name: "FastAPI", icons: ["/skills/fastapi.svg"] }
      ]
    },
    {
      category: "IA & Agentes",
      skills: [
        { name: "LangChain", icons: ["/skills/langchain.svg"] },
        { name: "OpenAI / LLMs", icons: ["/skills/openai.svg"] },
        { name: "Claude Code", icons: ["/skills/claude.svg"] }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icons: ["/skills/postgresql.svg"] },
        { name: "Oracle", icons: ["/skills/oracle.svg"] },
        { name: "MongoDB", icons: ["/skills/mongodb.svg"] },
        { name: "Redis", icons: ["/skills/redis.svg"] },
        { name: "MySQL", icons: ["/skills/mysql.svg"] },
        { name: "Prisma", icons: ["/skills/prisma.svg"] }
      ]
    },
    {
      category: "Testing",
      skills: [
        { name: "Jest", icons: ["/skills/jest.svg"] },
        { name: "Vitest", icons: ["/skills/vitest.svg"] },
        { name: "JUnit", icons: ["/skills/junit.svg"] },
        { name: "Mockito", icons: ["/skills/mockito.svg"] }
      ]
    },
    {
      category: "Tooling",
      skills: [
        { name: "Git", icons: ["/skills/git.svg"] },
        { name: "Docker", icons: ["/skills/docker.svg"] },
        { name: "Apache Kafka", icons: ["/skills/apachekafka.svg"] },
        { name: "CI/CD", icons: ["/skills/cicd.svg"] },
        { name: "Google Cloud", icons: ["/skills/googlecloud.svg"] },
        { name: "OpenShift", icons: ["/skills/redhat.svg"] }
      ]
    }
  ]
};
