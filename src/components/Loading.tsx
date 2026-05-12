export function Loading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="h-72 animate-pulse rounded-xl border border-zinc-200 bg-white"
        >
          <div className="h-40 rounded-t-xl bg-zinc-200" />

          <div className="space-y-3 p-5">
            <div className="h-5 w-2/3 rounded bg-zinc-200" />
            <div className="h-4 w-full rounded bg-zinc-200" />
            <div className="h-4 w-5/6 rounded bg-zinc-200" />
            <div className="h-4 w-4/6 rounded bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
