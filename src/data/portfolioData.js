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
      title: "Aetherius",
      subtitle: "Motor distribuido de orquestación de agentes autónomos",
      status: "En desarrollo",
      statusColor: "#10b981",
      image: "/projects/agent_orchestrator.jpg",
      description: "Plataforma escalable de orquestación donde agentes inteligentes especializados (Investigación, Clasificación, Validación y Ejecución) colaboran de forma sincrónica y asincrónica para resolver tareas complejas de negocio.",
      highlights: [
        "Arquitectura de nodos basados en grafos dirigidos (DAGs) con paralelización de subagentes",
        "Sistema de memoria híbrida a corto y largo plazo con bases de datos vectoriales",
        "Mecanismo Human-in-the-loop para autorizar transacciones de riesgo antes de su ejecución",
        "Monitor en tiempo real de consumo de tokens, latencia de inferencia y tasa de éxito"
      ],
      metrics: [
        { label: "Latencia", value: "1.8s avg" },
        { label: "Ejecución", value: "Multi-Agente" },
        { label: "Guardrails", value: "100% Determinista" }
      ],
      tags: ["python", "typescript", "langchain", "fastapi", "redis-vector", "docker", "sse-streaming"]
    },
    {
      id: "proj-2",
      title: "Core FCI",
      subtitle: "Engine transaccional bancario de alta disponibilidad",
      status: "Publicado",
      statusColor: "#06b6d4",
      image: "/projects/fintech_core.jpg",
      description: "Sistema financiero crítico para la suscripción, rescate y cálculo de rendimientos diarios de Fondos Comunes de Inversión (FCI), procesando miles de transacciones por segundo con cero tolerancia a inconsistencias contables.",
      highlights: [
        "Procesamiento de eventos en tiempo real con Apache Kafka y semántica 'At-Least-Once' idempotente",
        "Caché distribuido con Redis para cotizaciones de cuotapartes con respuestas sub-milisegundo",
        "Validaciones normativas financieras automatizadas contra límites operativos de usuarios y scoring bancario",
        "Integración resiliente con el core bancario mediante Circuit Breakers y Retry Policies con Dead Letter Queues"
      ],
      metrics: [
        { label: "Throughput", value: "18.5k msg/s" },
        { label: "Latencia", value: "2.1ms" },
        { label: "Disponibilidad", value: "99.98%" }
      ],
      tags: ["nestjs", "typescript", "apache-kafka", "oracle-db", "redis", "openshift", "event-driven"]
    },
    {
      id: "proj-3",
      title: "Sentinel Gate",
      subtitle: "Gateway perimetral mTLS y observabilidad distribuida",
      status: "Publicado",
      statusColor: "#06b6d4",
      image: "/projects/banking_gateway.jpg",
      description: "Gateway perimetral diseñado para gobernar, proteger y monitorizar la comunicación entre microservicios bancarios y clientes externos, implementando autenticación mutua TLS (Zero-Trust) y rate limiting adaptativo.",
      highlights: [
        "Autenticación mTLS y rotación de certificados criptográficos con auditoría en tiempo real",
        "Rate limiting distribuido basado en Redis con algoritmos Token Bucket y Leaky Bucket",
        "Trazabilidad distribuida de punta a punta con correlación de Request IDs e instrumentación OpenTelemetry",
        "Defensa proactiva contra inyección de datos y ataques DoS con fallback automático a réplicas saludables"
      ],
      metrics: [
        { label: "Tráfico Diario", value: "87.2M Req" },
        { label: "Tasa de Error", value: "0.01%" },
        { label: "Seguridad", value: "mTLS Zero-Trust" }
      ],
      tags: ["node.js", "typescript", "gcp", "docker", "redis-cluster", "mtls", "opentelemetry"]
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
