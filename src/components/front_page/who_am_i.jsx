import { useEffect } from "react";

export default function WhoAmI() {
  useEffect(() => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-700 text-center">
      {/* Front Content */}
      <div className="relative z-10 flex h-full justify-center">
        {/* Image + Text Container */}
        <div className="flex flex-col items-center text-white md:space-x-12 xl:flex-row">
          {/* Image */}
          <div className="text-[256px] drop-shadow-2xl">
            🛰️
          </div>

          {/* Text */}
          <div className="px-[16px] mb-[3vh] flex flex-col justify-center space-y-6 lg:mr-[6vh] xl:text-right">
            <p className="mb-[-0.5vh] text-[64px] md:text-[72px] lg:text-[80px] xl:text-[128px]">
            </p>
            <p className="libre-franklin-bold text-[48px] leading-none md:text-[56px] lg:text-[64px] xl:text-[80px]">
              Who Am I?
            </p>
            <p className="libre-franklin-normal text-[16px] leading-[1.3] md:text-[24px] lg:text-[32px] xl:pb-[5vh] xl:text-[40px]">
              I am a Master's Student studying <i>Computer Science</i> at <u>Arizona State University</u>. My research work is in <b>Fault Tolerance for ML Models</b>, and <b>Model Compression & Optimization</b>. This ties to applications in <i>Reat-time Geospatial Analysis</i> and <i>ML for Space Systems.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
