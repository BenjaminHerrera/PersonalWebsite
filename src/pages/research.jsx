import NavBar from "../components/navbar.jsx";
import ResearchItem from "../components/cv_like/research_item.jsx";
import ExperienceItem from "../components/cv_like/experience_item.jsx";

export default function ResearchPage() {
  const EXPERIENCE_ITEMS = [
    {
      title: "Student Researcher",
      org: "Kerner Laboratory",
      location: "Tempe, AZ",
      date: "MAY 2024 - Present",
      logoSrc: "https://avatars.githubusercontent.com/u/111096220?s=200&v=4",
      meta: "Advised by Dr. Hannah Kerner",
      bullets: [
        "Researching efficient LLM models by optimizing FLOPs and I/O usage via MoEs for resource-constrained systems",
      ],
    },
    {
      title: "Research Intern",
      org: "Air Force Research Laboratory",
      location: "Kirtland AFB, NM",
      date: "MAY 2025 - AUG 2025",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
      meta: "Advised by Evan Kain and Windy Slater",
      bullets: [
        "Developed a theoretical framework on describing fault injections behaviors using neural collapse",
      ],
    },
    {
      title: "Research Intern",
      org: "Air Force Research Laboratory",
      location: "Kirtland AFB, NM",
      date: "MAY 2024 - AUG 2024",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
      meta: "Advised by Evan Kain and Windy Slater",
      bullets: [
        "Analyzed LLM fault tolerance on language benchmarks to identify divergent patterns from vision models",
      ],
    },
    {
      title: "Research Intern",
      org: "Air Force Research Laboratory",
      location: "Kirtland AFB, NM",
      date: "MAY 2023 - AUG 2023",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
      meta: "Advised by Evan Kain and Windy Slater",
      bullets: [
        "Ran fault injection campaigns on FRCNN models across several geospatial imagery benchmarks",
      ],
    },
    {
      title: "Research Aide",
      org: "ARGOS Vision",
      location: "Tempe, AZ",
      date: "JAN 2022 - MAY 2023",
      logoSrc: "https://argos.vision/wp-content/uploads/2020/09/cropped-4_5976822806317369122-1-3.png",
      meta: "Advised by Dr. Yezhou Yang and Dr. Mohammad Farhad",
      bullets: [
        "Designed fast-inference objection detection models to identify pedestrians in real-time onboard edge devices",
      ],
    },
    {
      title: "Student Researcher",
      org: "Active Perception Group",
      location: "Tempe, AZ",
      date: "AUG 2021 - DEC 2022",
      logoSrc: "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
      meta: "Advised by Dr. Yezhou Yang and Dr. Mohammad Farhad",
      bullets: [
        "Researched generative text-to-music modeling by finetuning music and text encoders on custom-made datasets",
      ],
    },
    {
      title: "Research Intern",
      org: "DOST-PAGASA",
      location: "Manila, Philippines (Remote)",
      date: "JUL 2021 - DEC 2021",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Philippine_Atmospheric%2C_Geophysical_and_Astronomical_Services_Administration_%28PAGASA%29_logo.svg/2048px-Philippine_Atmospheric%2C_Geophysical_and_Astronomical_Services_Administration_%28PAGASA%29_logo.svg.png",
      meta: "Advised by Anthony Joseph Lucero",
      bullets: [
        "Developed rice and corn yield regression models based on meteorological forecasts and socioeconomic factors",
      ],
    },
  ];

  const PAPER_ITEMS = [
    {
      title: "FUSE: Mixture of Experts as Block Sparse Attention",
      date: "OCT 2025",
      authors: [
        { name: "Chenwei Cui", marker: "*" },
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Hannah Kerner" },
      ],
      note: (
        <>
          Submitting to <b>MLSys 2026</b>
        </>
      ),
      links: [
        { label: "paper", href: "#" },
        { label: "code", href: "#" },
      ],
    },
  ];

  const POSTER_ITEMS = [
    {
      title:
        "HERTA: Hierarchial Evaluation of Representations for Tight-frame Analysis",
      date: "AUG 2025",
      authors: [
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Evan Kain" },
        { name: "Windy Slater" },
      ],
      note: <i>Air Force Research Laboratory</i>,
    },
    {
      title: "Noelle: An Extended Fault Injection Framework",
      date: "AUG 2024",
      authors: [
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Evan Kain" },
        { name: "Windy Slater" },
      ],
      note: <i>Air Force Research Laboratory</i>,
    },
    {
      title:
        "Can It Run in a Crisis? Testing the FRCNN Architecture in Fault Environments",
      date: "AUG 2023",
      authors: [
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Evan Kain" },
        { name: "Windy Slater" },
      ],
      note: <>Air Force Research Laboratory</>,
    },
    {
      title:
        "VIVYNet: A New Approach to Creating AI-Generated Music, Modeling Phase",
      date: "DEC 2022",
      authors: [
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Yezhou Yang" },
      ],
      note: <i>ASU Fulton Undergraduate Research Initiative</i>,
      links: [
        {
          label: "poster",
          href: "https://forge.engineering.asu.edu/furiproject/vivynet-a-new-approach-to-creating-ai-generated-music-2/",
        },
      ],
    },
    {
      title:
        "VIVYNet: A New Approach to Creating AI-Generated Music, Data Collection Phase",
      date: "MAY 2022",
      authors: [
        { name: "Benjamin Herrera", you: true, marker: "*" },
        { name: "Yezhou Yang" },
      ],
      note: <i>ASU Fulton Undergraduate Research Initiative</i>,
      links: [
        {
          label: "poster",
          href: "https://forge.engineering.asu.edu/furiproject/vivynet-a-new-approach-to-creating-ai-generated-music/",
        },
      ],
    },
  ];

  // Render the first page of the posts page
  return (
    <div className="relative min-h-screen w-full bg-sky-900 text-white">
      {/* Page Content */}
      <div className="relative z-100">
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-50 w-full">
          <NavBar />
        </div>

        <div className="flex flex-col gap-[7vh] py-[10vh] pt-[12vh] lg:pt-[16vh]">
          {/* Research Experience */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              🧪 Experience
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {EXPERIENCE_ITEMS.map((it) => (
                <ExperienceItem key={it.title} {...it} />
              ))}
            </ul>
          </div>

          {/* Papers */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              📄 Paper(s)
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {PAPER_ITEMS.map((it) => (
                <ResearchItem key={it.title} {...it} />
              ))}
            </ul>
          </div>

          {/* Posters */}
          <div className="flex flex-col items-center gap-[16px]">
            <div className="libre-franklin-bold mr-[1.5vw] text-[48px] text-shadow-lg md:text-[80px] lg:text-[112px]">
              📊 Posters
            </div>
            <ul className="mx-auto max-w-3xl space-y-3">
              {POSTER_ITEMS.map((it) => (
                <ResearchItem key={it.title} {...it} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
