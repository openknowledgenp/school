export type Page = "home" | "training" | "courses" | "resources" | "projects" | "about";

export interface Course {
  tag: string;
  color: string;
  title: string;
  desc: string;
  level: string;
  modules: string;
  status?: string;
}

export interface Project {
  title: string;
  year: string;
  color: string;
  illustration: string;
  desc: string;
  tags: string[];
}

export interface TimelineEvent {
  title: string;
  desc: string;
  tags: string[];
  highlight?: string;
}

export interface TimelineYear {
  year: string;
  color: string;
  events: TimelineEvent[];
}

export interface Resource {
  type: string;
  tc: string;
  title: string;
  topic: string;
  fmt: string;
}

export interface Stat {
  num: string;
  label: string;
  color: string;
}

export interface CohortRow {
  year: string;
  programme: string;
  cohort: string;
}

// Colour palette
// Cyan    #38D8FC  — digital literacy / primary CTA
// Mint    #00CFA3  — data literacy / open data
// Purple  #717FDA  — AI / gender literacy
// Sky     #9AEEF7  — secondary timeline / project accents

export const COURSES: Course[] = [
  {
    tag: "Open Data",
    color: "#00CFA3",
    title: "Open Data Fundamentals",
    desc: "Data is everywhere in Nepal, but most of it goes unused. This course shows you what open data is, where to find it, and how to judge and reuse it with confidence. You will work directly with Nepali sources.",
    level: "Beginner",
    modules: "4 modules",
  },
  {
    tag: "Data Viz",
    color: "#00CFA3",
    title: "Data Visualization",
    desc: "A chart can reveal the truth or hide it. This course turns raw spreadsheets into clear, honest visuals that people actually understand, whether for a report, a newsroom or a community meeting. Hands-on with different data visualization tools.",
    level: "Intermediate",
    modules: "5 modules",
  },
  {
    tag: "Gender · Data",
    color: "#00CFA3",
    title: "Gender Data 101",
    desc: "Good advocacy needs good evidence. This course helps you find, read and use gender-disaggregated data to make the case for change. A Nepal-contextualised adaptation of the Ladysmith Gender Data 101 MOOC, built with Women Leaders in Technology and tested with women across Nepal.",
    level: "Intermediate",
    modules: "4 modules",
  },
  {
    tag: "AI",
    color: "#717FDA",
    title: "Everyday AI",
    desc: "AI is already in your phone, your office and your feed. This course shows you how it works, where it fails, and how to use it on your own terms. You will practise the STOP, CHECK, ASK routine to catch AI mistakes, and the Role, Task, Context, Format formula to get better answers, with hands-on various AI tools.",
    level: "Beginner",
    modules: "4 modules",
  },
  {
    tag: "Digital",
    color: "#38D8FC",
    title: "Digital Security and Online Safety",
    desc: "Practical habits to protect your accounts, devices and personal data online. Covers password hygiene, scam identification, safe use of eSewa and other Nepali fintech apps, and protecting personal information on Facebook and TikTok.",
    level: "Beginner",
    modules: "3 modules",
  },
  {
    tag: "Journalism · Data",
    color: "#00CFA3",
    title: "Data for Journalism",
    desc: "Working with data for accountability reporting in Nepali newsrooms. Covers data extraction with Tabula and OpenRefine, validation with the Open Data Editor, public-records requests under Nepal's Right to Information regime and visualization for print and broadcast.",
    level: "Intermediate",
    modules: "Modular",
  },
  {
    tag: "Digital · Livelihoods",
    color: "#38D8FC",
    title: "Digital Literacy for Tourism Stakeholders",
    desc: "A bilingual 12-module curriculum being built with The Asia Foundation's Digital Samriddhi project for homestay owners, tour guides and cultural groups in Bardiya. Includes Trainer Guides, Learner Workbooks, micro-videos and an offline-first kit for rural settings.",
    level: "Beginner",
    modules: "12 modules",
    status: "In Development",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "AI Literacy: From Access to Agency",
    year: "2026",
    color: "#717FDA",
    illustration: "/uploads/project-ai-literacy.jpg",
    desc: "Nepal's first formal AI-literacy pilot, run in Lalitpur with local government. We trained 15 community members and 5 ward officers to use AI for everyday tasks like drafting notices, translating and summarising, with a bilingual curriculum on prompting, safety and verification.",
    tags: ["AI", "Local Governance", "Training"],
  },
  {
    title: "Empowering Local Enterprises through Digital Roadmaps",
    year: "2026",
    color: "#38D8FC",
    illustration: "/uploads/project-digital-roadmaps.jpg",
    desc: "A two-day training plus on-site mentoring that brought micro-entrepreneurs in Dhangadhi online. All 8 mentored businesses created a Facebook page and a Google Maps listing, and two landed their first ever digital customer inquiries within weeks.",
    tags: ["Digital", "Livelihoods", "Local Enterprise"],
  },
  {
    title: "PAHICHAN: Youth Data Champions",
    year: "2018",
    color: "#9AEEF7",
    illustration: "/uploads/connect-community.png",
    desc: "Three-day residential workshops for 126 youths across six districts, building skills in open data, visualization and mapping, with NPR 7,500 seed funding per group for local action plans on substance abuse, unemployment and gender discrimination.",
    tags: ["Youth", "Open Data", "Training"],
  },
  {
    title: "Data Hackdays Tulsipur and Birgunj",
    year: "2024",
    color: "#00CFA3",
    illustration: "/uploads/data.png",
    desc: "Community datathons with 61 participants (37 women) working with IDMS datasets on gender, health, education and environment, producing eight published data stories from teams across Dang and Parsa districts.",
    tags: ["Data", "Community", "Gender"],
  },
];

