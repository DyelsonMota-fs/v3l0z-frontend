export function Header() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
            Front-end Challenge
          </span>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950">
            Countries Explorer
          </h1>

          <p className="mt-1 max-w-xl text-sm text-zinc-500">
            Explore países, consulte informações essenciais e filtre por
            sub-região de forma simples e rápida.
          </p>
        </div>
      </div>
    </header>
  );
}
