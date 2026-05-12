export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">Countries App</h1>

          <p className="mt-1 text-sm text-zinc-500">
            Explore países, populações, continentes e sub-regiões.
          </p>
        </div>
      </div>
    </header>
  );
}
