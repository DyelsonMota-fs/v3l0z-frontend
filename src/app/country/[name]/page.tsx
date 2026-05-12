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

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
        >
          Voltar
        </Link>

        <div className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-zinc-100">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt || `Bandeira de ${country.name.common}`}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-zinc-900">
              {country.name.common}
            </h1>

            <p className="mt-2 text-zinc-500">{country.name.official}</p>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <p>
                <strong className="text-zinc-900">População:</strong>{" "}
                {formatNumber(country.population)}
              </p>

              <p>
                <strong className="text-zinc-900">Continente:</strong>{" "}
                {country.region}
              </p>

              <p>
                <strong className="text-zinc-900">Sub-região:</strong>{" "}
                {country.subregion || "Não informada"}
              </p>

              <p>
                <strong className="text-zinc-900">Capital:</strong>{" "}
                {country.capital?.join(", ") || "Não informada"}
              </p>

              <p>
                <strong className="text-zinc-900">Área:</strong>{" "}
                {country.area
                  ? `${formatNumber(country.area)} km²`
                  : "Não informada"}
              </p>

              <p>
                <strong className="text-zinc-900">Idiomas:</strong>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "Não informado"}
              </p>

              <p>
                <strong className="text-zinc-900">Moedas:</strong>{" "}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`,
                      )
                      .join(", ")
                  : "Não informado"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
