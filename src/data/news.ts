export type NewsBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type NewsPost = {
  slug: string;
  date: string;
  isoDate: string;
  title: string;
  excerpt: string;
  label: string;
  image?: string;
  imagePosition?: string;
  gradient: string;
  body: NewsBlock[];
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "context-api-now-available",
    date: "Aug 28, 2026",
    isoDate: "2026-08-28",
    title: "Adara Context API is now available",
    excerpt:
      "Translation, speech, and cultural context for developers shipping in African markets  no model training required.",
    label: "Context API",
    image: "/assets/adara-cta.webp",
    imagePosition: "center top",
    gradient: "from-orange-500/70 via-rose-600/30 to-violet-950/80",
    body: [
      {
        type: "p",
        text: "The Africa Context API is live. Teams can now send text or speech and get translation, localization, and culturally grounded responses tuned to African locales — without training or hosting their own models.",
      },
      {
        type: "h2",
        text: "What you can call today",
      },
      {
        type: "p",
        text: "Start with locale-aware translation, speech-to-text for major West and East African languages, and a context layer that keeps product copy, support replies, and assistant answers aligned with local usage. Pass a locale such as sw-KE or tw-GH and a domain such as agriculture, commerce, or public services.",
      },
      {
        type: "p",
        text: "Most integrations take a few lines of code. Rate limits are included on the free tier so you can prototype against real traffic before moving to production quotas.",
      },
      {
        type: "h2",
        text: "Who it is for",
      },
      {
        type: "p",
        text: "African startups that need language infrastructure, global products localizing for the continent, and public-sector teams delivering services in the languages people actually speak. Fine-tuning remains available when you outgrow the defaults.",
      },
      {
        type: "p",
        text: "Create an account, grab an API key, and read the docs. Enterprise and government teams can request dedicated capacity from the quota form.",
      },
    ],
  },
  {
    slug: "twi-7b-yoruba-speech-production",
    date: "Aug 14, 2026",
    isoDate: "2026-08-14",
    title: "Twi-7B and Yoruba-Speech models ship to production",
    excerpt:
      "Two specialized models move out of preview: a 7B Twi language model and a Yoruba speech stack built for noisy, real-world audio.",
    label: "Models",
    gradient: "from-sky-500/60 via-blue-900/50 to-indigo-950/90",
    body: [
      {
        type: "p",
        text: "Twi-7B and Yoruba-Speech are now in production. Both models were trained on ADARA corpus and evaluated with speakers and annotators in Accra and Lagos — not only on held-out Western benchmarks.",
      },
      {
        type: "h2",
        text: "Twi-7B",
      },
      {
        type: "p",
        text: "Twi-7B is a compact language model for Akan (Twi) generation and understanding. It is sized to run behind the Context API and in partner environments where latency and cost matter. It handles everyday registers, market language, and code-switching with English that shows up constantly in Ghanaian products.",
      },
      {
        type: "h2",
        text: "Yoruba-Speech",
      },
      {
        type: "p",
        text: "Yoruba-Speech covers recognition and synthesis for standard Yoruba, with robustness work on street-level noise, overlapping speech, and mobile microphone quality. Tone is preserved in the text pipeline so downstream translation does not flatten meaning.",
      },
      {
        type: "p",
        text: "Both models are available through the Models catalog and the Context API. Swahili-Context remains in the same lineup for East African deployments.",
      },
    ],
  },
  {
    slug: "corpus-expansion-west-east-africa",
    date: "Jul 30, 2026",
    isoDate: "2026-07-30",
    title: "Corpus expansion across West and East Africa",
    excerpt:
      "New annotated speech and text from Ghana, Nigeria, Kenya, and Tanzania — collected with consent-first community partners.",
    label: "Corpus",
    image: "/assets/hero-bg.jpg",
    imagePosition: "center",
    gradient: "from-fuchsia-500/50 via-purple-900/40 to-black/80",
    body: [
      {
        type: "p",
        text: "We expanded the ADARA corpus with new text and speech coverage across West and East Africa. The release focuses on languages and domains that generic web crawls still miss: agriculture advice, mobile money, public health, and everyday customer support.",
      },
      {
        type: "h2",
        text: "How the data is collected",
      },
      {
        type: "p",
        text: "Annotation happens with local researchers and community partners. Contributors are paid, consent is recorded, and sensitive material is excluded or aggregated. We do not scrape private chats or sell partner datasets.",
      },
      {
        type: "p",
        text: "This round adds volume in Twi, Yoruba, Hausa, Swahili, and Luganda, plus parallel English pairs for translation evaluation. Dialect notes travel with each batch so models are not trained as if Accra and Kumasi were the same voice.",
      },
      {
        type: "h2",
        text: "What it unlocks",
      },
      {
        type: "p",
        text: "Better Context API localization, stronger speech models, and a cleaner fine-tuning base for teams that bring their own domain data. If you run an annotation network or hold licensed corpora, we want to hear from you.",
      },
    ],
  },
  {
    slug: "security-layer-ussd-fraud",
    date: "Jul 12, 2026",
    isoDate: "2026-07-12",
    title: "Security layer blocks USSD fraud patterns in real time",
    excerpt:
      "Fraud, scam, and social-engineering detection tuned to African languages and mobile-money flows — not imported English classifiers.",
    label: "Security",
    gradient: "from-amber-500/55 via-orange-950/60 to-black/85",
    body: [
      {
        type: "p",
        text: "ADARA’s security layer now flags USSD and mobile-money fraud patterns in real time. The models are trained on African scam language, not only English phishing templates that miss local social engineering.",
      },
      {
        type: "h2",
        text: "What we detect",
      },
      {
        type: "p",
        text: "Common patterns include fake bank or telco short codes, urgency scripts in Twi, Yoruba, Hausa, and Swahili, and mixed-language lures that copy official mobile-money wording. The layer scores text as it arrives so a product can warn the user or hold a transaction for review.",
      },
      {
        type: "p",
        text: "We designed it for partners who already sit on USSD, WhatsApp, or in-app chat — not as a standalone consumer app. Latency stays low enough for session-based channels.",
      },
      {
        type: "h2",
        text: "Privacy",
      },
      {
        type: "p",
        text: "Payloads can be processed with redaction and short retention. We do not use customer production traffic to train public models unless a contract says otherwise. Talk to us if you need on-premise or in-region inference.",
      },
    ],
  },
  {
    slug: "annotation-network-accra-lagos-nairobi",
    date: "Jun 18, 2026",
    isoDate: "2026-06-18",
    title: "Annotation network grows in Accra, Lagos, and Nairobi",
    excerpt:
      "Paid, consent-first labeling capacity for speech, translation, and cultural review — built with people who speak the languages.",
    label: "Corpus",
    gradient: "from-emerald-500/50 via-teal-900/45 to-black/85",
    body: [
      {
        type: "p",
        text: "ADARA’s annotation network now has active hubs in Accra, Lagos, and Nairobi. Labelers work on speech transcription, translation pairs, and cultural review so models are checked by people who actually use the language.",
      },
      {
        type: "h2",
        text: "Why local review matters",
      },
      {
        type: "p",
        text: "Automatic metrics miss tone, insult, kinship terms, and religious register. Human review catches those before they reach a customer-facing assistant. Reviewers can flag items that should never be in training data.",
      },
      {
        type: "p",
        text: "If you label African language data and want consistent guidelines, tooling, and pay, the labeler dashboard is the on-ramp. Quality leads in each city set the bar for new batches.",
      },
    ],
  },
  {
    slug: "swahili-context-layer",
    date: "Jun 4, 2026",
    isoDate: "2026-06-04",
    title: "Swahili-Context layer for any base model",
    excerpt:
      "A cultural-context adapter that sits in front of your existing LLM so East African users get answers that sound local.",
    label: "Models",
    gradient: "from-indigo-500/55 via-violet-900/50 to-black/85",
    body: [
      {
        type: "p",
        text: "Swahili-Context is a layer you can put in front of an existing large language model. It rewrites requests and responses so East African users get answers that respect local names, institutions, money, and everyday phrasing.",
      },
      {
        type: "h2",
        text: "Use it without replacing your stack",
      },
      {
        type: "p",
        text: "Keep your current model. The context layer handles locale, domain, and retrieval over ADARA corpus before the call, then checks the reply for grounding. It is the fastest path for teams that already standardized on a global LLM but need Africa to stop feeling bolted on.",
      },
      {
        type: "p",
        text: "Swahili-Context ships alongside Twi-7B and Yoruba-Speech in the models catalog and is available through the Context API.",
      },
    ],
  },
];

export const NEWS_LABELS = ["All", ...Array.from(new Set(NEWS_POSTS.map((post) => post.label)))];

export function getNewsPost(slug: string) {
  return NEWS_POSTS.find((post) => post.slug === slug);
}

export function getRelatedNews(slug: string, limit = 3) {
  const current = getNewsPost(slug);
  if (!current) return NEWS_POSTS.slice(0, limit);

  const sameLabel = NEWS_POSTS.filter(
    (post) => post.slug !== slug && post.label === current.label
  );
  const rest = NEWS_POSTS.filter(
    (post) => post.slug !== slug && post.label !== current.label
  );

  return [...sameLabel, ...rest].slice(0, limit);
}
