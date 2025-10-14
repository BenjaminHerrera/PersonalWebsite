import {
  HannahKerner,
  EvanKain,
  WindySlater,
  YezhouYang,
  MohammadFarhadi,
  AnthonyJosephLucero,
} from "./components/background/names";

const config = {
  // Website Information
  website_information: {
    name: "Ben H",
    website: "https://benherrera.dev",
    email: "b10@asu.edu",
    phone: "",
  },

  // Environment Settings
  env: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
    mode: import.meta.env.MODE,
  },

  // Navigation Configuration
  navigation: {
    items: [
      { label: "Posts", link: "/posts", external: false },
      { label: "Background", link: "/background", external: false },
    ],
  },

  // Development Settings
  dev: {
    enableDebugMode: import.meta.env.DEV,
    showGrid: false,
    logLevel: import.meta.env.DEV ? "debug" : "error",
  },

  // Background Items
  background_points: {
    education: [
      {
        title: "M.S.",
        org: "Computer Science (Thesis)",
        location: "Arizona State University",
        date: "AUG 2025 - MAY 2026",
        logoSrc:
          "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
      },
      {
        title: "B.S.",
        org: "Computer Science",
        location: "Arizona State University",
        date: "AUG 2021 - MAY 2025",
        logoSrc:
          "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
        bullets: ["GPA: 4.0/4.0, Summa Cum Laude"],
      },
    ],
    experience: [
      {
        title: "Student Researcher",
        org: "Kerner Laboratory",
        location: "Tempe, AZ",
        date: "MAY 2024 - Present",
        logoSrc: "https://avatars.githubusercontent.com/u/111096220?s=200&v=4",
        meta: (
          <>
            Advised by <HannahKerner />
          </>
        ),
        bullets: [
          "Researching efficient LLM models by optimizing FLOPs and I/O usage via MoEs for resource-constrained systems",
          "Creating efficient geo-foundational models wtih MoEs that are fault tolerable and optimized for edge compute",
          "Carried over research work from the Air Force Research Laboratory to study faults in various models and modalities",
        ],
      },
      {
        title: "Research Intern",
        org: "Air Force Research Laboratory",
        location: "Kirtland AFB, NM",
        date: "MAY 2025 - AUG 2025",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
        meta: (
          <>
            Advised by <EvanKain /> & <WindySlater />
          </>
        ),
        bullets: [
          "Developed an analytical fault tolerance framework on describing fault injections behaviors using neural collapse",
          "Focused on applying neural collapse work towards advanced vision models and beyond penultimate layers",
        ],
      },
      {
        title: "Research Intern",
        org: "Air Force Research Laboratory",
        location: "Kirtland AFB, NM",
        date: "MAY 2024 - AUG 2024",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
        meta: (
          <>
            Advised by <EvanKain /> & <WindySlater />
          </>
        ),
        bullets: [
          "Analyzed LLM fault tolerance on language benchmarks to identify divergent patterns from vision models",
          "Developed a fault injection platform to scale fault injection experiments and include language models",
        ],
      },
      {
        title: "Research Intern",
        org: "Air Force Research Laboratory",
        location: "Kirtland AFB, NM",
        date: "MAY 2023 - AUG 2023",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Air_Force_Research_Laboratory.png",
        meta: (
          <>
            Advised by <EvanKain /> & <WindySlater />
          </>
        ),
        bullets: [
          "Ran fault injection campaigns on FRCNN models across various backbones and geospatial imagery benchmarks",
          "Designed multiple testing strategies to discover new model degradation behaviors in fault environments",
        ],
      },
      {
        title: "Research Aide",
        org: "ARGOS Vision",
        location: "Tempe, AZ",
        date: "JAN 2022 - MAY 2023",
        logoSrc:
          "https://argos.vision/wp-content/uploads/2020/09/cropped-4_5976822806317369122-1-3.png",
        meta: (
          <>
            Advised by <YezhouYang /> & <MohammadFarhadi />
          </>
        ),
        bullets: [
          "Designed fast-inference objection detection models to identify pedestrians in real-time onboard edge devices",
          "Fine-tuned and quantized YOLOv8 on a compiled pedestrian dataset of 150,000 samples for fast inference object detection, achieving 93% mAP on YOLOv8-small and 96% mAP on YOLOv8-medium",
        ],
      },
      {
        title: "Student Researcher",
        org: "Active Perception Group",
        location: "Tempe, AZ",
        date: "AUG 2021 - DEC 2022",
        logoSrc:
          "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
        meta: (
          <>
            Advised by <YezhouYang />
          </>
        ),
        bullets: [
          "Researched generative text-to-music modeling by finetuning music and text models to make a MAE",
          "Compiled a finetuning dataset by scraping and cleaning samples from CPDL.org and IMSLP.org",
        ],
      },
      {
        title: "Research Intern",
        org: "Philippine Atmospheric, Geophysical and Astronomical Services Administration (DOST-PAGASA)",
        location: "Manila, Philippines (Remote)",
        date: "JUL 2021 - DEC 2021",
        logoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Philippine_Atmospheric%2C_Geophysical_and_Astronomical_Services_Administration_%28PAGASA%29_logo.svg/2048px-Philippine_Atmospheric%2C_Geophysical_and_Astronomical_Services_Administration_%28PAGASA%29_logo.svg.png",
        meta: (
          <>
            Advised by <AnthonyJosephLucero />
          </>
        ),
        bullets: [
          "Developed rice and corn yield regression models based on meteorological forecasts and socioeconomic factors",
          "Built and released a comprehensive dataset combining data from PSA, PAGASA, and NOAA, spanning 1984-2019, to facilitate open research and development in agricultural production forecasting in the Philippines",
        ],
      },
    ],
    publications: [
      {
        title: "FUSE: Mixture of Experts as Block Sparse Attention",
        date: "OCT 2025",
        authors: [
          { name: "Chenwei Cui", marker: "*" },
          { name: "Benjamin Herrera", you: true, marker: "*" },
          { name: "Hannah Kerner" },
        ],
        note: <>In Preparation</>,
        links: [
          { label: "paper", href: "#" },
          { label: "code", href: "#" },
        ],
      },
    ],
    posters: [
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
    ],
    academic_accolades: [
      {
        title: "NSF Graduate Research Fellowship",
        note: (
          <>
            <i>National Science Foundation</i> — <b>$111,000</b> across three
            years of funding
          </>
        ),
        date: "MAR 2025",
        special: true,
      },
      {
        title: "Accelerated Master's Award",
        note: (
          <>
            <i>Arizona State University</i> — <b>$3,000</b> for two semesters
          </>
        ),
        date: "AUG 2025",
      },
      {
        title: "Dean's List",
        note: (
          <>
            <i>Arizona State University</i>
          </>
        ),
        date: "AUG 2021 - MAY 2025",
      },
      {
        title: "Experential Learning Grant",
        note: (
          <>
            <i>Arizona State University</i> — <b>$800</b> travel and learning
            grant
          </>
        ),
        date: "FEB 2025",
      },
      {
        title: "2nd Place Crowd Favorite",
        note: <i>Air Force Research Laboratory</i>,
        date: "AUG 2024",
      },
      {
        title: "Featured Researcher",
        note: (
          <i>
            Arizona State University, Fulton Undergraduate Research Initiative
          </i>
        ),
        date: "MAY 2022",
      },
      {
        title: "Research Funding",
        note: (
          <>
            <i>
              Arizona State University, Fulton Undergraduate Research Initiative
            </i>{" "}
            — <b>$3,800</b> across two semesters
          </>
        ),
        date: "JAN, AUG 2022",
      },
      {
        title: "New American University Provost's Scholarship",
        note: (
          <>
            <i>Arizona State University</i> — <b>$28,000</b> across four years
            of undergraduate studies
          </>
        ),
        date: "AUG 2021",
      },
    ],
    other_accolades: [
      {
        title: "Best Oral Presentation",
        note: <i>Cyber 9/12 Challenge, Washington D.C.</i>,
        date: "FEB 2025",
      },
      {
        title: "Semi-Finalists",
        note: <i>Cyber 9/12 Challenge, Washington D.C.</i>,
        date: "FEB 2025",
      },
      {
        title: "Most Creative Policy",
        note: <i>Cyber 9/12 Challenge, Washington D.C.</i>,
        date: "FEB 2024",
      },
      {
        title: "Warrior Flight",
        note: <i>Arizona State University - AFROTC Detachment 025</i>,
        date: "DEC 2023",
      },
      {
        title: "Most Dedicated Cadet Award",
        note: <i>Arizona State University - AFROTC Detachment 025</i>,
        date: "DEC 2023",
      },
      {
        title: "Cadet of the Semester Nomination",
        note: <i>Arizona State University - AFROTC Detachment 025</i>,
        date: "NOV 2023",
      },
    ],
    teaching: [
      {
        title: "Graduate Student Assistant",
        org: "Arizona State University",
        location: "Tempe, AZ",
        date: "JAN 2025 - MAY 2025",
        logoSrc:
          "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
        bullets: [
          "Assisted grading duties for roughly 500 students in CSE 340: Programming Languages for Prof. James Gordon",
          "Facilitated information distillation from teaching staff to students, ensuring real-time communication",
        ],
      },
      {
        title: "Teaching Assistant",
        org: "Arizona State University",
        location: "Tempe, AZ",
        date: "JAN 2025 - MAY 2025",
        logoSrc:
          "https://wallpapers.com/images/hd/arizona-state-university-logo-hnfhf0d62631f8fj.png",
        bullets: [
          "Performed teaching duties for about 300 students in CSE 310: Data Structures and Algorithms for Prof. Yiran Luo",
          "Conducted weekly recitations and office hours, while making review content for the students before exams.",
        ],
      },
    ],
    leadership: [
      {
        title: "Master of Ceremonies",
        org: "Saint Mary's Basilica",
        location: "Tempe, AZ",
        date: "JAN 2020 - Present",
        logoSrc:
          "https://saintmarysbasilica.org/wp-content/uploads/2025/03/cropped-lgogog2.png",
        bullets: [
          "Coordinated ceremonial plans and executed various masses for the parish of Saint Mary's Basilica",
          "Assisted Bishop Olmstead, Navarres, and Dolan of the Diocese of Phoenix for special masses",
          "Trained 50+ altar servers and conducted altar service in parishes across Phoenix and Albuquerque",
        ],
      },
      {
        title: "Vice President",
        org: "Cyber Security Policy Development Club ",
        location: "Tempe, AZ",
        date: "AUG 2024 - DEC 2024",
        logoSrc:
          "https://cdn.discordapp.com/icons/1286859783235702930/e5957177e023ca2e3168895af34914ea.png?size=80&quality=lossless",
        bullets: [
          "Mentored 13+ individuals on national security policy development, preparing for the Cyber 9/12 competition",
          "Held weekly meetings discussing current cyber security practices and national security policy practices",
          "Helped develop a one credit course taught by COL Bruce Pagel (Ret.) on cyber security and national security",
        ],
      },
      {
        title: "Project Lead",
        org: "WingSuite",
        location: "Tempe, AZ",
        date: "AUG 2024 - DEC 2024",
        logoSrc: "https://avatars.githubusercontent.com/u/154940513?s=200&v=4",
        bullets: [
          "Led over 30+ individual to develop a web-app that allows organizations to track, survey, and communicate personnel and teams via aggregated statistics tracked by leadership, all in one platform",
          "Trained and guided team members on new technologies necessary to the deployment of the application",
          "Successfully accepted as a Venture Devil and capstone project, utilizing the ASU AFROTC Detachment 025 and other private entities as a testing environment for continuous feedback",
        ],
      },
      {
        title: "Executive Officer",
        org: "Arizona State University AFROTC Detachment 025",
        location: "Tempe, AZ",
        date: "AUG 2024 - DEC 2024",
        logoSrc: "https://avatars.githubusercontent.com/u/134102646?s=200&v=4",
        bullets: [
          "Oversaw accountability and correspondence for 180+ members, streamlining officership training and morale",
          "Directed multiple strategic projects from conception to completion, enhancing unit capabilities and effectiveness",
          "Managed communications, ensuring information flow from leadership, promoting transparency & unity",
        ],
      },
    ],
    projects: [
      {
        title: "Notion2Discord",
        date: "2024",
        bullets: [
          "Assembled an app that sends notifications to discord channels when users make changes to a Notion database",
        ],
        note: <a href="https://github.com/BenjaminHerrera/Notion2Discord" className="text-sky-300 underline">Link</a>
      },
      {
        title: "MLDevTemplate",
        date: "2024",
        bullets: [
          "Composed an easy-to-use template for ML research and development, removing time needed to start projects",
        ],
        note: <a href="https://github.com/BenjaminHerrera/MLDevTemplate" className="text-sky-300 underline">Link</a>
      },
      {
        title: "PDTs and Awards Tracker",
        date: "2023",
        bullets: [
          "Built a desktop application to help AFROTC cadre track awards and opportunities for cadets every academic year",
        ],
        note: <a href="https://github.com/Detachment025/PDT-Awards-Tracker" className="text-sky-300 underline">Link</a>
      },
      {
        title: "Instruct",
        date: "2023",
        bullets: [
          "Constructed a website for labs to display instructions and input observations, preventing cross contamination",
        ],
        note: <a href="https://github.com/instruct-io" className="text-sky-300 underline">Link</a>
      },
      {
        title: "Fablr-Art",
        date: "2023",
        bullets: [
          "Competed in a hackathon to make a website that prompts users to create artificially generated stories",
        ],
        note: <a href="https://github.com/BenjaminHerrera/fablr-art" className="text-sky-300 underline">Link</a>
      },
      {
        title: "CPDLScraper",
        date: "2023",
        bullets: [
          "Formulated a system a scrape CPDL.org to collect music lyrics and MIDI files and store them into a database",
        ],
        note: <a href="https://github.com/VIVYNet/CPDLScraper" className="text-sky-300 underline">Link</a>
      },
      {
        title: "IMSLPScraper",
        date: "2023",
        bullets: [
          "Devised a script to scrape the IMSLP.org website to collect and save musical lyrics and other musical data",
        ],
        note: <a href="https://github.com/VIVYNet/CPDLScraper" className="text-sky-300 underline">Link</a>
      },
      {
        title: "LiederScraper",
        date: "2023",
        bullets: [
          "Produced a system to scrape lieder.net to compile all the musical lyrics and information from the website",
        ],
        note: <a href="https://github.com/VIVYNet/CPDLScraper" className="text-sky-300 underline">Link</a>
      },
    ],
  },
};

// Export individual config sections for convenience
export const { website_information, env, navigation, dev, background_points } =
  config;

// Export specific commonly used values
export const BACKGROUND = config.background_points;
export const NAME = config.website_information.name;
export const IS_DEVELOPMENT = config.env.isDevelopment;
export const IS_PRODUCTION = config.env.isProduction;

// Default export
export default config;
