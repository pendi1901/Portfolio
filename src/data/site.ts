export const profile = {
  name: "Ritvik Pendyala",
  first: "Ritvik",
  last: "Pendyala",
  location: "Raleigh, NC",
  email: "ritvikhuntsjobs@gmail.com",
  phone: "(984) 998-0087",
  photo: "/images/home1.jpeg",
  roles: [
    "Backend Engineer",
    "Agentic AI Engineer",
    "MS CS @ NC State",
    "FIDE Master",
  ],
  tagline:
    "Backend and agentic AI engineer. Two years at HCL Software building MCP-based agent systems, AI-driven test automation, and Java/Spring platforms for enterprise QA teams.",
  summary:
    "Now an MS Computer Science student at NC State, looking for a Summer 2027 software engineering internship in backend, full-stack, or AI.",
  availability: "Open to Summer 2027 SWE internships",
  socials: {
    github: "https://github.com/pendi1901",
    linkedin: "https://www.linkedin.com/in/ritvik-pendyala-271425200/",
    twitter: "https://twitter.com/pendi1901",
    fide: "https://ratings.fide.com/profile/10800743",
  },
  resume: "/RitvikPendyala_Resume.pdf",
};

export const stats = [
  { value: "2+", label: "Years shipping production systems" },
  { value: "1M+", label: "Legacy test assets migrated" },
  { value: "50+", label: "Enterprise clients served" },
  { value: "FM", label: "FIDE Master, 1695 peak" },
];

export const education = [
  {
    school: "North Carolina State University",
    degree: "Master of Computer Science",
    place: "Raleigh, NC",
    period: "Expected May 2028",
    detail: "Graduate coursework in systems, AI, and software engineering.",
    logo: null as string | null,
    current: true,
  },
  {
    school: "IIIT Delhi",
    degree: "B.Tech, Computer Science and Engineering",
    place: "New Delhi, India",
    period: "May 2024",
    detail: "Cumulative GPA 7.62 / 10. Research at TavLab and MIDAS.",
    logo: "/images/iiitd2.png",
    current: false,
  },
];

