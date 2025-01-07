import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      <div className="video-wrapper">
        <iframe
          src={videoUrl}
          title={title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
          <div className="text-sm font-medium">{title}</div>
        </div>
      </div>
    </div>
  );
};