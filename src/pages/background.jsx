import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BACKGROUND } from "../config.jsx";
import NavBar from "../components/navbar.jsx";
import ResearchItem from "../components/background/research_item.jsx";
import ExperienceItem from "../components/background/experience_item.jsx";

export default function Background({ include_navbar = true }) {
  // Scroll to top whenever route changes (including hash routes)
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  // Render the first page of the posts page
  return (
    <div className="relative min-h-screen w-full bg-sky-900 text-white">
      {/* Page Content */}
      <div className="relative z-5">
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-100 w-full">
          {include_navbar && <NavBar />}
        </div>

        <div className="flex flex-col gap-[7vh] py-[10vh] pt-[12vh] lg:pt-[16vh]">
          {/* Education Experience */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              🏫 Education
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.education.map((it, index) => (
                <ExperienceItem key={"education-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Research Experience */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🧪<div></div>
              Research Experience
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.experience.map((it, index) => (
                <ExperienceItem key={"experience-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              📄 Publications
              <div className="libre-franklin-normal mt-[-8px] text-center text-[12px] text-shadow-lg md:mt-[-24px] md:text-[20px] lg:text-[28px]">
                * Denotes equal contribution
              </div>
            </div>

            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.publications.map((it, index) => (
                <ResearchItem key={"papers-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Posters */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              📊 Posters
            </div>

            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.posters.map((it, index) => (
                <ResearchItem key={"posters-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Academic Accolades */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🏅<div></div>
              Academic Accolades
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.academic_accolades.map((it, index) => (
                <ResearchItem key={"accolades-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Other Accolades */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🏆<div></div>
              Other Accolades
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.other_accolades.map((it, index) => (
                <ResearchItem key={"accolades-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Teaching Experience */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🧑‍🏫<div></div>
              Teaching Experience
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.teaching.map((it, index) => (
                <ExperienceItem key={"leadership-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Leadership Experience */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🚀<div></div>
              Leadership Experience
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.leadership.map((it, index) => (
                <ExperienceItem key={"leadership-" + index} {...it} />
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] max-w-4xl text-center text-[48px] leading-tight text-shadow-lg md:text-[80px] lg:text-[112px]">
              🏗️ Projects
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {BACKGROUND.projects.map((it, index) => (
                <ResearchItem key={"leadership-" + index} {...it} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
