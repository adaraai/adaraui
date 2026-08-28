import { ArrowRight, Bell } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/client/Header";
import { Footer } from "@/components/client/Footer";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground whitespace-nowrap">
          Coming <span className="text-muted-foreground">Soon</span>
        </h1>

        <div className="mt-10 w-full max-w-sm">
          {submitted ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">You're on the list!</p>
              <button onClick={() => setSubmitted(false)} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                Add another email →
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 bg-card border border-border rounded-full shadow-sm p-1.5 focus-within:border-border transition-all"
            >
              <Bell className="w-4 h-4 text-gray-400 ml-2.5 flex-shrink-0" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none min-w-0"
              />
              <button
                type="submit"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-all duration-150"
              >
                Notify me
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
