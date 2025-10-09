import { motion } from "framer-motion";

export default function ResearchWork() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#9abbff] text-center lg:h-[120vh]">
      {/* Front Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center">
        <div className="flex flex-col items-center justify-center p-[65px] text-white drop-shadow-2xl">
          {/* Image */}
          <img
            src="/research_logos.png"
            alt="Benjamin Herrera"
            className="mr-0 md:scale-80 lg:scale-75"
          />

          {/* Text */}
          <div className="my-[7vh] flex max-w-7xl flex-col items-center justify-center space-y-6 text-center lg:mt-[1vh]">
            <p className="libre-franklin-bold text-[28px] leading-none md:text-[56px] lg:text-[64px] xl:text-[80px]">
              🧪 My Research
            </p>
            <p className="libre-franklin-normal text-[16px] leading-[1.3] md:text-[24px] lg:mb-[5vh] lg:text-[32px] xl:text-[40px]">
              I've worked with faculty and personnel at{" "}
              <b>🔱 Arizona State University</b> and at the{" "}
              <b>🦅 Air Force Research Laboratory</b>.
            </p>
            <motion.a
              href="#about_me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border-2 border-transparent px-10 py-4 text-lg font-semibold text-white transition-all duration-500 ease-out"
            >
              {/* background gradient animation */}
              <span className="absolute inset-0 z-0 bg-black opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></span>

              {/* matching border animation */}
              <span className="absolute inset-0 z-0 rounded-full border-2 border-white transition-colors duration-500 group-hover:border-transparent"></span>

              {/* text */}
              <span className="relative z-10">See My Work</span>

              {/* underline animation */}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
