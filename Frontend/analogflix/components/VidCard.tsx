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
      className="flex w-full cursor-pointer flex-col overflow-hidden border border-[#2a2b34] bg-[#1e1f26] transition-colors duration-200 hover:bg-[#2a2b34]"
    >
      <div className="aspect-video w-full overflow-hidden bg-[#12131a]">
        <img
          src={thumbnail}
          alt={videoName}
          className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      <div className="flex h-[100px] flex-col px-3.5 py-3">
        <p className="line-clamp-2 text-[13.5px] font-medium leading-snug tracking-tight text-[#d4d6e0]">
          {videoName}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[11px] text-[#5a5d70]">{channelName}</span>
          <span className="text-[10px] font-mono text-[#3e4050]">
            {releasedAt}
          </span>
        </div>
      </div>
    </div>
  );
}
