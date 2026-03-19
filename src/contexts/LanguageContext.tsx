import { createContext, useContext, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import en from "@/data/en.json";
import es from "@/data/es.json";

type Lang = "en" | "es";
type Translations = typeof en;

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  switchLang: (lang: Lang) => void;
  localePath: (path: string) => string;
}

const translations: Record<Lang, Translations> = { en, es };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { lang: langParam } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Lang = langParam === "es" ? "es" : "en";
  const t = translations[lang];

  const switchLang = (newLang: Lang) => {
    const currentPath = location.pathname + location.hash;
    if (newLang === "es") {
      // Strip leading /es/ if present, then add it
      const clean = currentPath.replace(/^\/es/, "") || "/";
      navigate(`/es${clean === "/" ? "" : clean}`);
    } else {
      // Strip /es prefix
      const clean = currentPath.replace(/^\/es/, "") || "/";
      navigate(clean);
    }
  };

  const localePath = (path: string) => {
    if (lang === "es") {
      return `/es${path === "/" ? "" : path}`;
    }
    return path;
  };

  const value = useMemo(
    () => ({ lang, t, switchLang, localePath }),
    [lang, location.pathname]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
