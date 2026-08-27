# ADARA AI Lab

Teaching AI to understand Africa — in its languages, its logic, and its lived reality.

Data and tools that make AI understand Africa.

**Live:** [https://adaraui.vercel.app](https://adaraui.vercel.app)

## What we build

ADARA AI Lab builds the foundational data, models, and tools that make artificial intelligence fluent in African context — language, culture, commerce, and everyday life.

Most large AI systems are trained on Western data. That means they mistranslate African languages, miss local idioms, and fail African users in subtle but constant ways. We close that gap.

### Product layers

1. **Data & Corpus** — African language corpora, cultural context datasets, and a distributed annotation network
2. **Models** — Fine-tuned LLMs and speech models for African languages, plus a cultural-context layer for any base model
3. **Africa Context API** — Developer tools for translation, localization, and Africa-aware responses
4. **Applied Products** — Flagship tools (e.g. WhatsApp assistants, voice-first agriculture advice) that prove value and feed the data flywheel

Also in scope: **AI security** (fraud/scam/deepfake detection tuned to African languages) and **ethical data governance** (consent-first, community benefit, local residency).

## Who it's for

- African startups needing language/context infrastructure
- Global tech companies localizing for African markets
- Governments & NGOs delivering services in local languages
- Developers integrating Africa-aware AI via API

## Tech stack

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS** + **shadcn/ui**
- **React Router** + **TanStack Query**

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/AI-Factory-AI/adaraui.git
cd adaraui
npm install
npm run dev
```

App runs at `http://localhost:8080` (or the port Vite prints).

### Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Project structure

```
adaraui/
├── src/
│   ├── components/
│   │   ├── client/          # Landing page (Hero, Features, Footer, ComingSoon…)
│   │   ├── ui/              # shadcn/ui primitives
│   │   └── ThemeProvider.tsx
│   ├── pages/               # Routes (home, auth, dashboards, coming soon)
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Deploy

Hosted on Vercel:

```bash
npx vercel --prod
```

Production URL: **https://adaraui.vercel.app**

## Mission

> A world where AI understands and serves Africans as well as it serves anyone else — in their own languages and on their own terms.

## License

MIT — see [LICENSE](LICENSE) if present.

---

**ADARA AI Lab** — data and tools that make AI understand Africa.