export const TIMELINE_YEARS: TimelineYear[] = [
  {
    year: "2017",
    color: "#E8881A",
    events: [
      {
        title: "Open Data Awareness Programme",
        desc: "A nationwide college outreach programme raising awareness of open data among youth, combining hands-on training sessions at colleges and youth organisations across multiple districts with a compiled open data manual, culminating in a hackathon in Kathmandu where participants worked collaboratively to open up closed datasets.",
        tags: ["Open Data", "Youth", "Training"],
      },
    ],
  },
  {
    year: "2018",
    color: "#00CFA3",
    events: [
      {
        title: "PAHICHAN: Youth Data Champions",
        desc: "A residential workshop series across several districts, training youth in open data, mapping and leadership, with local action plans on issues including substance abuse and gender discrimination.",
        tags: ["Youth", "Open Data", "Training"],
      },
      {
        title: "Data-a-thon for Journalists (Open Data Day 2018)",
        desc: "A collaboration with the Centre for Data Journalism Nepal, training journalists in data extraction, cleaning, analysis, and visualisation.",
        tags: ["Journalism", "Open Data", "Data"],
      },
    ],
  },
  {
    year: "2019",
    color: "#38D8FC",
    events: [
      {
        title: "Data Expedition in Dang",
        desc: "The first open data event held in Dang, where participants uploaded new datasets and created infographics on local tourism and agriculture.",
        tags: ["Open Data", "Community"],
      },
      {
        title: "Real-time Data Hackathon",
        desc: "A hackathon exploring real-time air quality and water level data, producing open-source tools and visualisations.",
        tags: ["Data", "Community"],
      },
    ],
  },
  {
    year: "2020",
    color: "#717FDA",
    events: [
      {
        title: "Data Expedition in Butwal",
        desc: "A training event for local campus participants on using data to track national development projects.",
        tags: ["Open Data", "Community"],
      },
    ],
  },
  {
    year: "2021",
    color: "#00CFA3",
    events: [
      {
        title: "Open Data Day Datathon in Tulsipur",
        desc: "The first open data event held in Tulsipur, producing winning projects on urban planning, agriculture, and education.",
        tags: ["Open Data", "Local Government"],
      },
      {
        title: "Open Data Day DataDive Kathmandu",
        desc: "A volunteer-led session to improve the Open Data Nepal portal and launch new climate datasets.",
        tags: ["Open Data", "Data"],
      },
      {
        title: "Code for Nepal × OKN Data Fellowship",
        desc: "A nationwide fellowship offering data skills training and a virtual internship to Nepalis affected by the pandemic, with priority given to underserved provinces.",
        tags: ["Data", "Fellowship"],
      },
    ],
  },
  {
    year: "2022",
    color: "#38D8FC",
    events: [
      {
        title: "Gender Data 101 Bootcamp (Virtual)",
        desc: "A virtual bootcamp covering the full Gender Data 101 curriculum for participants from partner organisations across Nepal.",
        tags: ["Gender", "Data", "Training"],
      },
      {
        title: "OSM Hackfest 2022",
        desc: "A mapping hackathon in Kathmandu where college teams worked on themes including disaster resilience, public health, and safe migration.",
        tags: ["Open Data", "Youth"],
      },
      {
        title: "WikiSchool 2022",
        desc: "An editathon and training series to grow Nepali Wikipedia editorship, with a focus on health-related content, delivered with Wikimedia Nepal.",
        tags: ["Open Data", "Community"],
      },
    ],
  },
  {
    year: "2023",
    color: "#717FDA",
    events: [
      {
        title: "Gender Data 101 Bootcamp",
        desc: "An in-person bootcamp on finding, processing, publishing, and visualising gender disaggregated data.",
        tags: ["Gender", "Data", "Training"],
      },
      {
        title: "Local Government Data Fellowship",
        desc: "A fellowship placing data fellows within municipal bodies to digitise records and support evidence-based decision-making.",
        tags: ["Local Government", "Fellowship", "Data"],
      },
    ],
  },
  {
    year: "2024",
    color: "#00CFA3",
    events: [
      {
        title: "Women in Data Conference 2024",
        desc: "An annual conference exploring gender equity in data and technology through keynotes, panels, and skill-based workshops.",
        tags: ["Gender", "Data"],
      },
      {
        title: "Data Hackdays in Tulsipur and Birgunj",
        desc: "Community datathons where teams worked with local government data on themes including women's statistics, environment, agriculture, health, and education, producing published data stories.",
        tags: ["Data", "Community", "Gender"],
      },
      {
        title: "Open Data Day Data Expedition in Janakpurdham",
        desc: "A data capacity building event delivered with the global Open Knowledge Network, connecting Janakpurdham to the international Open Data Day community.",
        tags: ["Open Data", "Community"],
      },
    ],
  },
  {
    year: "2025",
    color: "#38D8FC",
    events: [
      {
        title: "PublicBodies Datathon",
        desc: "A datathon in Kathmandu where teams worked with different tiers of government alongside a panel on the right to information in Nepal. Findings were shared with the National Information Commission.",
        tags: ["Open Data", "Governance"],
      },
      {
        title: "Women in Data Conference 2025",
        desc: "An annual conference bringing together data and technology practitioners, with keynotes, panels and workshops on themes including digital forensics, AI and gender bias, and data storytelling.",
        tags: ["Gender", "Data", "AI"],
      },
      {
        title: "Data and Digital Literacy Programme",
        desc: "A formal training programme with Women Leaders in Technology, delivering Nepali language curriculum modules in several districts, with OKN leading module development and training delivery.",
        tags: ["Digital", "Data", "Training"],
      },
      {
        title: "Open Data Editor at CMR Nepal Journalism Academy",
        desc: "A session on error detection in open datasets built into a journalism training course, helping journalists work confidently with Nepali open data sources.",
        tags: ["Journalism", "Open Data"],
      },
      {
        title: "Open Data Day 2025: DataDive Kathmandu",
        desc: "A hands-on session for data practitioners, researchers, and journalists on identifying and fixing errors in open datasets.",
        tags: ["Open Data", "Training"],
      },
    ],
  },
  {
    year: "2026",
    color: "#717FDA",
    events: [
      {
        title: "From Access to Agency: AI Literacy for Local Governance",
        desc: "An AI literacy pilot with a local government in Lalitpur, combining a baseline assessment, hands-on training and a guided application period. The bilingual curriculum teaches a simple safety routine (stop, check, ask) alongside practical use of common AI tools for everyday ward-level tasks.",
        tags: ["AI", "Local Government", "Training"],
      },
      {
        title: "Empowering Local Enterprises through Digital Roadmaps",
        desc: "A training and mentorship programme for micro entrepreneurs in Dhangadhi, covering online presence, AI content tools and digital safety. Participating businesses went on to establish a digital footprint and began receiving inquiries through it.",
        tags: ["Digital", "Livelihoods"],
      },
      {
        title: "AI Session for Women Political Leaders",
        desc: "A bilingual session for women professionals and political leaders on artificial intelligence: what it is, where it's already used across government, agriculture, media and politics, and how to use AI tools responsibly for writing, research and everyday work.",
        tags: ["AI", "Gender"],
      },
    ],
  },
];

