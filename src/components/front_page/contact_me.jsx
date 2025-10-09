import { useEffect, useRef, useState } from "react";

export default function ContactMe() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/40">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg')] bg-bottom bg-no-repeat blur-[3px] md:bg-cover" />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div
        className={`libre-franklin-normal relative z-10 mx-auto mt-[25vh] flex h-full max-w-7xl flex-col px-8 py-16 text-center text-white transition-all duration-1200 md:py-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
      >
        {/* Header */}
        <p
          ref={ref}
          className={`libre-franklin-bold text-[32px] md:text-[96px]`}
        >
          Need a hand?
        </p>
        <p ref={ref} className={`libre-franklin-normal text-[16px] md:text-[56px]`}>
          Let's Work Together 🙌
        </p>

        {/* Socials */}
        <div className="libre-franklin-bold mt-[7vh] flex items-center justify-center text-[24px] md:text-[32px] text-blue-100">
          📩
          b10@asu.edu
        </div>
      </div>
    </div>
  );
}
