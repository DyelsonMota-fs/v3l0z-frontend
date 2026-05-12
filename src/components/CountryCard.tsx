import Image from "next/image";
import Link from "next/link";

import type { Country } from "@/types/country";
import { formatNumber } from "@/utils/formatNumber";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/country/${country.name.common}`}
      className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-40 w-full bg-zinc-100">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt || `Bandeira de ${country.name.common}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-lg font-semibold text-zinc-900">
          {country.name.common}
        </h2>

        <div className="space-y-1 text-sm text-zinc-600">
          <p>
            <strong className="text-zinc-800">População:</strong>{" "}
            {formatNumber(country.population)}
          </p>

          <p>
            <strong className="text-zinc-800">Continente:</strong>{" "}
            {country.region}
          </p>

          <p>
            <strong className="text-zinc-800">Sub-região:</strong>{" "}
            {country.subregion || "Não informada"}
          </p>
        </div>
      </div>
    </Link>
  );
}
