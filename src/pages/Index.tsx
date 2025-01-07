import { Navigation } from "@/components/Navigation";
import { AnimeCard } from "@/components/AnimeCard";

const featuredAnime = [
  {
    id: "1",
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format",
    episodes: 26,
    rating: 4.8
  },
  {
    id: "2",
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format",
    episodes: 87,
    rating: 4.9
  },
  {
    id: "3",
    title: "One Punch Man",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format",
    episodes: 24,
    rating: 4.7
  },
  {
    id: "4",
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format",
    episodes: 113,
    rating: 4.6
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Популярное аниме</h2>
            <p className="text-muted-foreground">
              Самые популярные аниме этого сезона
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredAnime.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;