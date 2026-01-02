// Footer.tsx
import React from "react";
import { useLanguage } from "../context/language-context";
import { FooterLinks } from "../assets/lib/data";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-slate-200 mt-16 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Kévin Ressegaire</p>
      <div className="flex gap-4">
        {FooterLinks.map((item, index) => {
          const label =
            language === "FR"
              ? item.fr
              : language === "ES"
              ? item.es
              : item.en;

          // On dirige vers les vraies routes, pas vers des ancres
          const path =
            item.hash === "#imprint"
              ? "/imprint"
              : item.hash === "#privacy"
              ? "/privacy"
              : "/";

          return (
            <Link
              key={index}
              to={path}
              className="hover:text-[--orange] underline-offset-4 hover:underline"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
