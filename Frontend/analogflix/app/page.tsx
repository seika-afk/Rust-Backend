"use client";

import SidePlayer from "@/components/SidePlayer";

export default function Home() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="flex-5 flex flex-row bg-red-500">
        {/* side bar */}
        <div className="bg-yellow-300 h-screen w-19 border-t-3 border-r-3 border-black"></div>
        {/*top bar // search bar*/}
        <div className="flex flex-col w-full">
          <div className="bg-green-400 w-full h-20  border-t-3 border-b-3 border-black"></div>
          <div className="bg-pink-200 w-full flex-1  border-black border-b-3"></div>{" "}
          {/* flex-1 fills remaining */}
        </div>
      </div>
      <div className="bg-blue-500  flex-2  border-l-3 border-r-3 border-t-3 border-b-3 border-black">
        <SidePlayer />
      </div>
    </div>
  );
}
