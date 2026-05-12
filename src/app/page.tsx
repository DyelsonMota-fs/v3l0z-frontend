import { CountriesExplorer } from "@/components/CountriesExplorer";
import { Header } from "@/components/Header";
import { getAllCountries } from "@/services/countriesApi";

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f4f4f5,_#fafafa_45%,_#ffffff)]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Explore o mundo
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Encontre informações sobre países em poucos segundos.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Consulte bandeiras, população, continente e sub-região. Use a busca
            por nome ou filtre os países por sub-região.
          </p>
        </div>

        <CountriesExplorer countries={countries} />
      </section>
    </main>
  );
}
