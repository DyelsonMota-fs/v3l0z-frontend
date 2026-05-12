import Image from "next/image";
import Link from "next/link";

import { getCountryByName } from "@/services/countriesApi";
import { formatNumber } from "@/utils/formatNumber";

type CountryDetailsPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function CountryDetailsPage({
  params,
}: CountryDetailsPageProps) {
  const { name } = await params;

  const countries = await getCountryByName(decodeURIComponent(name));
  const country = countries[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Não informado";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .join(", ")
    : "Não informado";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f4f4f5,_#fafafa_45%,_#ffffff)]">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-flex h-11 items-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-100"
        >
          ← Voltar para países
        </Link>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-80 bg-zinc-100 lg:min-h-[520px]">
              <Image
                src={country.flags.svg}
                alt={country.flags.alt || `Bandeira de ${country.name.common}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                {country.region}
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-950">
                {country.name.common}
              </h1>

              <p className="mt-2 text-base leading-7 text-zinc-500">
                {country.name.official}
              </p>

              <div className="mt-8 grid gap-4">
                <InfoItem
                  label="População"
                  value={formatNumber(country.population)}
                />

                <InfoItem
                  label="Sub-região"
                  value={country.subregion || "Não informada"}
                />

                <InfoItem
                  label="Capital"
                  value={country.capital?.join(", ") || "Não informada"}
                />

                <InfoItem
                  label="Área"
                  value={
                    country.area
                      ? `${formatNumber(country.area)} km²`
                      : "Não informada"
                  }
                />

                <InfoItem label="Idiomas" value={languages} />

                <InfoItem label="Moedas" value={currencies} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium leading-6 text-zinc-900">
        {value}
      </p>
    </div>
  );
}
