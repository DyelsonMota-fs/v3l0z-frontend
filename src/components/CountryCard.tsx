import Image from "next/image";
import Link from "next/link";

import type { Country } from "@/types/country";
import { formatNumber } from "@/utils/formatNumber";

type CountryCardProps = {
  country: Country;
  translations: Record<string, string>;
};

export function CountryCard({ country, translations: t }: CountryCardProps) {
  return (
    <Link
      href={`/country/${country.name.common}`}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt || `Bandeira de ${country.name.common}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold text-zinc-950">
            {country.name.common}
          </h2>

          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
            {country.region}
          </p>
        </div>

        <div className="space-y-2 text-sm text-zinc-600">
          <div className="flex items-center justify-between gap-4">
            <span>{t.population}</span>
            <strong className="font-semibold text-zinc-900">
              {formatNumber(country.population)}
            </strong>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span>{t.subregion}</span>
            <strong className="line-clamp-1 text-right font-semibold text-zinc-900">
              {country.subregion || t.notInformed}
            </strong>
          </div>
        </div>

        <div className="pt-2 text-sm font-medium text-zinc-950">
          {t.viewDetails} →
        </div>
      </div>
    </Link>
  );
}
