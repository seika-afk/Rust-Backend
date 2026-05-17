export default function VidCard({
  thumbnail = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  videoName = "Navigating the Norwegian Fjords at Dusk",
  channelName = "Kara Lee",
  releasedAt = "May 14, 2024",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group w-[260px] cursor-pointer rounded-[10px] border border-[#2a2b34] bg-[#1e1f26] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.045] hover:border-[#3a3c4a] hover:shadow-[0_20px_48px_rgba(0,0,0,0.55)]"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#12131a]">
        <img
          src={thumbnail}
          alt={videoName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            <svg className="w-3.5 h-3.5 fill-white ml-0.5" viewBox="0 0 10 12">
              <polygon points="0,0 10,6 0,12" />
            </svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-3.5 py-3">
        <p className="text-[13.5px] font-medium text-[#d4d6e0] leading-snug tracking-tight transition-colors duration-200 group-hover:text-[#eceef5] line-clamp-2">
          {videoName}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[11px] text-[#5a5d70]">{channelName}</span>
          <span className="text-[10px] font-mono text-[#3e4050]">
            {releasedAt}
          </span>
        </div>
      </div>
    </div>
  );
}
