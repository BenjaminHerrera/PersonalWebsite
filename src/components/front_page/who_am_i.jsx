export default function WhoAmI() {
  return (
    <div className="relative h-screen w-full items-center overflow-hidden bg-slate-700 text-center">
      {/* Front Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center">
        {/* Image + Text Container */}
        <div className="flex flex-col items-center px-[32px] text-white drop-shadow-2xl md:space-x-12 lg:flex-row">
          {/* Image */}
          <div className="text-[256px] drop-shadow-2xl lg:text-[320px] xl:text-[344px]">
            🛰️
          </div>

          {/* Text */}
          <div className="mx-[25px] flex flex-col justify-center space-y-6 lg:text-left">
            <p className="libre-franklin-bold text-[28px] leading-none md:mt-[10vh] md:text-[56px] lg:text-[60px] xl:text-[80px]">
              🤔 Who Am I?
            </p>
            <div className="libre-franklin-normal mb-[6vh] text-[16px] leading-[1.3] md:mt-[2vh] md:text-[24px] lg:text-[32px] xl:text-[40px]">
              I am a Master's Student studying Computer Science at 🔱{" "}
              <u>Arizona State University</u>. My research work is in{" "}
              <b>🤏 Model Compression & Optimization</b>, and{" "}
              <b>💪 Fault Tolerance for ML Models</b>.
              <br></br>
              <br></br>
              I am also happy to announce that I have been recently
              funded by the{" "}
              <b className="text-amber-300 drop-shadow-lg drop-shadow-white/30">
                NSF GRFP
              </b>
              !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
