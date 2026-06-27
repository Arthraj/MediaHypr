export default function Topbar() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Discover</h1>

        <p className="text-zinc-400">Trending songs</p>
      </div>

      <input placeholder="Search..." className="rounded-lg bg-zinc-900 px-4 py-2 outline-none" />
    </div>
  );
}
