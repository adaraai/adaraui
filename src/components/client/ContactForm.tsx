import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const contactPaths = [
  {
    title: "General",
    description: "Questions about ADARA, our team, or working together.",
    href: "mailto:info@adara.ai?subject=General%20inquiry",
    external: true,
  },
  {
    title: "API & product",
    description: "Technical questions, API access, and integration help.",
    href: "/documentation",
    external: false,
  },
  {
    title: "Press",
    description: "Media inquiries, speaking requests, and brand assets.",
    href: "mailto:info@adara.ai?subject=Press%20inquiry",
    external: true,
  },
  {
    title: "Support",
    description: "Help with billing, access, or an existing integration.",
    href: "/support",
    external: false,
  },
];

const inputClassName =
  "h-12 w-full rounded-full border border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/25 focus:outline-none focus:ring-0";

const textareaClassName =
  "min-h-[140px] w-full resize-y rounded-3xl border border-border bg-background px-5 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/25 focus:outline-none focus:ring-0";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-auto bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.03em] text-foreground">
          Get in touch
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Questions, feedback, or support — we typically reply within 24 hours.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/50 bg-border/40 sm:grid-cols-2">
          {contactPaths.map((path) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-normal text-foreground">{path.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                </div>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {path.description}
                </p>
              </>
            );

            const className =
              "group block min-h-[5.5rem] bg-background p-5 transition-colors hover:bg-muted/20 sm:p-7";

            return path.external ? (
              <a key={path.title} href={path.href} className={className}>
                {inner}
              </a>
            ) : (
              <Link key={path.title} to={path.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 border-t border-border/50 pt-10 sm:mt-16 sm:pt-16">
          <h3 className="text-2xl font-normal tracking-[-0.02em] text-foreground sm:text-3xl">
            Contact us
          </h3>

          {submitted ? (
            <div className="mt-10 max-w-xl rounded-lg border border-border bg-muted/20 px-6 py-8">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Received
              </p>
              <p className="mt-3 text-lg text-foreground">Thanks. We&apos;ll reply within 24 hours.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 text-base text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-2xl space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-base text-foreground">
                    First name <span className="text-muted-foreground">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-base text-foreground">
                    Last name <span className="text-muted-foreground">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base text-foreground">
                  Work email <span className="text-muted-foreground">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-base text-foreground">
                  Company name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base text-foreground">
                  How can we help? <span className="text-muted-foreground">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={textareaClassName}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-foreground/20 px-8 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
