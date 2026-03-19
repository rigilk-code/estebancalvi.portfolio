import { createContext, useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import en from "@/data/en.json";
import es from "@/data/es.json";
import type { ContentBlock } from "@/data/caseStudies";

type Lang = "en" | "es";

interface CaseData {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  body: ContentBlock[];
}

interface Translations extends Omit<typeof en, "cases"> {
  cases: CaseData[];
}

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  switchLang: (lang: Lang) => void;
  localePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function castTranslations(raw: typeof en): Translations {
  return {
    ...raw,
    cases: raw.cases.map((c) => ({
      ...c,
      body: c.body as ContentBlock[],
    })),
  };
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Lang = location.pathname.startsWith("/es") ? "es" : "en";
  const t = lang === "es" ? castTranslations(es) : castTranslations(en);

  const switchLang = (newLang: Lang) => {
    const path = location.pathname;
    const hash = location.hash;
    if (newLang === "es") {
      const clean = path.replace(/^\/es/, "") || "/";
      navigate(`/es${clean === "/" ? "" : clean}${hash}`);
    } else {
      const clean = path.replace(/^\/es/, "") || "/";
      navigate(`${clean}${hash}`);
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
