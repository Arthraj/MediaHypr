export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold">Mediahypr</h1>

      <div className="mt-8 space-y-4">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Library</div>
        <div className="cursor-pointer">Liked Songs</div>
      </div>
    </aside>
  );
}
