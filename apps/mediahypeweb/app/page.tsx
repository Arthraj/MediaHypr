import Sidebar from "../components/Sidebar";
import SongGrid from "../components/SongGrid";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <main className="flex h-screen bg-transparent pb-12 text-white">

      <Sidebar />

      <section className="flex-1 bg-transparent overflow-auto p-8">
        <Topbar />
        <SongGrid />
      </section>


    </main>
  );
}
