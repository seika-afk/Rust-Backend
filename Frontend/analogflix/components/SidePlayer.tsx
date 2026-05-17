import { Ghost, GhostIcon, Play } from "lucide-react";

const SidePlayer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top bar */}
      <div className="bg-[#1D1B20] text-[#E6E1E5] flex items-center justify-center w-full h-19.5 border-b-3 border-[#49454F] flex items-center px-6">
        <Ghost size={30} />

        <p className="text-3xl font-bold"> LIMINAL </p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start mt-6 px-4">
        <div className="w-[320px] h-[180px] overflow-hidden">
          <img
            src="wallp.jpg"
            className="w-full border-3 border-[#49454F] h-full object-cover object-center"
          />
        </div>

        <button className=" cursor-pointer w-[320px] mt-3 py-3 bg-[#2A2730] text-[#E6E1E5] font-semibold flex items-center justify-center gap-2  hover:bg-[#CFBDFF] hover:scale-102 hover:text-[#1D1B20] transition">
          <Play size={20} />
          Play Sample
        </button>

        <div className="w-[320px] mt-2 flex border border-[#49454F] ">
          <button className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#CFBDFF] hover:text-[#1D1B20] hover:scale-102 transition border-r border-[#49454F]">
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
          <button className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#CFBDFF] hover:text-[#1D1B20] hover:scale-102 transition">
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

        <hr className="w-[320px] mt-4 border-[#49454F]" />

        <div className="w-[320px] mt-3">
          <h1 className="text-md font-semibold text-[#E6E1E5] mb-1">
            Description
          </h1>
          <p className="text-sm text-[#CAC4D0] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SidePlayer;
