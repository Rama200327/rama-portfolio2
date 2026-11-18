export const profile = {
  name: "Rama Abuaqoulah",
  firstName: "Rama",
  lastName: "Abuaqoulah",
  role: "Quality Assurance Tester",
  location: "Amman, Jordan",
  email: "workrama380@gmail.com",
  phone: "+962 785 306 625",
  phoneHref: "+962785306625",
  linkedin: "https://www.linkedin.com/in/rama-abu-aqoulah",
  linkedinLabel: "linkedin.com/in/rama-abu-aqoulah",
  github: "https://github.com/Rama200327",
  githubLabel: "github.com/Rama200327",
  /** The CV PDF lives in public/; BASE_URL keeps the link working when the site is served from a sub-folder (GitHub Pages). */
  cvUrl: `${import.meta.env.BASE_URL}Rama_Abuaqoulah_CV.pdf`,
  cvFileName: "Rama_Abuaqoulah_CV.pdf",
  summary:
    "Detail-oriented Computer Science graduate with hands-on software testing experience. Skilled in designing test cases, documenting defects and validating fixes to ensure software quality, with a strong technical background in ASP.NET Core, SQL Server and the software development lifecycle.",
  stack: ["Functional Testing", "Test Cases", "Bug Reports", "Regression Testing", "SQL Server", "ASP.NET Core", "C#", "Git"],
};

export type Experience = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    title: "QA Tester & .NET Developer",
    company: "GIG Gulf - Jordan",
    place: "Amman",
    period: "Jul 2026 — Oct 2026",
    points: [
      "Performed functional testing for Insurance Corporate Portal modules covering Agent and Broker workflows.",
      "Designed and executed test cases, documented software defects, and prepared detailed QA reports.",
      "Performed regression testing, validated bug fixes, and collaborated with developers to ensure software quality and stability.",
      "Contributed to test documentation and defect tracking throughout the software testing lifecycle.",
      "Developed portal features using ASP.NET Core MVC and SQL Server.",
    ],
    tags: ["Functional Testing", "Regression Testing", "Test Cases", "Defect Tracking", "QA Reports", "ASP.NET Core MVC", "SQL Server"],
  },
  {
    title: ".NET Full Stack Developer Intern",
    company: "Orange Coding School",
    place: "Amman",
    period: "Feb 2026 — Jun 2026",
    points: [
      "Completed 40+ structured tasks and projects covering full-stack web development.",
      "Built dynamic UI components using Razor, Bootstrap and jQuery, and developed JavaScript applications involving API integration, DOM manipulation, JSON and asynchronous programming.",
      "Applied OOP principles, back-end development and relational database design (DDL/DML), while collaborating through Git/GitHub and managing Agile tasks using Notion.",
    ],
    tags: ["ASP.NET MVC", "Razor", "Bootstrap", "jQuery", "JavaScript", "SQL Server", "Git & GitHub", "Agile"],
  },
  {
    title: "Quality Assurance Intern",
    company: "Apidog",
    place: "Remote",
    period: "Jul 2025 — Jan 2026",
    points: [
      "Performed functional, usability and regression testing for the company website and client projects, documenting defects and validating fixes before release.",
    ],
    tags: ["Functional Testing", "Usability Testing", "Regression Testing", "Defect Reporting"],
  },
];

export const education = [
  { title: "Bachelor of Computer Science", place: "Jadara University", period: "Aug 2022 — Sep 2025" },
  { title: "CS50: Introduction to Computer Science", place: "Harvard University", period: "Aug 2022" },
];

