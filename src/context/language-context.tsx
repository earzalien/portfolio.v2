// context/language-context.tsx
import { useEffect, useState, createContext, useContext } from "react";

type Language = "EN" | "FR" | "ES";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, _setLanguage] = useState<Language>("EN");

  const setLanguage = (lang: Language) => {
    _setLanguage(lang);
    window.localStorage.setItem("language", lang);

    document.documentElement.classList.remove("EN", "FR", "ES");
    document.documentElement.classList.add(lang);

    // Mettre à jour l'URL sans recharger
    const url = new URL(window.location.href);
    if (lang === "FR") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang.toLowerCase()); // en, es
    }
    window.history.replaceState({}, "", url);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawLang = params.get("lang"); // ex: "fr", "en", "es"

    if (rawLang) {
      const normalized = rawLang.toUpperCase() as Language;
      if (["EN", "FR", "ES"].includes(normalized)) {
        setLanguage(normalized);
        return;
      }
    }

    const savedLang = window.localStorage.getItem("language") as Language | null;
    if (savedLang && ["EN", "FR", "ES"].includes(savedLang)) {
      setLanguage(savedLang);
      return;
    }

    setLanguage("FR");
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