export const experience = [
  {
    company: "HCL Software",
    team: "DevOps Test",
    role: "Software Development Engineer - 2",
    period: "Aug 2024 — Aug 2026",
    span: "2 yrs",
    logo: null as string | null,
    summary:
      "Built the AI layer of an enterprise test automation suite — an MCP-based browser agent, a self-healing test repair pipeline, and a Java/Spring migration platform.",
    highlights: [
      {
        title: "Vulcan — MCP browser automation engine",
        body: "Architected an engine that reads live application URLs, DOM state, and natural-language testing intent to generate regression-ready end-to-end UI tests, replacing manual record-and-playback workflows and cutting test creation effort by 80%+.",
      },
      {
        title: "Scenario generation pipeline",
        body: "Transformed website content, user journeys, and product context into parent scenarios, edge-case sub-scenarios, assertions, and reusable test steps — surfacing flows routinely missed during manual test planning.",
      },
      {
        title: "Automated test repair",
        body: "Detects UI test failures caused by post-deployment DOM, locator, and flow changes, then applies AI-assisted repair with deterministic fallbacks to fix broken tests without a full re-recording.",
      },
      {
        title: "Record-after-playback",
        body: "Replays an existing UI test to any target step and resumes recording from the restored browser state, letting teams append validations and extend long regression flows — 70%+ less repetitive maintenance.",
      },
      {
        title: "Morpheus — Java/Spring migration platform",
        body: "Led development of a platform that transformed 1M+ legacy XML test assets into a YAML-backed server architecture with validation, rollback, and audit workflows, cutting migration effort by 95%+ for 50+ enterprise clients.",
      },
      {
        title: "Chatbot MCP server",
        body: "Delivered natural-language test orchestration so QA and engineering teams can trigger executions, query migrated assets, monitor failures, and inspect generated tests conversationally.",
      },
    ],
    stack: ["Java", "Spring Boot", "Spring AI", "MCP", "TypeScript", "Playwright", "RabbitMQ", "Kubernetes"],
  },
  {
    company: "TavLab, IIIT Delhi",
    team: "Prof. Tavpritesh Sethi",
    role: "Research Intern",
    period: "Aug 2022 — May 2023",
    span: "10 mos",
    logo: "/images/iiitd2.png",
    summary:
      "Year-long interdisciplinary study on AI-driven modeling of inflammatory bowel disease progression, integrating healthcare data with computational analysis.",
    highlights: [
      {
        title: "ECCO'25 publication",
        body: "Co-authored a peer-reviewed paper in the Journal of Crohn's and Colitis on modeling IBD progression.",
      },
      {
        title: "Clinical decision support",
        body: "Built cross-platform tooling that analyzed patient inputs to distinguish Crohn's disease from intestinal tuberculosis for AIIMS clinicians.",
      },
    ],
    stack: ["Python", "TensorFlow", "Pandas", "Flutter"],
  },
  {
    company: "Kalakumbh",
    team: "Mobile",
    role: "Flutter Development Intern",
    period: "May 2023 — May 2024",
    span: "1 yr",
    logo: "/images/kalakumbh copy.png",
    summary:
      "Shipped cross-platform mobile features end to end, from design handoff through Play Store and App Store release.",
    highlights: [
      {
        title: "Cross-platform delivery",
        body: "Built and maintained Flutter surfaces backed by Firebase, owning state management, offline behavior, and release engineering.",
      },
    ],
    stack: ["Flutter", "Dart", "Firebase"],
  },
  {
    company: "Auriga Innovative Labs",
    team: "Engineering",
    role: "Software Development Intern",
    period: "May 2022 — Aug 2022",
    span: "4 mos",
    logo: "/images/Untitled design.png",
    summary:
      "First production codebase — backend services and internal tooling alongside the core engineering team.",
    highlights: [
      {
        title: "Backend services",
        body: "Implemented REST endpoints and internal tooling, and learned the review-and-release discipline that shaped everything after.",
      },
    ],
    stack: ["Node.js", "MySQL", "REST"],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  period: string;
  year: string;
  tags: string[];
  category: "Full-stack" | "ML" | "Systems";
  featured?: boolean;
  accent: string;
  cover: string | null;
  role: string;
  context: string;
  /** Collaborators, for projects built with other people. */
  team?: { name: string; href?: string }[];
  links: ProjectLink[];
  advisor?: { name: string; href?: string };
  /** Optional measured outcomes rendered as a results table on the detail page. */
  results?: { label: string; value: string; note?: string }[];
  /** Long-form paragraphs for the detail page. */
  overview: string[];
  /** What was actually built, broken out. */
  highlights: { title: string; body: string }[];
  /** Optional grouped stack breakdown for the detail page. */
  stackDetail?: { label: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "soundboard",
    name: "Soundboard",
    blurb:
      "A series graph for albums and EPs: track-by-track community ratings, personal ratings, and listener-heat context.",
    period: "2026",
    year: "2026",
    tags: ["Next.js 16", "TypeScript", "Prisma", "Supabase", "Postgres", "Recharts", "Tailwind"],
    category: "Full-stack",
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
    cover: null,
    role: "Solo — design, frontend, API, and schema",
    context: "Personal project, ongoing",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/Soundboard" }],
    overview: [
      "Soundboard plots an album as a series graph. Instead of collapsing a record into a single number, every track becomes a point on a line, so the shape of an album — the slow build, the mid-record sag, the run of three perfect songs — becomes something you can actually see and compare.",
      "The graph runs in three modes: community scores aggregated from every rating saved to the database, your own personal ratings, and a listener-heat view that provides popularity context alongside quality. The design principle is a clean separation of ownership — the live music catalog owns identity, track order, durations, and artwork; Soundboard owns ratings; listener-stat style metrics stay secondary context and never drive the primary view.",
      "The homepage seeds live from the catalog rather than a checked-in fixture, currently resolving Radiohead, Ye, J. Cole, Alvvays, and Charli xcx — including handling Kanye West's catalog identity as Ye. A local multi-artist catalog remains in the repo purely as a fallback when the live provider is unavailable.",
    ],
    highlights: [
      {
        title: "On-demand catalog hydration",
        body: "No full music catalog is stored locally. Server-side API routes call the live catalog provider with a proper User-Agent, normalize responses, and lean on Next fetch revalidation for lightweight caching. The UI loads the album/EP list first, prioritizes the selected release's tracklist, then hydrates the rest of the artist through a polite background queue so a cold artist page is usable almost immediately.",
      },
      {
        title: "Ratings that outlive the session",
        body: "Community scores hydrate from saved ratings in Postgres rather than living in local session state. Profile-specific track ratings flow through Prisma, so your ratings follow your account instead of your browser.",
      },
      {
        title: "Supabase auth wired to profile identity",
        body: "Sign-up takes a username, email, and password; login accepts either the username or the linked email, with the email kept for recovery. The browser sends the Supabase access token to Soundboard's API routes, the server resolves the signed-in user, and that Supabase user id becomes the Soundboard profile id before any rating is loaded or saved.",
      },
      {
        title: "Artist workspace",
        body: "A persistent selected-release summary, a dedicated discography rail, and an explicit album end cap — so navigating a deep discography never loses your place. Cover Art Archive artwork renders directly from release-group IDs.",
      },
    ],
    stackDetail: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Recharts", "local shadcn-style primitives"] },
      { label: "Data", items: ["Prisma 7", "Supabase Postgres", "pg adapter"] },
      { label: "Auth", items: ["Supabase email/password", "access-token-backed API routes"] },
    ],
  },
  {
    slug: "huddl",
    name: "Huddl",
    blurb:
      "A collaborative coding platform with real-time multi-user execution on a Dockerized Go judge.",
    period: "Aug 2023 — Dec 2023",
    year: "2023",
    tags: ["Next.js", "PostgreSQL", "Go", "Docker", "WebSockets", "Ollama"],
    category: "Full-stack",
    featured: true,
    accent: "from-sky-500 to-cyan-400",
    cover: null,
    role: "Full-stack",
    context: "Semester project",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901" }],
    overview: [
      "Huddl is a collaborative coding platform built for peer learning and mock interview scenarios — the two situations where coding alone in an editor stops being enough.",
      "The core is a room: several people in the same file at the same time, running the same code against the same judge, with a chat channel alongside it. Execution happens on a Dockerized Go judge, so untrusted submissions run in isolation rather than on the application server.",
    ],
    highlights: [
      {
        title: "Real-time collaborative rooms",
        body: "Live WebSocket chat alongside the editor allows simultaneous editing, discussion, and pair-programming workflows — participants see each other work rather than taking turns.",
      },
      {
        title: "Dockerized Go judge",
        body: "Multi-user code execution and evaluation runs through a containerized judge written in Go, keeping submitted code sandboxed and results reproducible across participants.",
      },
      {
        title: "AI assistant for contextual hints",
        body: "Integrated the Ollama API running Llama 3b to give contextual code hints rather than solutions, track KPIs across sessions, and generate AI-driven insights on where a user was actually improving.",
      },
    ],
  },
  {
    slug: "f1-race-predictor",
    name: "Formula 1 Race Results Predictor",
    blurb:
      "A machine-learning approach to predicting Formula 1 Grand Prix outcomes, trained on every race from 1950 to 2022.",
    period: "Mar 2023 — May 2023",
    year: "2023",
    tags: ["Python", "scikit-learn", "Pandas", "Flask", "Web scraping"],
    category: "ML",
    featured: true,
    accent: "from-rose-500 to-orange-400",
    cover: "/images/Holocron (1).png",
    role: "Data collection, feature engineering, modeling",
    context: "Research project under Prof. Anubha Gupta, IIIT Delhi",
    team: [{ name: "Jaideep Guntupalli", href: "https://imjaideep.com/projects/f1-predictor" }],
    links: [
      { label: "Website", href: "https://f1-predictor.gjd.one/" },
      { label: "GitHub", href: "https://github.com/JaideepGuntupalli/f1-predictor" },
    ],
    advisor: { name: "Prof. Anubha Gupta", href: "https://www.iiitd.ac.in/anubha" },
    results: [
      { label: "SVC", value: "0.95", note: "best performing" },
      { label: "Random Forest", value: "0.94" },
      { label: "Logistic Regression", value: "0.93" },
      { label: "K-Nearest Neighbors", value: "0.93" },
      { label: "Gaussian Naive Bayes", value: "0.87" },
      { label: "Baseline, pre-feature-engineering", value: "0.50 — 0.68" },
    ],
    overview: [
      "Predicting a Formula 1 race winner is usually done by argument — pundits, form guides, gut feel. This project set out to do it with data instead: propose a machine-learning methodology for predicting the next Grand Prix winner, run a robust analysis of which factors actually contribute, and predict a band of likely winners across varying conditions.",
      "The dataset spans the entire history of the sport. Race information, results, and standings from 1950 to 2022 came from the Ergast repository; qualifying data was scraped from the official Formula 1 website; and weather for each race was assembled from Wikipedia and OpenWeatherMap.",
      "The headline finding was how much home advantage matters. Running a race in your own country turned out to have an outsized effect on outcome — one of those results that feels obvious once you see it and invisible until you measure it.",
    ],
    highlights: [
      {
        title: "Feature engineering was the whole game",
        body: "Off raw inputs, the models sat at 0.50 to 0.68 accuracy — not good enough to be interesting. Engineered features pushed the best model to 0.95. The lesson was that the choice of model mattered far less than what the model was allowed to see.",
      },
      {
        title: "Confidence and DNF indices",
        body: "Built driver and constructor DNF indices, plus driver and constructor confidence scores measured as the percentage of races completed without a DNF. Reliability history turned out to carry real predictive signal that a finishing-position average washes out.",
      },
      {
        title: "Context features",
        body: "Layered in home team advantage, circuit-specific performance, and driver nationality, experience, and historical record — the situational factors that separate a driver's general form from their form at this particular race.",
      },
      {
        title: "Six models, cross-validated",
        body: "Trained and compared Logistic Regression, Decision Tree, Random Forest, SVM, Gaussian Naive Bayes, and K-Nearest Neighbors, using k-fold cross-validation, hyperparameter tuning, and feature selection to pick between them.",
      },
    ],
    stackDetail: [
      { label: "Data", items: ["Ergast repository (1950–2022)", "F1.com qualifying scrape", "Wikipedia + OpenWeatherMap"] },
      { label: "Modeling", items: ["scikit-learn", "k-fold cross-validation", "hyperparameter tuning", "feature selection"] },
      { label: "Delivery", items: ["Python", "Flask", "Pandas"] },
    ],
  },
  {
    slug: "aiims-tuberculosis-detection",
    name: "AIIMS Tuberculosis Detection",
    blurb:
      "A cross-platform clinical interface that predicts the likelihood of Crohn's disease versus intestinal tuberculosis.",
    period: "2022 — 2023",
    year: "2023",
    tags: ["Flutter", "Python", "TensorFlow"],
    category: "ML",
    accent: "from-emerald-500 to-teal-400",
    cover: "/images/AIIMS TB App (7).png",
    role: "ML modeling and cross-platform app",
    context: "TavLab, IIIT Delhi — with AIIMS",
    links: [],
    advisor: { name: "Dr. Tavpritesh Sethi", href: "https://www.iiitd.ac.in/tavpritesh" },
    overview: [
      "Crohn's disease and intestinal tuberculosis present so similarly that distinguishing them is a genuine diagnostic problem — and the treatments diverge sharply. Getting it wrong costs patients months.",
      "This was the applied arm of the research I did at TavLab under Dr. Tavpritesh Sethi, alongside the work that became the ECCO'25 publication. It leverages machine learning over patient inputs to predict which of the two conditions is more likely, delivered through a cross-platform interface clinicians could actually use rather than a notebook.",
    ],
    highlights: [
      {
        title: "Model over structured patient inputs",
        body: "Analyzed user-supplied clinical inputs with machine learning algorithms to produce a likelihood across the two conditions.",
      },
      {
        title: "Cross-platform delivery",
        body: "Built the interface in Flutter so the same tool ran on Android and iOS, putting the model in front of clinicians instead of leaving it in a research environment.",
      },
      {
        title: "Part of a year-long interdisciplinary study",
        body: "Fed into the wider TavLab work on AI-driven modeling of inflammatory bowel disease progression, co-authored as a peer-reviewed publication in the Journal of Crohn's and Colitis (ECCO'25).",
      },
    ],
  },
  {
    slug: "holocron-oauth",
    name: "Holocron Auth",
    blurb:
      "A user-friendly OAuth system for identity verification over mobile number and email, with granular control over what each linked app can see.",
    period: "2023",
    year: "2023",
    tags: ["TypeScript", "Next.js", "tRPC", "Prisma", "MySQL", "Flutter", "Twilio", "AWS S3"],
    category: "Full-stack",
    accent: "from-indigo-500 to-blue-400",
    cover: "/images/Holocron.png",
    role: "Development — four-person team",
    context: "Course project at IIIT Delhi, under Prof. Arun Balaji",
    team: [
      { name: "Jaideep Guntupalli", href: "https://imjaideep.com/projects/holocron-auth" },
      { name: "Ritvik Pendyala" },
      { name: "Prakhar Bhargava" },
      { name: "Tejdeep Chippa" },
    ],
    links: [
      { label: "Website", href: "https://holocron-auth.gjd.one/" },
      { label: "APKs", href: "https://holocron-auth.gjd.one/download-app" },
      { label: "GitHub", href: "https://github.com/Holocron-Auth" },
    ],
    advisor: { name: "Prof. Arun Balaji", href: "https://faculty.iiitd.ac.in/~arunb/" },
    results: [
      { label: "Simultaneous users in a live attack", value: "200+", note: "held for a week" },
      { label: "Course ranking", value: "1st", note: "highest-scoring project" },
    ],
    overview: [
      "Holocron is a centralized OAuth service that lets developers add secure identity verification — over mobile number or email — without building an auth system of their own.",
      "The part we cared most about was user agency. Most OAuth flows ask you to approve a wall of permissions once and then never mention it again. Holocron keeps the user in control after the fact: you can see every app you've linked, see a security score for each one, restrict exactly which fields an app can read, and disconnect any of them whenever you want.",
      "It held up under real adversarial conditions. Over the course of a week, the deployed system withstood a coordinated cyberattack from more than 200 simultaneous users, and it finished as the highest-scoring project in the course.",
    ],
    highlights: [
      {
        title: "OTP over SMS and email",
        body: "Fast one-time-password delivery for both mobile and email verification, with Twilio handling SMS and Nodemailer handling mail.",
      },
      {
        title: "Transparent app linking",
        body: "Users see every third-party app connected to their identity, with a security score for each one and a one-click disconnect — so consent stays revocable rather than permanent.",
      },
      {
        title: "Granular access controls",
        body: "Rather than an all-or-nothing grant, users choose selectively which pieces of their data each application is allowed to read.",
      },
      {
        title: "Type-safe end to end",
        body: "Built on tRPC over a Next.js server with Prisma against MySQL, so the contract between client and API was checked at compile time rather than trusted by convention.",
      },
      {
        title: "Web and Android clients",
        body: "A Next.js, React, and Tailwind web UI alongside a Flutter Android app, both talking to the same authentication service.",
      },
      {
        title: "Survived a live attack",
        body: "Withstood a cyberattack from 200+ simultaneous users sustained over a week — the security scoring, encryption, and multi-factor paths tested under genuine load rather than in a demo.",
      },
    ],
    stackDetail: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Flutter (Android)"] },
      { label: "Backend", items: ["tRPC", "Next.js server", "Twilio", "Nodemailer"] },
      { label: "Data", items: ["MySQL on PlanetScale", "Prisma ORM", "AWS S3"] },
    ],
  },
  {
    slug: "tamil-nlp",
    name: "Tamil NLP",
    blurb:
      "Annotation guidelines, evaluation metrics, and a management portal for Tamil translation and transliteration.",
    period: "2023",
    year: "2023",
    tags: ["Python", "NLP", "APIs", "React"],
    category: "ML",
    accent: "from-amber-500 to-yellow-400",
    cover: "/images/AIIMS TB App (6).png",
    role: "Annotation design, evaluation, and portal interface",
    context: "Under Prof. Rajiv Ratn Shah, IIIT Delhi",
    links: [],
    advisor: { name: "Prof. Rajiv Ratn Shah", href: "https://www.iiitd.ac.in/rajivratn" },
    overview: [
      "Low-resource language work lives or dies on annotation quality. Before you can evaluate a Tamil translation system, you need agreement on what a correct output even looks like — and that agreement has to be written down precisely enough that different annotators reach the same verdict.",
      "This project covered that full loop: drafting the guidelines, wiring up the evaluation, and building the interface that made the results legible to the people running the work.",
    ],
    highlights: [
      {
        title: "Annotation guidelines",
        body: "Created annotation guidelines for Tamil translation and transliteration, drawing on a range of existing sources to define consistent judgments.",
      },
      {
        title: "Evaluation metrics",
        body: "Through API integration and data analysis, computed metrics including BLEU score and exact match to quantify system output against the annotated references.",
      },
      {
        title: "Portal interface",
        body: "Developed a user-friendly interface for the Tamil NLP portal, enabling effective management of runs and viewing of results.",
      },
    ],
  },
  {
    slug: "online-retail-store",
    name: "Online Retail Store",
    blurb:
      "A full retail storefront on Flask and MySQL handling complex SQL operations and concurrent multi-user login.",
    period: "2022",
    year: "2022",
    tags: ["Flask", "MySQL", "HTML/CSS"],
    category: "Full-stack",
    accent: "from-cyan-500 to-blue-400",
    cover: "/images/AIIMS TB App (1).png",
    role: "Full-stack",
    context: "Database systems coursework, IIIT Delhi",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/ORS_Project-1/tree/master" }],
    advisor: { name: "Prof. Mukesh Mohania", href: "https://www.iiitd.ac.in/mukesh" },
    overview: [
      "A fully working online retail store built on Flask, MySQL, and plain HTML and CSS — deliberately without an ORM, so the SQL stayed visible.",
      "The point of the project was the database layer rather than the storefront: modeling a real catalog, orders, and users, then writing the queries that hold it together under concurrent access.",
    ],
    highlights: [
      {
        title: "Complex SQL operations",
        body: "Handled non-trivial relational operations directly against MySQL, using the robustness of the database rather than pushing logic into the application layer.",
      },
      {
        title: "Session and user state",
        body: "Maintained user state throughout the shopping flow and supported multi-user login, so several sessions could operate against the store at once without stepping on each other.",
      },
    ],
  },
  {
    slug: "assembler-and-simulator",
    name: "Assembler & Simulator",
    blurb:
      "An assembler and simulator in Python that transforms assembly input into machine code and executes it.",
    period: "2022",
    year: "2022",
    tags: ["Python", "Computer Architecture"],
    category: "Systems",
    accent: "from-slate-400 to-zinc-500",
    cover: "/images/AIIMS TB App (4).png",
    role: "Implementation",
    context: "Computer architecture coursework, IIIT Delhi",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/Simulator" }],
    advisor: { name: "Prof. Sujay Deb", href: "https://www.iiitd.ac.in/sdeb" },
    overview: [
      "An intricately designed assembler and simulator implemented in Python, capable of seamlessly transforming assembly language inputs into their corresponding machine code outputs.",
      "Writing both halves is what makes the exercise worthwhile — the assembler forces you to be exact about encoding, and the simulator immediately punishes you when you are not. Every instruction you emit is one you then have to execute.",
    ],
    highlights: [
      {
        title: "Assembler",
        body: "Parses assembly source and emits the corresponding machine code, handling instruction encoding and the full instruction set.",
      },
      {
        title: "Simulator",
        body: "Executes the generated machine code through the full instruction cycle, with register and memory state inspection at each step.",
      },
    ],
  },
  {
    slug: "silver-arrows",
    name: "Silver Arrows",
    blurb:
      "A 1:10 scale Formula 1 car with high-torque DC motors, voice-controlled over Arduino and Bluetooth.",
    period: "2022",
    year: "2022",
    tags: ["Arduino", "C++", "Bluetooth"],
    category: "Systems",
    accent: "from-zinc-300 to-slate-400",
    cover: "/images/AIIMS TB App (2).png",
    role: "Build and firmware",
    context: "Under Prof. Richa Gupta, IIIT Delhi",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/Voice-Control-RC-Car" }],
    advisor: { name: "Prof. Richa Gupta", href: "https://www.iiitd.ac.in/richagupta" },
    overview: [
      "A realtime 1:10 scale Formula 1 car, powered by genuinely powerful DC motors on a 3.5-inch wheelbase, driven by voice rather than a controller. Design inspiration came from the Mercedes W12.",
      "Two Formula 1 projects in the same year was not an accident.",
    ],
    highlights: [
      {
        title: "Voice control over Bluetooth",
        body: "Responds to a specific set of voice commands, relayed to the car through Arduino and a Bluetooth module.",
      },
      {
        title: "Physical build",
        body: "Built around high-torque DC motors on a 3.5-inch wheelbase, with the chassis and livery modeled on the Mercedes W12.",
      },
    ],
  },
  {
    slug: "darthsaver-bot",
    name: "DarthSaver Bot",
    blurb:
      "A Telegram expense tracker that logs spending, sets budgets, and returns insights inside a chat thread.",
    period: "2022",
    year: "2022",
    tags: ["Python", "Telegram API"],
    category: "Systems",
    accent: "from-red-500 to-rose-400",
    cover: "/images/AIIMS TB App (8).png",
    role: "Solo",
    context: "Personal project",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/darthsaver" }],
    overview: [
      "An expense tracker built as a Telegram bot, on the theory that the only personal finance tool you actually use is the one that lives where you already are.",
      "No separate app to open and no dashboard to remember — you log a coffee in the same window where you are already texting.",
    ],
    highlights: [
      {
        title: "Track, budget, and report",
        body: "Logs expenses, sets budgets, and surfaces insights to streamline the financial management process — all through chat commands.",
      },
    ],
  },
  {
    slug: "will-hero-game",
    name: "The Will Hero Game",
    blurb:
      "A clone of the Will Hero mobile game built in Java and JavaFX, architected around object-oriented design.",
    period: "2022",
    year: "2022",
    tags: ["Java", "JavaFX", "OOP"],
    category: "Systems",
    accent: "from-lime-500 to-green-400",
    cover: "/images/AIIMS TB App (3).png",
    role: "Solo",
    context: "Advanced programming coursework, IIIT Delhi",
    links: [{ label: "GitHub", href: "https://github.com/pendi1901/The_WillHeroGame_FX" }],
    advisor: { name: "Prof. Vivek Kumar", href: "https://www.iiitd.ac.in/vivekk" },
    overview: [
      "A clone of the popular and exhilarating mobile game Will Hero, built in Java and JavaFX predominantly as an exercise in object-oriented design.",
      "Games are an unusually honest test of OOP: the entity hierarchy either holds up when you add a new enemy type, or it collapses and you rewrite it.",
    ],
    highlights: [
      {
        title: "Object-oriented architecture",
        body: "Built the game around an OOP entity model, with inheritance and polymorphism carrying the behavior differences between game objects.",
      },
      {
        title: "JavaFX rendering and game state",
        body: "Handled rendering, the game loop, and full game-state serialization so a run could be saved and restored.",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C / C++", "Dart"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Node.js", "REST APIs", "RabbitMQ", "PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    label: "AI / Automation",
    items: ["Spring AI", "MCP", "LLM APIs", "AI Agents", "Prompt Engineering", "Browser Automation", "Claude Code", "Codex"],
  },
  {
    label: "Frontend / DevOps",
    items: ["Next.js", "React", "Tailwind CSS", "Docker", "Kubernetes", "Git", "AWS", "GCP", "Flutter"],
  },
];

export const achievements = [
  {
    kind: "Research",
    title: "Journal of Crohn's and Colitis — ECCO'25",
    body: "Co-authored a peer-reviewed publication under Prof. Tavpritesh Sethi at TavLab, IIIT Delhi, on AI-driven modeling of inflammatory bowel disease progression — a year-long interdisciplinary study integrating healthcare data and computational analysis.",
    meta: "Peer-reviewed publication",
    href: null as string | null,
  },
  {
    kind: "Chess",
    title: "FIDE Master",
    body: "Titled by the World Chess Federation with a peak rating of 1695, and Joint 1st at the African Continental Youth Chess Championship. Still the sharpest training ground I know for calculating under pressure.",
    meta: "Joint 1st, African Continental Youth Championship",
    href: "https://ratings.fide.com/profile/10800743",
  },
];

export const interests = [
  {
    title: "Chess",
    body: "FIDE Master. Strategy under a clock, which turns out to be most of engineering.",
  },
  {
    title: "Football & F1",
    body: "Liverpool since 2010, plus basketball, cricket, and an unreasonable amount of Formula 1.",
  },
  {
    title: "Music",
    body: "Kanye and Kendrick on repeat, with a long indie tail — the reason Soundboard exists.",
  },
];
