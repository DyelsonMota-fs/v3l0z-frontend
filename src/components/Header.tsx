export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
            CE
          </div>

          <div>
            <h1 className="text-sm font-semibold text-zinc-950">
              Countries Explorer
            </h1>

            <p className="text-xs text-zinc-500">Front-end Challenge</p>
          </div>
        </div>

        <span className="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm sm:inline-flex">
          React • Next.js • TypeScript
        </span>
      </div>
    </header>
  );
}
