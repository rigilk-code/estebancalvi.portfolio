import { createContext, useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import en from "@/data/en.json";
import es from "@/data/es.json";
import pt from "@/data/pt.json";
import type { ContentBlock } from "@/data/caseStudies";

export type Lang = "en" | "es" | "pt";

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

  const seg = location.pathname.split("/")[1];
  const lang: Lang = seg === "es" || seg === "pt" ? seg : "en";
  const t = castTranslations(({ en, es, pt } as Record<Lang, typeof en>)[lang]);

  const switchLang = (newLang: Lang) => {
    const rest = location.pathname.replace(/^\/(en|es|pt)(?=\/|$)/, "");
    navigate(`/${newLang}${rest}${location.hash}`);
  };

  const localePath = (path: string) => `/${lang}${path === "/" ? "" : path}`;

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
