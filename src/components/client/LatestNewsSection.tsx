import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NewsPost = {
  date: string;
  isoDate: string;
  title: string;
  href: string;
  label: string;
  image?: string;
  imagePosition?: string;
  gradient: string;
};

const posts: NewsPost[] = [
  {
    date: "Aug 28, 2026",
    isoDate: "2026-08-28",
    title: "Adara Context API is now available",
    href: "/documentation",
    label: "Context API",
    image: "/assets/adara-cta.webp",
    imagePosition: "center top",
    gradient: "from-orange-500/70 via-rose-600/30 to-violet-950/80",
  },
  {
    date: "Aug 14, 2026",
    isoDate: "2026-08-14",
    title: "Twi-7B and Yoruba-Speech models ship to production",
    href: "/products",
    label: "Models",
    gradient: "from-sky-500/60 via-blue-900/50 to-indigo-950/90",
  },
  {
    date: "Jul 30, 2026",
    isoDate: "2026-07-30",
    title: "Corpus expansion across West and East Africa",
    href: "/products",
    label: "Corpus",
    image: "/assets/hero-bg.jpg",
    imagePosition: "center",
    gradient: "from-fuchsia-500/50 via-purple-900/40 to-black/80",
  },
  {
    date: "Jul 12, 2026",
    isoDate: "2026-07-12",
    title: "Security layer blocks USSD fraud patterns in real time",
    href: "/products",
    label: "Security",
    gradient: "from-amber-500/55 via-orange-950/60 to-black/85",
  },
];

function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link to={post.href} className="group flex flex-col gap-3 sm:gap-3.5">
      <div className="relative aspect-[1.32/1] overflow-hidden rounded-2xl bg-muted/10">
        {post.image ? (
          <img
            src={post.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: post.imagePosition ?? "center" }}
          />
        ) : null}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-opacity duration-300",
            post.gradient,
            post.image ? "opacity-85 group-hover:opacity-75" : "opacity-100"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="text-center text-lg font-medium tracking-[-0.02em] text-white sm:text-xl">
            {post.label}
          </span>
        </div>
      </div>

      <time dateTime={post.isoDate} className="text-sm text-muted-foreground">
        {post.date}
      </time>
      <h3 className="text-base font-medium leading-snug tracking-[-0.01em] text-foreground transition-colors group-hover:text-foreground/80 sm:text-[1.05rem]">
        {post.title}
      </h3>
    </Link>
  );
}

export function LatestNewsSection() {
  return (
    <section id="news" className="section-auto bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
          <h2 className="text-2xl font-normal tracking-[-0.02em] text-foreground sm:text-3xl">
            Latest news
          </h2>
          <Link
            to="/resources"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
          {posts.map((post) => (
            <NewsCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
