export default function ResearchInterests() {
  return (
    <div className="relative w-full overflow-hidden bg-[#9abbff] text-center md:min-h-screen lg:h-[120vh]">
      {/* Main Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center p-[40px] text-white drop-shadow-2xl md:p-[65px] lg:flex-row-reverse lg:items-center lg:justify-between">
        {/* Image / Emoji */}
        <div className="mb-10 flex flex-shrink-0 items-center justify-center lg:mb-0 lg:ml-[5vw]">
          <div className="text-[200px] drop-shadow-2xl sm:text-[256px] md:text-[300px] lg:text-[320px] xl:text-[344px]">
            ⚗️
          </div>
        </div>

        {/* Text Block */}
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">
          <p className="libre-franklin-bold text-[28px] leading-none md:text-[56px] lg:text-[64px] xl:text-[48px]">
            🧪 My Research Interests
          </p>

          <p className="libre-franklin-normal text-[16px] leading-[1.3] md:text-[24px] xl:text-[32px]">
            Computational systems in space face issues with <b>(1)</b>{" "}
            <u>limited compute power</u> and <b>(2)</b> <u>radiation damage</u>.
            There are several use cases to deploy ML/AI models to space, but
            these space systems cannot handle large models and are very
            sensitive to radiation effects.
            <br />
            <br />
            My research explores how to combine <b>
              🏃‍♂️ computational efficiency
            </b>{" "}
            and <br /> <b>🛡️ fault tolerant computation</b> to enable reliable deployment
            of ML models on these platforms. This is crucial for real-time space
            applications such as 🛰️ <u>onboard satellite image analysis</u>, 🚗 <u>autonomous
            navigation</u>, and 🤖 <u>robotics</u>.
          </p>
        </div>
      </div>
    </div>
  );
}
