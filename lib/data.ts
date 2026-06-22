export type Page = "home" | "courses" | "resources" | "projects" | "impact" | "about";

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

export const COURSES: Course[] = [
  {
    tag: "Open Data",
    color: "#00CFA3",
    title: "Open Data Fundamentals",
    desc: "What open data is, where to find it in Nepal, and how to assess and reuse it responsibly. Includes a tour of Nepali sources: opendatanepal.com, the Central Bureau of Statistics, the Integrated Data Management System and OpenStreetMap.",
    level: "Beginner",
    modules: "4 modules",
  },
  {
    tag: "Data Viz",
    color: "#00CFA3",
    title: "Data Visualization",
    desc: "Turn spreadsheets into clear charts and maps that tell an honest, accurate story. Tools covered include Google Sheets, OpenRefine, Tabula, Datawrapper, Tableau Public, Power BI and Flourish.",
    level: "Intermediate",
    modules: "5 modules",
  },
  {
    tag: "Gender · Data",
    color: "#00CFA3",
    title: "Gender Data 101",
    desc: "A training programme and toolkit that helps advocates, journalists and policymakers find, read and use gender-disaggregated data for evidence-based campaigns. A Nepal-contextualized adaptation of the Ladysmith Gender Data 101 MOOC.",
    level: "Beginner to Intermediate",
    modules: "4 modules",
  },
  {
    tag: "AI",
    color: "#717FDA",
    title: "AI Literacy: From Access to Agency",
    desc: "How AI systems work, where they fail, and how to use them critically and ethically. Teaches the STOP, CHECK, ASK verification routine and the Role + Task + Context + Format prompting formula, with hands-on use of Claude, ChatGPT, Gemini, NotebookLM, Bhashini and more.",
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
    illustration: "/uploads/knowledge.png",
    desc: "Nepal's first formal AI-literacy pilot in Lalitpur Ward 15, training 15 community members and 5 local-government officers through a bilingual curriculum on prompting, safety, verification and ethical use of AI tools.",
    tags: ["AI", "Local Governance", "Training"],
  },
  {
    title: "Women in Data Conference",
    year: "2019–2025",
    color: "#00CFA3",
    illustration: "/uploads/policy.png",
    desc: "An annual flagship event co-ordinated by Open Knowledge Foundation Nepal on behalf of a 12-organisation steering committee, training hundreds of women on statistics, data visualization, AI ethics, digital forensics and prompt engineering.",
    tags: ["Gender", "Data", "Training"],
  },
  {
    title: "PAHICHAN: Youth Data Champions",
    year: "2018",
    color: "#38D8FC",
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
    year: "2018",
    color: "#38D8FC",
    events: [
      {
        title: "PAHICHAN: Youth Data Champions",
        desc: "Three-day residential workshops held 12 July–14 August across six districts (Itahari, Bhojpur, Butwal, Nepalgunj, Dhangadhi, Dadeldhura). Youth trained in open data, visualization, mapping and leadership, each group receiving NPR 7,500 seed funding for local action plans on issues including substance abuse, unemployment and gender discrimination.",
        tags: ["Youth", "Open Data", "Training"],
        highlight: "126 youths trained · 6 districts",
      },
      {
        title: "Data-a-thon for Journalists (Open Data Day 2018)",
        desc: "Held 28 February at Dhokaima Cafe, Lalitpur, with the Centre for Data Journalism Nepal. Journalists from print, broadcast and digital media worked alongside tech volunteers on data extraction, cleaning, analysis, visualization, publishing and licensing using Tabula, OpenRefine and Datawrapper.",
        tags: ["Journalism", "Open Data", "Data Viz"],
      },
    ],
  },
  {
    year: "2019",
    color: "#00CFA3",
    events: [
      {
        title: "Nepal's First Women in Data Conference",
        desc: "Held 24 February at Hotel Himalaya, Kathmandu. Theme: डाटा शक्ति नारी शक्ति (where two superpowers meet). Keynotes by Meghan Nalbo (The Asia Foundation) and Fernanda Drumond (Gapminder Foundation), three panels on women in data, and eight afternoon workshops on statistics, SPSS, Excel, OpenStreetMap, social research methodology, soft skills and data visualization.",
        tags: ["Gender", "Data", "Training"],
        highlight: "250+ participants · ~95% women",
      },
      {
        title: "Open Data Day Data Expedition in Dang",
        desc: "First open-data event ever held in Dang, at Hotel Doko, Ghorahi. Participants from five campuses uploaded new datasets to opendatanepal.com and created infographics on Dang tourism, agricultural and livestock data.",
        tags: ["Open Data", "Community"],
        highlight: "40 participants · first ODD in Dang",
      },
      {
        title: "Real-time Data Hackathon",
        desc: "Data practitioners and environment experts explored real-time PM2.5 air quality, hydrology and water-level data. Produced open-source notebooks, Power BI visualizations and an alert Twitter bot for water levels.",
        tags: ["Data", "Environment"],
      },
      {
        title: "Contribution to the Nepal Data Literacy Programme",
        desc: "Open Knowledge Foundation Nepal contributed course materials, workbooks and instructor notes to the Nepal Data Literacy Portal (dataliteracy.github.io), built by the World Bank Nepal with DFID support.",
        tags: ["Open Data", "Training"],
      },
    ],
  },
  {
    year: "2020",
    color: "#717FDA",
    events: [
      {
        title: "Open Data Day Data Expedition in Butwal",
        desc: "Held 7 March at Hotel Avenue, Butwal. Twenty-five selected participants from seven local campuses explored how to use data to track national development projects, including the Budhigandaki dam and the Prime Minister Employment Programme.",
        tags: ["Open Data", "Community"],
        highlight: "25 participants · 7 campuses",
      },
    ],
  },
  {
    year: "2021",
    color: "#38D8FC",
    events: [
      {
        title: "Open Data Day Datathon in Tulsipur",
        desc: "Held 6 March at Munal Pahuna Ghar, Tulsipur — the first open-data event ever held in Tulsipur, attended by the Mayor of Tulsipur Sub-Metropolitan City. Three winning projects on urban planning, agricultural-forestry training and a scholarship database for marginalised students each received NPR 10,000 seed funding.",
        tags: ["Open Data", "Local Government"],
        highlight: "30 participants · 3 funded projects · NPR 10,000 each",
      },
      {
        title: "Open Data Day DataDive Kathmandu",
        desc: "12 volunteer data scientists, developers and designers met in Kathmandu to debug the Open Data Nepal portal, build a scraper, refine Kalimati market data and launch climate datasets.",
        tags: ["Open Data", "Data"],
        highlight: "12 volunteer data practitioners",
      },
      {
        title: "Women in Data Virtual Conference 2021",
        desc: "Online event with panels co-led by Girls in Tech Nepal, Women in STEAM and Women Leaders in Technology, featuring speakers from The Asia Foundation, the British Embassy Nepal, FCDO, Publish What You Fund and Women in Big Data Europe.",
        tags: ["Gender", "Data"],
      },
      {
        title: "Code for Nepal × OKN Data Fellowship",
        desc: "Nationwide DataCamp-powered fellowship for Nepalis affected by COVID-19, with priority for Provinces 2 and 6. Components: DataCamp Premium subscriptions, a data-viz blog assignment, soft-skills training and a four-week virtual internship.",
        tags: ["Data", "Fellowship"],
        highlight: "DataCamp Premium for 500+ Nepalis",
      },
    ],
  },
  {
    year: "2022",
    color: "#00CFA3",
    events: [
      {
        title: "Gender Data 101 Bootcamp (Virtual)",
        desc: "Two-day virtual bootcamp for 15 selected participants from eight partner organisations, covering the full four-module Gender Data 101 curriculum on finding, reading, processing, publishing and visualizing gender-disaggregated data.",
        tags: ["Gender", "Data", "Training"],
        highlight: "15 participants · 8 organisations",
      },
      {
        title: "OSM Hackfest 2022",
        desc: "Held 20–24 June in Kathmandu. 12 teams from 8 colleges competed on themes of disasters and climate resilience, public health, gender, sustainable cities, displacement and safe migration. Winning team Omnecal (Kathmandu University) was sponsored to State of the Map Asia in the Philippines.",
        tags: ["Open Data", "OpenStreetMap", "Youth"],
        highlight: "12 teams · 8 colleges · 17 pre-event orientations",
      },
      {
        title: "WikiSchool 2022",
        desc: "Editathon and training series to grow Nepali Wikipedia editorship, with a particular focus on health-related content. Co-organised with Wikimedia Nepal and funded by the Wikimedia Community Fund.",
        tags: ["Open Data", "Community"],
      },
    ],
  },
  {
    year: "2023",
    color: "#717FDA",
    events: [
      {
        title: "Women in Data Conference 2023 and Gender Data 101 Bootcamp v2",
        desc: "In-person two-day bootcamp and conference on 25 February at King's College Kathmandu, with hands-on data hunt, data processing, data publishing and data visualization activities. Theme: 'Transformation through the Integration of Women, Data, and Entrepreneurship.'",
        tags: ["Gender", "Data", "Training"],
      },
      {
        title: "Local Government Data Fellowship (Phase I)",
        desc: "Data fellows embedded in municipal bodies to digitise records and assist with evidence-based decisions. Findings published in the July 2023 blog 'Supporting Local Government for Informed Decision Making.'",
        tags: ["Local Government", "Data"],
      },
    ],
  },
  {
    year: "2024",
    color: "#38D8FC",
    events: [
      {
        title: "Women in Data Conference 2024",
        desc: "Theme: 'Ctrl+Z: Rewriting Gender Paradigms in Data and Tech', featuring skill-based workshops alongside keynotes and panels exploring gender equity in data and technology.",
        tags: ["Gender", "Data"],
      },
      {
        title: "Data Hackdays Tulsipur and Birgunj",
        desc: "Community datathons co-organised with The Algorithm. Teams worked with IDMS data on Women's Statistics, Environment, Agriculture, Health, Education, Disaster Management, Industry and Cooperatives, producing eight published data stories: Didi-Bhai, We For Change, CoCo, Liaka, Young Leaders, Data Decoders, Data for Change, Youth Spirits.",
        tags: ["Data", "Community", "Gender"],
        highlight: "61 participants (37 women) · 2 cities",
      },
      {
        title: "Open Data Day Data Expedition in Janakpurdham",
        desc: "Delivered with the global Open Knowledge Network, building local data capacity in Madhesh Province and connecting Janakpurdham to the international Open Data Day community.",
        tags: ["Open Data", "Community"],
      },
      {
        title: "Local Government Capacity Building Workshops",
        desc: "Workshops in Tulsipur, Birgunj, Janakpurdham, Lekbeshi and Suddhodhan on data management, IDMS implementation and inter-governmental data sharing.",
        tags: ["Local Government", "Training"],
        highlight: "5 municipalities",
      },
      {
        title: "Local Government Data Fellowship (Phase II)",
        desc: "Continued data-fellow placements in Birgunj, Tulsipur and Lekbeshi to support evidence-based decision-making at the local level.",
        tags: ["Local Government", "Fellowship"],
      },
    ],
  },
  {
    year: "2025",
    color: "#00CFA3",
    events: [
      {
        title: "PublicBodies Datathon",
        desc: "Held 11 January at Hotel Himalaya, Kathmandu. Eight mixed teams, each assigned to a tier of government (central, provincial, local, oversight, public service, economic). Expert panel 'Past, Present and Future of RTI in Nepal' with the National Information Commission, Accountability Lab Nepal and Freedom Forum. Crowdsourced PublicBodies dataset shared with the National Information Commission.",
        tags: ["Open Data", "Governance"],
        highlight: "49 participants and mentors · 8 teams",
      },
      {
        title: "Women in Data Conference 2025",
        desc: "Theme: सङ्‍कल्प (Using Data to Turn Promises into Progress). Managed by OKN on behalf of 12 Steering Committee organisations, with keynotes, two panels and six breakout workshops on Digital Forensics, Breaking the Binary on AI gender bias, Data to Story, Gendered Disinformation, Data Compass and Ethics of Data and Prompt Engineering.",
        tags: ["Gender", "Data", "AI"],
      },
      {
        title: "Data and Digital Literacy Programme",
        desc: "Formal training programme launched 1 February 2025 with Women Leaders in Technology, delivering curriculum modules in Nepali in Lumbini, Lekbeshi and Simta. OKN led course-module development, training delivery and programme coordination.",
        tags: ["Digital", "Data", "Training"],
      },
      {
        title: "Open Data Editor at CMR Nepal Journalism Academy",
        desc: "Open Data Editor session built into CMR Nepal's eight-week Data-Driven Journalism course, training journalists to install ODE, detect errors in datasets and use Nepali open-data sources. Trainer: Nikesh Balami.",
        tags: ["Journalism", "Open Data"],
      },
      {
        title: "Open Data Day 2025: DataDive Kathmandu",
        desc: "Hands-on training for data practitioners, researchers and journalists on identifying and fixing errors in Open Data Nepal portal datasets using the Open Data Editor.",
        tags: ["Open Data", "Training"],
        highlight: "25–30 data practitioners",
      },
    ],
  },
  {
    year: "2026",
    color: "#717FDA",
    events: [
      {
        title: "From Access to Agency: AI Literacy for Local Governance",
        desc: "Nepal's first formal AI-literacy pilot, running May–September 2026 in Ward 15, Lalitpur. A cohort of community members and local-government officers moves through baseline assessment, a three-day hands-on training (12–14 June 2026), 6–8 weeks of guided application and evaluation. The bilingual curriculum teaches the STOP, CHECK, ASK safety routine and hands-on use of Claude, ChatGPT, Gemini, NotebookLM, Bhashini, Canva AI, Microsoft Copilot, Perplexity and DeepL for ward-level tasks. Lead facilitator: Nikesh Balami.",
        tags: ["AI", "Local Government", "Training"],
        highlight: "15 community members + 5 LG officers",
      },
      {
        title: "Empowering Local Enterprises through Digital Roadmaps",
        desc: "Two-day training in Dhangadhi for 20 local micro-entrepreneurs, followed by 3–4 weeks of on-site digital mentorship for 8 businesses by youth volunteers. Covered building an online presence, AI content tools and digital safety. All 8 businesses created Facebook pages and Google Maps listings; 5 are actively posting and 2 received their first ever digital customer inquiries.",
        tags: ["Digital", "Livelihoods"],
        highlight: "20 trained · 8 mentored · 8/8 businesses got online",
      },
      {
        title: "AI Session for Women Political Leaders",
        desc: "Bilingual 35-slide module 'Artificial Intelligence: Concepts, Challenges and Opportunities' delivered on 24 April 2026 to professional women and women political leaders across diverse sectors. Covered narrow AI, generative AI and AI agents; AI in Nepal's government, agriculture, media and politics; AI tools for writing, research, visuals and meetings; ethics; and a hands-on practical session.",
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
  { num: "2,000+", label: "people directly trained", color: "#38D8FC" },
  { num: "10+", label: "open resources published", color: "#00CFA3" },
  { num: "15", label: "districts reached", color: "#717FDA" },
  { num: "6", label: "literacy courses live", color: "#00CFA3" },
];

export const PARTNERS = [
  "The Asia Foundation",
  "UNDP Asia-Pacific",
  "Open Knowledge Foundation",
  "UK FCDO / UK Aid",
  "Women Leaders in Technology",
  "Code for Nepal",
];

export const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "resources", label: "Resources" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "about", label: "About" },
];
