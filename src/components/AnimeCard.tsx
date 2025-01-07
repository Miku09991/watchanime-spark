import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  episodes: number;
  rating: number;
}

export const AnimeCard = ({ id, title, image, episodes, rating }: AnimeCardProps) => {
  return (
    <Link to={`/anime/${id}`} className="anime-card group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-4">
            <Button variant="secondary" className="w-full gap-2">
              <Play className="w-4 h-4" />
              Смотреть
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{episodes} эп.</span>
          <span>★ {rating}</span>
        </div>
      </div>
    </Link>
  );
};