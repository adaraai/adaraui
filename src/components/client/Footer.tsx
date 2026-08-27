import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Partner with ADARA
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Teach AI to
                <br />
                <span className="text-gray-500">understand Africa.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-all duration-150"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-all duration-150"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="inline-block mb-4 select-none">
              <span className="text-lg font-bold tracking-tight text-white/80" style={{ letterSpacing: "-0.04em", fontFamily: "'DM Sans', sans-serif" }}>
                ADARA AI Lab
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Teaching AI to understand Africa — in its languages, its logic, and its lived reality.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Platform
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Enterprise", href: "/enterprise" },
                { label: "Government", href: "/government" },
                { label: "Customers", href: "/customers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Resources
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Documentation", href: "/documentation" },
                { label: "API Reference", href: "/api" },
                { label: "Support", href: "/support" },
                { label: "Learn", href: "/learn" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@adara.ai"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@adara.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+233240027151"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +(233) 240 027 151
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-500">24/7 support available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {currentYear} ADARA AI Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
