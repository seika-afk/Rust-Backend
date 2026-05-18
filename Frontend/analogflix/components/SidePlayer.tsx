import { Ghost } from "lucide-react";

type SidePlayerVideo = {
  id?: {
    videoId?: string;
  };
  snippet?: {
    title?: string;
    description?: string;
    channelId?: string;
    channelTitle?: string;
  };
};

const SidePlayer = ({ video }: { video: SidePlayerVideo | null }) => {
  const videoId = video?.id?.videoId;
  const title = video?.snippet?.title ?? "Select a video";
  const description = video?.snippet?.description ?? "Click on any video.";
  const channelId = video?.snippet?.channelId;
  const channelTitle = video?.snippet?.channelTitle ?? "LIMINAL";
  const openChannel = () => {
    if (channelId) {
      window.location.href = `https://www.youtube.com/channel/${channelId}`;
      return;
    }

    window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      channelTitle,
    )}`;
  };

  const openVideo = () => {
    if (!videoId) return;

    window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#1D1B20] text-[#E6E1E5] flex items-center justify-center w-full h-19.5 border-b-3 border-[#49454F] flex items-center px-6">
        <Ghost size={30} />

        <p className="text-3xl font-bold"> LIMINAL</p>
      </div>

      <div className="flex flex-col items-start mt-6 px-4">
        <div className="w-[320px] h-[180px] overflow-hidden bg-[#12131a] border-3 border-[#49454F]">
          {videoId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-[#CAC4D0]">
              No video selected
            </div>
          )}
        </div>

        <div className="w-[320px] mt-2 flex border border-[#49454F] ">
          <button
            type="button"
            onClick={openChannel}
            title="Open channel"
            className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#CFBDFF] hover:text-[#1D1B20] hover:scale-102 transition border-r border-[#49454F]"
          >
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
            {channelTitle}
          </button>
          <button
            type="button"
            onClick={openVideo}
            title="Open on YouTube"
            className=" cursor-pointer flex-1 flex flex-col items-center justify-center py-3 gap-1 text-xs font-medium hover:bg-[#CFBDFF] hover:text-[#1D1B20] hover:scale-102 transition"
          >
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
          <h1 className="text-md font-semibold text-[#E6E1E5] mb-1">{title}</h1>
          <p className="text-sm text-[#CAC4D0] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SidePlayer;
