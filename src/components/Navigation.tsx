import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          AnimeHub
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/catalog" className="text-sm hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/new" className="text-sm hover:text-primary transition-colors">
            Новинки
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="animate-fade-in">
              <Input 
                type="search"
                placeholder="Поиск аниме..."
                className="search-input w-[200px] md:w-[300px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Link to="/login">
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Войти</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};