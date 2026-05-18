"use client";

import SidePlayer from "@/components/SidePlayer";
import VidCard from "@/components/VidCard";
import { Birdhouse, Cable, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type TrendingVideo = {
  id?: {
    videoId?: string;
  };
  snippet: {
    title?: string;
    description?: string;
    channelTitle?: string;
    publishedAt?: string;
    thumbnails?: {
      default?: {
        url?: string;
      };
    };
  };
};

export default function Home() {
  const router = useRouter();
  const [videos, setVideos] = useState<TrendingVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<TrendingVideo | null>(
    null,
  );
  const [search, setSearch] = useState();
  async function fetchVideos() {
    const res = await fetch("http://localhost:8000/api/trending");
    const data = await res.json();
    const items = data.items ?? [];
    setVideos(items);
    setSelectedVideo(items[0] ?? null);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchVideos();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const res = await fetch(
      `http://localhost:8000/api/search?query=${encodeURIComponent(`analog horror ${search}`)}`,
    );
    const data = await res.json();
    const items = data.items ?? [];
    setVideos(items);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="flex-5 flex flex-row ">
        <div className="bg-[#1D1B20] h-screen w-19 border-t-3 border-r-3 border-[#49454F]">
          <div className="flex mt-7   justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#E6E1E5] duration-200 hover:text-[#CFBDFF]">
            <Birdhouse onClick={() => window.location.reload()} size={30} />
          </div>
          <div className="flex mt-7 justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#E6E1E5] duration-200 hover:text-[#CFBDFF]">
            <Cable
              onClick={() =>
                (window.location.href =
                  "https://github.com/seika-afk/AnalogFlix")
              }
              size={30}
            />
          </div>

          <div className="flex mt-7 justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#E6E1E5] duration-200 hover:text-[#CFBDFF]">
            <X
              onClick={() => (window.location.href = "https://x.com/srrw2s")}
              size={30}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="bg-[#1D1B20] overflow-hidden flex justify-start items-center w-full h-20  border-t-3 border-b-3 border-[#49454F]">
            <div className="bg-[#2A2730] flex items-center gap-2 ml-5  h-10 w-[50%] border-[#49454F] border-3  px-4">
              <Search size={18} className="text-[#E6E1E5] shrink-0" />
              <input
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleSearch(e);
                  }
                }}
                placeholder="Title, Channel , Topic ..."
                className="bg-transparent outline-none border-none text-[#E6E1E5] placeholder-[#CAC4D0] w-full text-sm"
              />
            </div>
          </div>
          <div className="bg-[#1D1B20] flex flex-col p-5 text-white w-full flex-1 overflow-y-auto min-h-0 border-[#49454F] border-b-3">
            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8 p-5 items-start">
              {!videos.length ? (
                <p>Loading...</p>
              ) : (
                videos.map((video) => (
                  <VidCard
                    key={video.id?.videoId}
                    thumbnail={video.snippet.thumbnails?.default?.url}
                    videoName={video.snippet.title}
                    channelName={video.snippet.channelTitle}
                    releasedAt={
                      video.snippet.publishedAt
                        ? new Date(
                            video.snippet.publishedAt,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Unknown date"
                    }
                    onClick={() => handlePlaying(video)}
                  />
                ))
              )}
            </div>
          </div>{" "}
        </div>
      </div>
      <div className=" flex-2  bg-[#1D1B20] border-l-3 border-r-3 border-t-3 border-b-3 border-[#49454F]">
        <SidePlayer video={selectedVideo} />
      </div>
    </div>
  );

  function handlePlaying(video: TrendingVideo) {
    setSelectedVideo(video);
  }
}
