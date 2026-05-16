const SidePlayer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top bar */}
      <div className="bg-green-400 w-full h-19.5 border-b-3 border-black flex items-center px-6">
        LIMINAL
      </div>

      {/* Content */}
      <div className="flex flex-col items-start mt-6 px-4">
        <div className="w-[320px] h-[180px] overflow-hidden">
          <img
            src="wallp.jpg"
            className="w-full border-3 border-black h-full object-cover object-center"
          />
        </div>

        <button className="w-[320px] mt-3 py-3 bg-orange-500 text-white font-semibold flex items-center justify-center gap-2 rounded-sm hover:bg-orange-600 transition">
          ▶ Play Sample
        </button>

        <div className="w-[320px] mt-2 flex border border-gray-300 rounded-sm">
          <button className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-gray-100 transition border-r border-gray-300">
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
          <button className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-gray-100 transition">
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
          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            Description
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SidePlayer;
