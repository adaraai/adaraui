import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AuthShell,
  AuthSocialButtons,
  authInputClassName,
  authSubmitClassName,
} from "@/components/client/AuthShell";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <AuthShell
      title="Sign in to ADARA"
      description={
        <>
          Access your workspace, API keys, and project dashboards.
          <br />
          Sign in to continue building with African context.
        </>
      }
      alternateLink={{
        prompt: "Don't have an account?",
        label: "Get a demo",
        href: "/signup",
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
      <AuthSocialButtons />

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className={authInputClassName}
        />
        <input
          id="password"
          type="password"
          required
          placeholder="Enter your password"
          className={authInputClassName}
        />
        <button type="submit" className={authSubmitClassName}>
          Continue with email
        </button>
      </form>
    </AuthShell>
  );
}
