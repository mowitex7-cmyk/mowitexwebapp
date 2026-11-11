import { Link } from "react-router";
import mowitexLogoImg from "../assets/8d794ae00286f4d1ef4c228766965351d81ecb09.png";
export const Footer = () => {
  const footerSections = [
    {
      title: "PRODUCTS",
      links: [
        { label: "Money transfer", href: "/send-money" },
        { label: "Virtual cards", href: "/cards" },
        { label: "Currency exchange", href: "/exchange" },
        { label: "Foreign accounts", href: "/accounts" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "LIFESTYLE",
      links: [
        { label: "For freelancers", href: "/freelancers" },
        { label: "For travellers", href: "/travellers" },
        { label: "Join our community", href: "/community" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms of service", href: "/terms" },
        { label: "Acceptable use policy", href: "/acceptable-use" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Video tutorials", href: "/tutorials" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];
  return (
    <footer className="bg-slate-50 dark:bg-[#0B1120] text-gray-900 dark:text-white py-20 relative overflow-hidden font-sans transition-colors duration-300">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img
              src={mowitexLogoImg}
              alt="Mowitex Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Mowitex
            </span>
          </Link>
          <p className="text-gray-600 dark:text-white/60 text-center max-w-lg text-lg">
            Designed globally for everyone. Receive, send, and exchange
            currencies with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {footerSections.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white dark:bg-[#131b2e] rounded-3xl p-8 border border-orange-200 dark:border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.05)] dark:shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] hover:border-orange-400/50 dark:hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-orange-500 dark:text-[#FF9F43] font-bold text-sm tracking-wider uppercase mb-6 relative z-10">
                {item.title}
              </h3>
              <ul className="space-y-4 relative z-10">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-white/40 text-sm">
            © {new Date().getFullYear()} Mowitex. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
