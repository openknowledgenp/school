export type Page = "home" | "courses" | "resources" | "projects" | "impact" | "about";

export interface Course {
  tag: string;
  color: string;
  title: string;
  desc: string;
  level: string;
  modules: string;
}

export interface Project {
  title: string;
  year: string;
  color: string;
  desc: string;
  tags: string[];
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

export const COURSES: Course[] = [
  { tag: "Open Data", color: "#00CFA3", title: "Open Data Fundamentals", desc: "What open data is, where to find it, and how to assess and reuse it responsibly.", level: "Beginner", modules: "4 modules" },
  { tag: "Data Viz", color: "#00CFA3", title: "Data Visualization", desc: "Turn spreadsheets into clear charts and maps that tell an honest, accurate story.", level: "Intermediate", modules: "5 modules" },
  { tag: "AI", color: "#717FDA", title: "AI Literacy", desc: "How AI systems work, where they fail, and how to use them critically and ethically.", level: "Beginner", modules: "4 modules" },
  { tag: "Digital", color: "#38D8FC", title: "Digital Security", desc: "Practical habits to protect your accounts, devices and personal data online.", level: "Beginner", modules: "3 modules" },
  { tag: "Data Viz", color: "#00CFA3", title: "Spreadsheets for Data", desc: "Clean, sort and analyse data with confidence using everyday tools.", level: "Beginner", modules: "3 modules" },
  { tag: "Gender", color: "#00CFA3", title: "Gender Data 101", desc: "Find, read and use gender-disaggregated data to support advocacy and policy.", level: "Beginner", modules: "4 modules" },
];

export const PROJECTS: Project[] = [
  { title: "Gender Data 101", year: "2023–2024", color: "#717FDA", desc: "A training programme and toolkit that helps advocates and journalists find, read and use gender-disaggregated data for evidence-based campaigns.", tags: ["Gender", "Training", "Toolkit"] },
  { title: "Data & Digital Literacy for Women Entrepreneurs", year: "2024", color: "#00CFA3", desc: "Hands-on workshops equipping women-led small businesses with practical data, digital and online-safety skills to grow and protect their work.", tags: ["Digital", "Workshops"] },
  { title: "Open Data Literacy in Schools", year: "2022–2023", color: "#38D8FC", desc: "Bringing open data, charts and critical thinking into classrooms, with teacher guides and student-friendly datasets.", tags: ["Open Data", "Youth"] },
  { title: "Community Data Fellowship", year: "2023", color: "#717FDA", desc: "A mentored programme supporting local changemakers to design and run their own small data projects in their districts.", tags: ["Training", "Community"] },
];

export const ALL_RESOURCES: Resource[] = [
  { type: "Guide", tc: "#00CFA3", title: "Open Data Handbook (Nepali)", topic: "Open Data", fmt: "PDF · 1.2 MB" },
  { type: "Template", tc: "#38D8FC", title: "Chart Chooser Cheatsheet", topic: "Data Viz", fmt: "PDF · 320 KB" },
  { type: "Template", tc: "#38D8FC", title: "Data Cleaning Checklist", topic: "Open Data", fmt: "PDF · 280 KB" },
  { type: "Toolkit", tc: "#717FDA", title: "Intro to AI Slide Deck", topic: "AI", fmt: "PPTX · 4.1 MB" },
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
  { num: "10", label: "open resources", color: "#00CFA3" },
  { num: "15", label: "districts reached", color: "#717FDA" },
  { num: "6", label: "literacy courses", color: "#00CFA3" },
];

export const PARTNERS = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"];

export const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "resources", label: "Resources" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "about", label: "About" },
];
