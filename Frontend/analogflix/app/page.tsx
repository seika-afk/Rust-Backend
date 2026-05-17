"use client";

import SidePlayer from "@/components/SidePlayer";
import { Birdhouse, Cable, Link, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleSearch = () => {
    console.log("Searched");
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="flex-5 flex flex-row ">
        {/* side bar */}
        <div className="bg-[#383838] h-screen w-19 border-t-3 border-r-3 border-black">
          <div className="flex mt-7   justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#252525] duration-200 hover:text-[#B8B8B8]">
            <Birdhouse onClick={() => router.push("/")} size={30} />
          </div>
          <div className="flex mt-7 justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#252525] duration-200 hover:text-[#B8B8B8]">
            <Cable
              onClick={() =>
                (window.location.href =
                  "https://github.com/seika-afk/AnalogFlix")
              }
              size={30}
            />
          </div>

          <div className="flex mt-7 justify-center items-center cursor-pointer hover:scale-110 transition-all text-[#252525] duration-200 hover:text-[#B8B8B8]">
            <X
              onClick={() => (window.location.href = "https://x.com/srrw2s")}
              size={30}
            />
          </div>
        </div>
        {/*top bar // search bar*/}
        <div className="flex flex-col w-full">
          <div className="bg-[#383838] overflow-hidden flex justify-start items-center w-full h-20  border-t-3 border-b-3 border-black">
            <div className="bg-[#7d7d7d] flex items-center gap-2 ml-5  h-10 w-[50%] border-black border-3  px-4">
              <Search size={18} className="text-[#252525] shrink-0" />
              <input
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Title, author, host, or topic"
                className="bg-transparent outline-none border-none text-[#252525] placeholder-[#252525] w-full text-sm"
              />
            </div>
          </div>
          <div className="bg-[#383838] w-full flex-1  border-black border-b-3"></div>{" "}
        </div>
      </div>
      <div className=" flex-2  bg-[#383838] border-l-3 border-r-3 border-t-3 border-b-3 border-black">
        <SidePlayer />
      </div>
    </div>
  );
}
