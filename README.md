# Lucas Güimil — Portfolio (React + Vite)

Portfolio profesional interactivo y de alto impacto desarrollado con **React**, **Vite** y **Modern Vanilla CSS**. Diseñado con una estética Obsidian Dark Mode, ambient glows, glassmorphism e interactividad en tiempo real.

---

## 🚀 Características Principales

- **Arquitectura React 19 + Vite**: Carga ultrarrápida (HMR instantáneo) y estructura modular basada en componentes.
- **Estética High-End Developer**:
  - Paleta Obsidian (`#09090b`), acentos en esmeralda, cian y violeta neón.
  - Tipografías modernas: **Plus Jakarta Sans** (cuerpo e interfaces) y **JetBrains Mono** (código y terminal).
  - Efectos de desenfoque (`backdrop-filter: blur`), gradientes suaves y ambient glows dinámicos.
- **Terminal Interactivo en Hero**: Consola interactiva que simula comandos de estado y stack de producción en vivo.
- **Simulador Interactivo de Pipelines (Live Demo)**:
  - Permite a reclutadores y líderes de ingeniería ejecutar flujos reales en tiempo real (ej. *Suscripción a Fondos FCI Banco Santander* o *Pipeline de Agente Autónomo con Tool Calling*).
  - Visualización paso a paso de cada nodo, latencias en milisegundos y resultado de producción.
- **Showcase de Proyectos con Modal Deep Dive**:
  - Filtros por categoría: *Agentes de IA*, *FinTech & Core Bancario*, *Cloud & Gateways*.
  - Modales con arquitectura detallada, métricas de producción (Throughput, Latency, SLA) y capturas en alta resolución.
- **Línea de Tiempo Profesional**:
  - Trayectoria detallada en **Banco Santander** (células FCI & Cross-Product) y **Consultoría Global S.A.** (desarrollo con agentes de IA).
- **Matriz Técnica con Buscador en Vivo**:
  - Búsqueda interactiva de tecnologías (ej. *NestJS, Kafka, LangChain, Python*).
  - Niveles de experiencia y notas de aplicación práctica.
- **Contacto Directo & Microinteracciones**:
  - Copia rápida de email al portapapeles con toast animado y efecto de confeti (`canvas-confetti`).
  - Formulario de contacto con enlace directo y validación.

---

## 🛠️ Tecnologías Empleadas

- **Frontend Core**: React 19, JavaScript (ESModules)
- **Bundler & Tooling**: Vite 8
- **Iconografía**: `lucide-react`
- **Animaciones & Microinteracciones**: CSS Keyframes + `canvas-confetti`
- **Estilos**: Vanilla CSS con variables personalizadas (sin dependencias pesadas de CSS)

---

## 💻 Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

3. Compilar para producción:
   ```bash
   npm run build
   ```