export type Project = {
  slug: string;
  title: string;
  date: string;
  kind: string;
  description: string;
  stack: string[];
  highlights?: string[];
  featured?: boolean;
  /** Public source code on GitHub — opens in a new tab. */
  repoUrl?: string;
  /** A hosted, clickable demo. Only set when the app is actually online. */
  liveUrl?: string;
  /** A viewable design file (e.g. Figma) for design-only projects. */
  designUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "insurance-portal",
    repoUrl: "https://github.com/Rama200327/InsurancePortalV2",
    title: "Insurance Management Portal",
    date: "Oct 2026",
    kind: "Full-stack web app",
    description:
      "An insurance management web application with dedicated modules for Motor, Medical, Marine and Travel insurance.",
    stack: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server"],
    highlights: [
      "Repository Pattern + Dependency Injection for clean separation of concerns",
      "RESTful APIs for data communication",
      "Explored Tesseract OCR for automatic National ID text extraction",
      "Layered architecture with OOP principles",
    ],
    featured: true,
  },
  {
    slug: "velora-events",
    repoUrl: "https://github.com/Rama200327/Velora-Events",
    title: "VeloraEvents Platform",
    date: "Jun — Jul 2026",
    kind: "Event management",
    description:
      "An event management platform with role-based booking, reservation approval workflows and database-driven operations.",
    stack: ["ASP.NET Core MVC", "C#", "EF Core", "SQL Server"],
    highlights: ["Role-based booking", "Reservation approval workflows", "Database-driven operations"],
    featured: true,
  },
  {
    slug: "central-bank-ui",
    designUrl: "https://www.figma.com/design/Kv5ysfY2eWK14OGJLNxQJa/England-Central-Bank?node-id=2-3",
    title: "Central Bank Website",
    date: "Sep 2026",
    kind: "UI/UX design",
    description:
      "A modern banking platform designed and prototyped in Figma, focused on usability, accessibility and user-centred design.",
    stack: ["Figma", "Wireframing", "Prototyping"],
    featured: true,
  },
  {
    slug: "all-baby-essentials",
    title: "All Baby Essentials",
    date: "May 2026",
    kind: "E-commerce",
    description:
      "A full-stack e-commerce system with dynamic Razor views, Bootstrap & jQuery, and a relational SQL schema for inventory and orders — built following Agile/Scrum.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
  },
  {
    slug: "gold-price-tracker",
    repoUrl: "https://github.com/SanadRahahleh/gold-price-tracker",
    title: "Gold Price Tracker",
    date: "Apr 2026",
    kind: "Group capstone",
    description:
      "A real-time gold price tracker built as a team of three, with live API integration, dynamic UI updates and visual data display.",
    stack: ["JavaScript", "REST API", "HTML", "CSS"],
  },
  {
    slug: "ecommerce-db",
    repoUrl: "https://github.com/Rama200327/Mini-Project-Designing-a-Scalable-E-Commerce-Database-SQL-Server-",
    title: "E-Commerce Database Design",
    date: "Apr 2026",
    kind: "Database",
    description:
      "A scalable, normalized relational schema for an e-commerce platform, with relationships and query writing.",
    stack: ["SQL Server", "DDL", "DML"],
  },
  {
    slug: "github-viewer",
    repoUrl: "https://github.com/Rama200327/githubviwer",
    title: "GitHub Users Viewer",
    date: "Mar 2026",
    kind: "Mini app",
    description:
      "Fetches and displays GitHub user data with async/await, error handling and dynamic card rendering.",
    stack: ["JavaScript", "Fetch API"],
  },
  {
    slug: "smart-directory",
    title: "Smart User Directory",
    date: "Mar 2026",
    kind: "Mini app",
    description: "Real-time search, filtering and dynamic rendering of user data through DOM manipulation.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Back-end / .NET", items: ["C#", "ASP.NET Core", "ASP.NET MVC", "EF Core", "Dependency Injection", "Repository Pattern"] },
  { group: "Database", items: ["SQL Server", "DDL & DML", "Design & Normalization", "Query Writing"] },
  { group: "Front-end", items: ["HTML5", "CSS3", "JavaScript ES6+", "Razor", "Bootstrap", "jQuery", "WebSocket"] },
  { group: "JavaScript — Advanced", items: ["Fetch / REST APIs", "Async/Await", "Local & Session Storage", "Regex", "Error Handling"] },
  { group: "Core concepts", items: ["OOP", "RESTful APIs", "Responsive Design", "Debugging"] },
  { group: "Tools & workflow", items: ["Git & GitHub", "VS Code", "Notion", "Code Review", "Agile / Scrum"] },
];

export const softSkills: { name: string; description: string }[] = [
  { name: "Problem-solving", description: "I break big problems into small, clear steps and work through them until they're solved." },
  { name: "Self-learning", description: "I pick up new tools quickly — from Harvard's CS50 to ASP.NET Core and Figma." },
  { name: "Clear communication", description: "I explain technical ideas in plain words to teammates, testers and users." },
  { name: "Time management", description: "I delivered 40+ tasks and projects on schedule during my Orange internship." },
  { name: "Team collaboration", description: "I work well in Agile teams, sharing work through GitHub and Notion boards." },
];

export const stats = [
  { value: "8", label: "Projects built" },
  { value: "3", label: "Roles & internships" },
  { value: "40+", label: "Internship tasks delivered" },
];


export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency (TOEFL)" },
];
