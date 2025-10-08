import { useEffect } from "react";

export default function Greeting() {
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-700 text-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 z-0 h-full w-full object-cover blur-sm"
        src="/bg-video_b.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        id="bg-video"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/25"></div>

      {/* Front Content */}
      <div className="relative z-10 flex h-full items-end justify-center">
        {/* Image + Text Container */}
        <div className="flex flex-col xl:flex-row items-center text-white md:space-x-12">
          {/* Text */}
          <div className="mb-[3vh] flex flex-col justify-center space-y-6 xl:text-right lg:mr-[6vh]">
            <p className="text-[64px] mb-[-0.5vh] md:text-[72px] lg:text-[80px] xl:text-[128px]">👋</p>
            <p className="libre-franklin-bold text-[48px] leading-none md:text-[56px] lg:text-[64px] xl:text-[80px]">
              Hello there!
            </p>
            <p className="libre-franklin-normal text-[16px] leading-none md:text-[24px] lg:text-[32px] xl:text-[40px] xl:pb-[5vh]">
              Ako si <b>Benjamin Herrera</b>
            </p>
          </div>

          {/* Image */}
          <img
            src="/self_photo.png"
            alt="Benjamin Herrera"
            className="h-[45vh] w-[45vh] xl:h-[60vh] xl:w-[60vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
