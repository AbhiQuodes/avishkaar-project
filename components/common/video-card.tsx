import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  url: string;
}

export default function VideoCard({ title, url }: VideoCardProps) {
  // Check if the URL is a YouTube link
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");

  // Extract the YouTube video ID from the URL (for embedding purposes)
  const videoId = isYouTube
    ? url.split("v=")[1]?.split("&")[0] || url.split("/").pop()
    : null;

  // Generate the embed URL for YouTube
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        {isYouTube ? (
          // Embed YouTube video using iframe
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        ) : (
          // For local .mp4 video files, use the video tag
          <video className="rounded-lg w-full" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </CardContent>
    </Card>
  );
}
