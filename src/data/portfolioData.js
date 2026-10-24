export const portfolioData = {
  personal: {
    name: "Lucas Güimil",
    tagline: "Software Developer",
    subtagline: "Arquitecturas de microservicios resilientes, ecosistemas bancarios transaccionales y productos impulsados por agentes de Inteligencia Artificial autónomos.",
    status: {
      available: true,
      text: "Disponible para proyectos & roles de alto impacto",
      location: "Buenos Aires, Argentina (Remoto / Híbrido)"
    },
    bio: [
      "Desarrollador con sólida experiencia en la industria de Banca & FinTech de misión crítica, participando en células ágiles de Fondos Comunes de Inversión y sistemas transaccionales Cross-Product.",
      "Actualmente enfocado en la vanguardia tecnológica: diseño e implementación de productos impulsados por agentes de Inteligencia Artificial, integrando modelos de lenguaje (LLMs), orquestación de herramientas autónomas (Tool Calling) y microservicios backend de alto rendimiento."
    ],
    contact: {
      email: "lucasfguimil00@gmail.com",
      linkedin: "https://m.linkedin.com/in/lucas-güimil-28bb22243",
      github: "https://github.com",
      location: "Argentina"
    }
  },

  stats: [
    { label: "Experiencia en Producción", value: "3+ Años", highlight: "Sector Financiero & IA" },
    { label: "Arquitectura Principal", value: "Microservicios", highlight: "NestJS & Node.js" },
    { label: "Sistemas Críticos", value: "Banca & FinTech", highlight: "Fondos FCI & Core" },
    { label: "Enfoque Actual", value: "AI Agents", highlight: "LLMs & Flujos Autónomos" }
  ],

  experiences: [
    {
      id: "exp-1",
      period: "Septiembre 2026 — Actualidad",
      isCurrent: true,
      company: "Consultoría Global S.A.",
      client: "Proyectos Internos de Innovación",
      role: "Desarrollo de Productos con Agentes de Inteligencia Artificial",
      description: "Liderazgo técnico en el diseño e implementación de arquitecturas orientadas a productos impulsados por agentes autónomos de Inteligencia Artificial. Desarrollo de pipelines que combinan razonamiento de LLMs, integración de APIs y flujos automatizados de toma de decisiones.",
      achievements: [
        "Diseño de orquestadores multi-agente con grafos de ejecución y memoria contextual persistente.",
        "Integración de Tool Calling con microservicios backend para ejecución segura de transacciones y consultas de datos.",
        "Investigación, prototipado y benchmarking de latencia en modelos de lenguaje para entornos de producción.",
        "Implementación de guardrails y validaciones determinísticas contra alucinaciones en respuestas críticas."
      ],
      skills: ["Python", "TypeScript", "Node.js", "LangChain", "Autonomous Agents", "FastAPI", "Redis", "Vector DBs", "Docker"]
    },
    {
      id: "exp-2",
      period: "2023 — Agosto 2026",
      isCurrent: false,
      company: "Consultoría Global S.A.",
      client: "Sector: Banca & FinTech",
      role: "Desarrollador Full Stack / Backend",
      description: "Participación activa en células ágiles de ingeniería bancaria (Cross-Product y Fondos Comunes de Inversión - FCI), diseñando e implementando microservicios backend de alta criticidad, tolerantes a fallos y con estrictos estándares de seguridad financiera.",
      achievements: [
        "Desarrollo de microservicios backend en NestJS y TypeScript aplicando reglas de negocio complejas y validaciones financieras en tiempo real.",
        "Procesamiento asíncrono de eventos transaccionales de alto volumen utilizando Apache Kafka y Redis.",
        "Integración bidireccional con APIs core bancarias, servicios legacy SOAP y modernas interfaces RESTful.",
        "Diseño e indexación de esquemas de datos relacionales en Oracle DB y PostgreSQL para auditorías financieras libres de inconsistencias.",
        "Despliegues en contenedores sobre clústeres empresariales de Red Hat OpenShift y Google Cloud Platform (GCP)."
      ],
      skills: ["NestJS", "Node.js", "TypeScript", "Java (Spring Boot)", "Apache Kafka", "Redis", "Oracle DB", "PostgreSQL", "OpenShift", "GCP", "REST", "SOAP"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Aetherius: AI Agent Orchestrator",
      subtitle: "Motor distribuido de orquestación de agentes autónomos",
      category: "ai",
      image: "/projects/agent_orchestrator.jpg",
      featured: true,
      description: "Plataforma escalable de orquestación donde agentes inteligentes especializados (Investigación, Clasificación, Validación de Datos y Ejecución) colaboran de forma sincrónica y asincrónica para resolver tareas complejas de negocio.",
      highlights: [
        "Arquitectura de nodos basados en DAGs con paralelización de subagentes.",
        "Sistema de memoria híbrida a corto y largo plazo con bases de datos vectoriales.",
        "Mecanismo de 'Human-in-the-loop' para autorizar transacciones de riesgo antes de su ejecución final.",
        "Monitor en tiempo real de uso de tokens, latencia de inferencia y tasa de éxito."
      ],
      metrics: [
        { label: "Latencia Promedio", value: "1.8s" },
        { label: "Concurrencia", value: "Multi-Agente" },
        { label: "Guardrails", value: "100% Determinista" }
      ],
      tags: ["Python", "TypeScript", "LangChain", "FastAPI", "Redis Vector", "Docker", "SSE Streaming"]
    },
    {
      id: "proj-2",
      title: "Core FCI: Engine de Fondos Comunes",
      subtitle: "Motor transaccional bancario de alta disponibilidad",
      category: "fintech",
      image: "/projects/fintech_core.jpg",
      featured: true,
      description: "Sistema financiero crítico para la suscripción, rescate y cálculo de rendimientos diarios de Fondos Comunes de Inversión (FCI), procesando miles de transacciones por segundo con cero tolerancia a inconsistencias contables.",
      highlights: [
        "Procesamiento de eventos en tiempo real con Apache Kafka y semántica 'At-Least-Once' con idempotencia estricta.",
        "Caché distribuido con Redis para cotizaciones de cuotapartes con tiempos de respuesta sub-milisegundo.",
        "Validaciones normativas financieras automatizadas contra límites operativos de usuarios y scoring bancario.",
        "Integración resiliente con el core bancario mediante Circuit Breakers y Retry Policies con Dead Letter Queues (DLQ)."
      ],
      metrics: [
        { label: "Throughput", value: "18.5k msg/s" },
        { label: "Latencia", value: "2.1ms" },
        { label: "Disponibilidad", value: "99.98%" }
      ],
      tags: ["NestJS", "TypeScript", "Apache Kafka", "Oracle DB", "Redis", "OpenShift", "Event-Driven"]
    },
    {
      id: "proj-3",
      title: "Sentinel Gate: Banking API Gateway & Security",
      subtitle: "Gateway perimetral mTLS y observabilidad distribuida",
      category: "cloud",
      image: "/projects/banking_gateway.jpg",
      featured: true,
      description: "Gateway perimetral diseñado para gobernar, proteger y monitorizar la comunicación entre microservicios bancarios y clientes externos, implementando autenticación mutua TLS (Zero-Trust) y rate limiting adaptativo.",
      highlights: [
        "Autenticación mTLS y rotación de certificados criptográficos con auditoría en tiempo real.",
        "Rate limiting distribuido basado en Redis con algoritmos Token Bucket y Leaky Bucket.",
        "Trazabilidad distribuida de punta a punta con correlación de Request IDs e instrumentación OpenTelemetry.",
        "Defensa proactiva contra inyección de datos y ataques DoS con fallback automático a réplicas saludables."
      ],
      metrics: [
        { label: "Tráfico Diario", value: "87.2M Req" },
        { label: "Tasa de Error", value: "0.01%" },
        { label: "Seguridad", value: "mTLS Zero-Trust" }
      ],
      tags: ["Node.js", "TypeScript", "GCP", "Docker", "Redis Cluster", "mTLS", "OpenTelemetry"]
    }
  ],

  skillCategories: [
    {
      title: "Backend Core & Arquitectura",
      icon: "Server",
      description: "Desarrollo de servicios escalables, resilientes y preparados para alta concurrencia.",
      skills: [
        { name: "Node.js", level: "Senior", note: "Event-loop optimization & async streams" },
        { name: "NestJS", level: "Avanzado", note: "Arquitectura modular, Clean Architecture & DI" },
        { name: "TypeScript", level: "Avanzado", note: "Tipado estricto, interfaces y generics" },
        { name: "Java (Spring Boot)", level: "Intermedio", note: "Microservicios corporativos y APIs REST" },
        { name: "Python", level: "Avanzado", note: "Pipelines de IA, scripting & FastAPI" },
        { name: "Microservicios", level: "Experto", note: "Domain-Driven Design (DDD) & Event-Driven" },
        { name: "REST & SOAP", level: "Avanzado", note: "Contratos de API, OpenAPI/Swagger y legacy banking" }
      ]
    },
    {
      title: "Inteligencia Artificial & Agentes",
      icon: "Cpu",
      description: "Integración de LLMs en el mundo real con orquestación autónoma de herramientas.",
      skills: [
        { name: "Autonomous Agents", level: "Avanzado", note: "Grafos de decisión, ReAct & bucles de razonamiento" },
        { name: "Tool Calling & APIs", level: "Experto", note: "Ejecución de herramientas y APIs determinísticas" },
        { name: "LangChain / LangGraph", level: "Avanzado", note: "Orquestación de agentes y cadenas complejas" },
        { name: "Vector Databases", level: "Intermedio", note: "Búsqueda semántica, embeddings y recuperación (RAG)" },
        { name: "Prompt Engineering & Guardrails", level: "Avanzado", note: "Estructuras JSON estrictas y validación Pydantic/Zod" }
      ]
    },
    {
      title: "Streaming, Cloud & DevOps",
      icon: "Cloud",
      description: "Infraestructura como código, contenedores y mensajería distribuida.",
      skills: [
        { name: "Apache Kafka", level: "Avanzado", note: "Event Streaming, particionamiento y grupos de consumidores" },
        { name: "Redis", level: "Avanzado", note: "Caching de baja latencia, pub/sub y rate limiting" },
        { name: "Red Hat OpenShift", level: "Avanzado", note: "Despliegues bancarios y gestión de pods en clusters" },
        { name: "Google Cloud (GCP)", level: "Intermedio", note: "Cloud Run, Compute Engine y redes VPC" },
        { name: "Docker", level: "Avanzado", note: "Multi-stage builds y optimización de contenedores" },
        { name: "CI/CD & Git", level: "Avanzado", note: "Pipelines automatizados de testing y despliegue" }
      ]
    },
    {
      title: "Bases de Datos & Persistencia",
      icon: "Database",
      description: "Gestión de datos relacionales y NoSQL con integridad financiera.",
      skills: [
        { name: "PostgreSQL", level: "Avanzado", note: "Consultas complejas, índices y transacciones ACID" },
        { name: "Oracle DB", level: "Avanzado", note: "Modelos transaccionales bancarios y procedimientos" },
        { name: "MongoDB", level: "Intermedio", note: "Almacenamiento orientado a documentos y agregaciones" },
        { name: "TypeORM / Prisma", level: "Avanzado", note: "Mapeo objeto-relacional y migraciones seguras" }
      ]
    }
  ],

  interactiveScenarios: [
    {
      id: "scenario-1",
      name: "Suscripción a Fondo Común de Inversión (FinTech)",
      category: "Fintech & Microservicios",
      inputPrompt: "POST /api/v1/fci/subscribe { fundId: 'FCI-ALPHA-01', amount: 500000, currency: 'ARS' }",
      steps: [
        { node: "API Gateway", action: "Validación de firma mTLS, verificación de JWT de sesión y Rate Limiting", status: "success", latency: "4ms" },
        { node: "FCI Microservice", action: "Verificación de scoring financiero, límite normativo y saldo en cuenta corriente", status: "success", latency: "18ms" },
        { node: "Apache Kafka", action: "Emisión de evento 'TRANSACTION_INITIATED' al topic particionado por cuenta", status: "success", latency: "6ms" },
        { node: "Database (Oracle)", action: "Bloqueo pesimista de fondos, débito contable y cálculo de cuotapartes", status: "success", latency: "22ms" },
        { node: "Redis Cache", action: "Actualización de cuotapartes asignadas y notificación de liquidación", status: "success", latency: "2ms" }
      ],
      result: "Liquidación completada. 3,421.15 cuotapartes acreditadas exitosamente con SLA de 52ms."
    },
    {
      id: "scenario-2",
      name: "Orquestación de Agente Autónomo con Tool Calling",
      category: "AI Agents & LLM",
      inputPrompt: "User: 'Analiza el flujo de transacciones sospechosas de las últimas 2 horas y genera reporte de riesgo'",
      steps: [
        { node: "Agent Router (LLM)", action: "Clasificación de intención: Detección de Anomalías + Generación de Reporte", status: "success", latency: "140ms" },
        { node: "Tool Calling 1 (Postgres)", action: "Ejecución de tool `fetch_anomaly_metrics(window='2h', threshold=0.85)`", status: "success", latency: "38ms" },
        { node: "Reasoning Node", action: "Análisis de 1,420 eventos. Detección de 3 IPs con reintentos fallidos coordinados", status: "success", latency: "210ms" },
        { node: "Tool Calling 2 (Security)", action: "Ejecución de tool `apply_temporary_throttle(ip_list=['...'])`", status: "success", latency: "15ms" },
        { node: "Agent Synthesizer", action: "Generación de informe técnico ejecutivo y alerta inmediata a canal de monitoreo", status: "success", latency: "180ms" }
      ],
      result: "Pipeline ejecutado. Amenaza mitigada y reporte estructurado generado en 583ms."
    }
  ]
};
