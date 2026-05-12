import { CountriesExplorer } from "@/components/CountriesExplorer";
import { Header } from "@/components/Header";
import { getAllCountries } from "@/services/countriesApi";

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Lista de países
          </h2>

          <p className="mt-2 max-w-2xl text-zinc-600">
            Busque países pelo nome e filtre por sub-região.
          </p>
        </div>

        <CountriesExplorer countries={countries} />
      </section>
    </main>
  );
}
