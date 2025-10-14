import { NAME } from "../../config.jsx";

export default function PostsCard({ title, text, image }) {
  const hasImage = Boolean(image);

  return (
    <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-400 shadow-lg backdrop-blur-md">
      {/* Top Half - Either image or default background */}
      <div
        className={`relative flex h-1/2 w-full items-center justify-center overflow-hidden lg:h-2/3 ${
          hasImage ? "" : "bg-gradient-to-br from-blue-300 to-[#ffc194]"
        }`}
      >
        {hasImage ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="libre-franklin-bold text-center text-[96px] tracking-[-0.1em] text-shadow-lg md:text-[96px] lg:text-[136px]">
            {NAME}
          </div>
        )}
      </div>

      {/* Bottom Half - Text */}
      <div className="flex h-1/2 flex-col p-4 lg:h-1/3">
        {/* Title with right-edge fade */}
        <div className="relative w-full overflow-hidden">
          <h1
            className="text-[32px] font-bold whitespace-nowrap text-white"
            style={{
              maskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Body text */}
        <p className="relative mt-2 flex-1 overflow-hidden text-sm leading-[1.5] text-ellipsis text-gray-200">
          {text}
        </p>
      </div>
    </div>
  );
}
