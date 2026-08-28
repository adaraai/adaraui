import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  AuthShell,
  AuthSocialButtons,
  authInputClassName,
  authSubmitClassName,
  authTextareaClassName,
} from "@/components/client/AuthShell";

export default function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleDemoRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <AuthShell
      title="Build with ADARA"
      description={
        <>
          African language data, models, and context APIs in one platform.
          <br />
          Request pilot access and start building today.
        </>
      }
      alternateLink={{
        prompt: "Already have access?",
        label: "Sign in",
        href: "/login",
      }}
      legal={
        <>
          By continuing, you agree to ADARA&apos;s{" "}
          <Link to="#" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </>
      }
    >
      {submitted ? (
        <div className="rounded-3xl border border-border bg-muted/20 px-6 py-8 text-center">
          <p className="text-lg font-medium text-foreground">Request received</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team will reach out within one business day.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <>
          <AuthSocialButtons />

          <form onSubmit={handleDemoRequest} className="space-y-3">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your work email"
              className={authInputClassName}
            />
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Company name"
              className={authInputClassName}
            />
            <textarea
              id="useCase"
              name="useCase"
              required
              rows={4}
              placeholder="What are you building?"
              className={authTextareaClassName}
            />
            <button type="submit" disabled={isSubmitting} className={authSubmitClassName}>
              {isSubmitting ? "Sending..." : "Continue with email"}
            </button>
          </form>
        </>
      )}
    </AuthShell>
  );
}
