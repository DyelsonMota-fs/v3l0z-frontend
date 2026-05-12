import type { Language } from "@/types/language";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({
  language,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("pt-BR")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          language === "pt-BR"
            ? "bg-zinc-950 text-white"
            : "text-zinc-500 hover:text-zinc-950"
        }`}
      >
        PT-BR
      </button>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          language === "en"
            ? "bg-zinc-950 text-white"
            : "text-zinc-500 hover:text-zinc-950"
        }`}
      >
        EN
      </button>
    </div>
  );
}