export const COHORTS: CohortRow[] = [
  { year: "2017", programme: "Open Data Awareness Programme", cohort: "335+ youths from 11 colleges, 1 school and 2 youth organisations across 7 districts" },
  { year: "2018", programme: "PAHICHAN Youth Data Champions", cohort: "126 youths in 6 districts" },
  { year: "2018", programme: "Data-a-thon for Journalists", cohort: "Journalists from print, broadcast and digital newsrooms" },
  { year: "2019", programme: "First Women in Data Conference", cohort: "250+ participants (95% women)" },
  { year: "2019", programme: "Open Data Women Fellowship", cohort: "10 fellows placed in 10 host organisations" },
  { year: "2019", programme: "Data Expedition in Dang", cohort: "40 participants" },
  { year: "2020", programme: "Data Expedition in Butwal", cohort: "25 participants" },
  { year: "2021", programme: "Datathon in Tulsipur", cohort: "30 participants (35 with organisers)" },
  { year: "2021", programme: "DataDive Kathmandu", cohort: "12 volunteer data scientists, developers and designers" },
  { year: "2021", programme: "Data Fellowship with Code for Nepal", cohort: "DataCamp Premium for 500+ Nepalis" },
  { year: "2022", programme: "Gender Data 101 Bootcamp", cohort: "15 participants from 8 partner organisations" },
  { year: "2022", programme: "OSM Hackfest", cohort: "12 teams, 8 colleges, 17 college orientations" },
  { year: "2023", programme: "Gender Data 101 Bootcamp v2", cohort: "10–15 participants (in-person, King's College Kathmandu)" },
  { year: "2024", programme: "Data Hackdays Tulsipur", cohort: "30 participants (18 women)" },
  { year: "2024", programme: "Data Hackdays Birgunj", cohort: "31 participants (19 women)" },
  { year: "2025", programme: "PublicBodies Datathon", cohort: "49 participants and mentors, 8 teams" },
  { year: "2025", programme: "Data and AI Symposium", cohort: "200+ professionals, educators, students, officials" },
  { year: "2025", programme: "DataDive Kathmandu (Open Data Editor)", cohort: "25–30 data practitioners" },
  { year: "2026", programme: "AI Literacy Pilot (Lalitpur Ward 15)", cohort: "15 community members + 5 LG officers" },
  { year: "2026", programme: "Digital Roadmaps (Dhangadhi)", cohort: "20 trained, 8 mentored" },
];

