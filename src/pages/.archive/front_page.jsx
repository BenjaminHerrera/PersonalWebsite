import { useEffect } from "react";
import { FaSquareFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Frontpage() {
  // Playback useEffect
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  // **** RENDER ****
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-700 text-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 z-0 h-full w-full object-cover blur-sm"
        src="/bg-video_a.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        id="bg-video"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/25"></div>

      {/* Front Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center space-y-15 text-white">
        <p className="libre-franklin-bold text-bold text-[128px] md:text-[164px] leading-none">BENJAMIN HERRERA</p>
        <p className="libre-franklin-normal text-[48px] md:text-[64px] leading-none">
          Website Launching Soon!
        </p>
      </div>
    </div>
  );
}
