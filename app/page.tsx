import LoadMore from "../components/LoadMore";
import { fetchAnimeData } from "./action";

async function Home() {
  const initialData = await fetchAnimeData(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 max-w-7xl mx-auto">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {initialData}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
