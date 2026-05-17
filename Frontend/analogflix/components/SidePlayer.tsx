import { Ghost, GhostIcon, Play } from "lucide-react";

const SidePlayer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top bar */}
      <div className="bg-[#383838] text-[#b8b8b8] flex items-center justify-center w-full h-19.5 border-b-3 border-black flex items-center px-6">
        <Ghost size={30} />

        <p className="text-3xl font-bold"> LIMINAL </p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start mt-6 px-4">
        <div className="w-[320px] h-[180px] overflow-hidden">
          <img
            src="wallp.jpg"
            className="w-full border-3 border-black h-full object-cover object-center"
          />
        </div>

        <button className=" cursor-pointer w-[320px] mt-3 py-3 bg-[#252525] text-white font-semibold flex items-center justify-center gap-2  hover:bg-[#B8B8B8] hover:text-[#383838] transition">
          <Play size={20} />
          Play Sample
        </button>

        <div className="w-[320px] mt-2 flex border border-gray-300 ">
          <button className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#B8B8B8] hover:text-[#383838] transition border-r border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 7l-4-4-4 4M12 3v13"
              />
            </svg>
            Channel
          </button>
          <button className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#B8B8B8] hover:text-[#383838] transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16l-4-4h3V4h2v8h3l-4 4zM5 20h14v-2H5v2z"
              />
            </svg>
            Download
          </button>
        </div>

        <hr className="w-[320px] mt-4 border-gray-300" />

        <div className="w-[320px] mt-3">
          <h1 className="text-md font-semibold text-[#b8b8b8] mb-1">
            Description
          </h1>
          <p className="text-sm text-[#A3A3A3] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SidePlayer;