export const ALL_RESOURCES: Resource[] = [
  { type: "Guide", tc: "#00CFA3", title: "Open Data Handbook (Nepali)", topic: "Open Data", fmt: "PDF · 1.2 MB" },
  { type: "Template", tc: "#38D8FC", title: "Chart Chooser Cheatsheet", topic: "Data Viz", fmt: "PDF · 320 KB" },
  { type: "Template", tc: "#38D8FC", title: "Data Cleaning Checklist", topic: "Open Data", fmt: "PDF · 280 KB" },
  { type: "Toolkit", tc: "#717FDA", title: "AI Literacy Training Pack", topic: "AI", fmt: "PPTX · 4.1 MB" },
  { type: "Toolkit", tc: "#717FDA", title: "Misinformation & AI Reading List", topic: "AI", fmt: "PDF · 210 KB" },
  { type: "Toolkit", tc: "#717FDA", title: "Digital Security Starter Kit", topic: "Digital", fmt: "ZIP · 6.8 MB" },
  { type: "Guide", tc: "#00CFA3", title: "Account Safety Quick Guide", topic: "Digital", fmt: "PDF · 540 KB" },
  { type: "Guide", tc: "#00CFA3", title: "Gender Data Sourcebook", topic: "Gender", fmt: "PDF · 2.3 MB" },
  { type: "Template", tc: "#38D8FC", title: "Spreadsheet Formulas Reference", topic: "Data Viz", fmt: "XLSX · 90 KB" },
  { type: "Dataset", tc: "#00CFA3", title: "Local Budget Dataset (sample)", topic: "Open Data", fmt: "CSV · 1.6 MB" },
];

export const RESOURCE_TOPICS = ["All", "Open Data", "Data Viz", "AI", "Digital", "Gender"];

export const STATS: Stat[] = [
  { num: "2,000+", label: "people trained", color: "#38D8FC" },
  { num: "15", label: "districts reached", color: "#00CFA3" },
  { num: "10+", label: "open resources published", color: "#38D8FC" },
  { num: "6", label: "literacy courses", color: "#00CFA3" },
];

export const PARTNERS = [
  "The Asia Foundation",
  "UNDP Asia-Pacific",
  "Open Knowledge Foundation",
  "UK FCDO / UK Aid",
  "Women Leaders in Technology",
  "Code for Nepal",
];

export const PAGE_HREFS: Record<Page, string> = {
  home: "/",
  training: "/training",
  courses: "/courses",
  resources: "/resources",
  projects: "/our-work",
  about: "/about",
};

export const NAV_ITEMS: { id: Page; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "training", label: "Training", href: "/training" },
  { id: "courses", label: "Courses", href: "/courses" },
  { id: "projects", label: "Our Work", href: "/our-work" },
  { id: "about", label: "About", href: "/about" },
];
