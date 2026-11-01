import {
  Project,
  SkillCategory,
  EducationItem,
  CertificationItem,
  TrainingItem,
  AwardItem,
  LanguageItem,
} from "@/types";

export const personalInfo = {
  name: "Hannah K",
  monogram: "HK",
  title: "Computer Science and Engineering Student",
  institution: "Nandha College of Technology",
  institutionPeriod: "2023 – 2027",
  graduation: "May 2027",
  location: "Erode, Tamil Nadu, India",
  email: "hannahk78711@gmail.com",
  phone: "+91 7871144000",
  linkedin: "https://linkedin.com/in/hannah-k-04774a360/",
  github: "https://github.com/HANNAH-72",
  profileImage: "/images/hannah_profile.jpg",
  resumePath: "/Hannah_K_Resume.pdf",
  headline: "Building Intelligent Ideas Into Meaningful Digital Experiences.",
  shortBio:
    "I'm a Computer Science and Engineering student passionate about exploring technology, developing practical solutions, and turning ideas into meaningful projects.",
  aboutParagraphs: [
    "I am an undergraduate student pursuing my Bachelor of Engineering in Computer Science and Engineering at Nandha College of Technology, Erode (2023–2027). My technical journey is driven by an innate curiosity about how computational logic, data models, and embedded hardware converge to solve real-world challenges.",
    "Across my academic progression, I have developed foundational strength in data structures, core algorithms, and multi-paradigm programming across Python, Java, C, and C++. Concurrently, I actively explore applied domains including real-time sensor fusion, healthcare analytics dashboards, and scientific modeling.",
    "I value rigorous problem solving, disciplined continuous learning, and purposeful teamwork. Whether integrating millimeter-wave radar modules on microcontrollers or uncovering actionable patterns in health records, my focus remains on building reliable, well-engineered, and impactful systems.",
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Training", href: "#training" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Core Engineering",
    description: "Core languages and foundational computer science principles.",
    skills: [
      { name: "Python", categoryTag: "Core Language", highlight: true },
      { name: "Java", categoryTag: "Object-Oriented", highlight: true },
      { name: "C++", categoryTag: "Systems & Algorithms", highlight: true },
      { name: "C", categoryTag: "Low-level Systems" },
      { name: "JavaScript", categoryTag: "Web Scripting" },
      { name: "SQL", categoryTag: "Relational Queries", highlight: true },
      { name: "Data Structures", categoryTag: "Computer Science", highlight: true },
      { name: "HTML5 / CSS3", categoryTag: "Interface Structure" },
    ],
  },
  {
    title: "Data Analytics & Visualization",
    description: "Techniques and toolsets for data analysis, modeling, and business intelligence.",
    skills: [
      { name: "Power BI", categoryTag: "Business Intelligence", highlight: true },
      { name: "DAX", categoryTag: "Data Analysis Expressions", highlight: true },
      { name: "MATLAB", categoryTag: "Scientific Computing & Modeling", highlight: true },
      { name: "Data Visualization", categoryTag: "Insight Reporting" },
      { name: "Anomaly Detection", categoryTag: "Data Analytics" },
      { name: "Trend Analysis", categoryTag: "Data Analytics" },
    ],
  },
  {
    title: "Embedded Systems, IoT & AI",
    description: "Hardware integration, physical computing, and real-time sensor processing.",
    skills: [
      { name: "77 GHz mmWave Radar", categoryTag: "Automotive Sensor", highlight: true },
      { name: "Fog & Visibility Sensors", categoryTag: "Environmental Sensing" },
      { name: "ESP32", categoryTag: "Microcontroller", highlight: true },
      { name: "Raspberry Pi", categoryTag: "Single Board Computer" },
      { name: "Offline Sensor Fusion", categoryTag: "Edge Intelligence", highlight: true },
      { name: "Real-time Vehicle Detection", categoryTag: "Applied AI" },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    description: "Development environments, cloud ecosystems, and learning platforms.",
    skills: [
      { name: "VS Code", categoryTag: "Primary IDE", highlight: true },
      { name: "Eclipse", categoryTag: "Java IDE" },
      { name: "Google Cloud Platform", categoryTag: "Cloud Infrastructure" },
      { name: "Kaggle", categoryTag: "Data Community" },
      { name: "Microsoft Ecosystem", categoryTag: "Platform" },
      { name: "Infosys Springboard", categoryTag: "Technical Learning" },
      { name: "HP LIFE", categoryTag: "Professional Skills" },
      { name: "Nexora", categoryTag: "Learning Platform" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "vehicle-ai-pileup-avoidance",
    number: "01",
    title: "Automated Vehicle AI System to Avoid Pileup",
    year: "2025",
    category: "Embedded & AI",
    tagline: "Real-time highway collision prevention powered by multi-sensor edge intelligence",
    status: "Completed Prototype",
    technologies: [
      "Python",
      "C++",
      "77 GHz mmWave Radar",
      "Fog/Visibility Sensors",
      "ESP32",
      "Raspberry Pi",
    ],
    description:
      "A vehicle safety system engineered to mitigate devastating pileup collision risks through precise vehicle detection, distance/speed monitoring, and environmental visibility sensing.",
    detailedOverview:
      "Developed a real-time highway safety architecture utilizing 77 GHz mmWave radar and dedicated optical fog/visibility sensors. The system continually assesses leading vehicle proximity, relative velocity, and ambient atmospheric visibility. Designed to operate completely offline, the sensor fusion pipeline runs on an ESP32 / Raspberry Pi edge stack to trigger automated collision warnings even across remote stretches with poor or non-existent network coverage.",
    keyFeatures: [
      "Real-time vehicle detection using high-frequency 77 GHz mmWave radar reflections",
      "Continuous relative distance and velocity tracking under challenging conditions",
      "Atmospheric monitoring adapting alert thresholds for dense fog, heavy rain, and night driving",
      "Offline multi-sensor fusion processing executed directly on ESP32 & Raspberry Pi hardware",
      "Automated audio-visual collision warning engine for timely driver intervention",
    ],
    architecturePoints: [
      "Sensor Layer: 77 GHz mmWave Radar + Optical Fog/Visibility Transducers",
      "Edge Hardware: ESP32 for high-speed sensor polling; Raspberry Pi for decision algorithms",
      "Processing Logic: Real-time C++ state estimator and Python telemetry logger",
      "Alert Mechanism: Hardware interrupt buzzer & localized cockpit warning indicators",
    ],
    metrics: [
      { label: "Radar Frequency", value: "77 GHz" },
      { label: "Hardware Stack", value: "ESP32 + Pi" },
      { label: "Operation Mode", value: "100% Offline Edge" },
    ],
  },
  {
    id: "ai-healthcare-disease-analysis",
    number: "02",
    title: "AI Healthcare and Disease Analysis",
    year: "2024",
    category: "Data & Analytics",
    tagline: "Interactive medical intelligence dashboard for patient metrics and anomaly detection",
    status: "Completed System",
    technologies: [
      "Power BI",
      "DAX",
      "Data Visualization",
      "Data Modeling",
      "Statistical Validation",
    ],
    description:
      "A healthcare data analytics system focused on monitoring clinical indicators, analyzing historical patient records, detecting statistical anomalies, and delivering visual reports.",
    detailedOverview:
      "Engineered an interactive Power BI intelligence platform backed by custom DAX formulas to evaluate multidimensional health datasets. The platform tracks patient vital trends over time, isolates statistical anomalies in health markers, and correlates symptoms against historical baselines. Tailored visual reports provide clear clinical decision support, translating dense tables into intuitive dashboards.",
    keyFeatures: [
      "Multi-metric patient vital monitoring across longitudinal datasets",
      "Custom DAX calculations for dynamic baseline comparisons and moving averages",
      "Automated anomaly flag identification when readings breach safe thresholds",
      "Comparative cohort and demographic risk distribution visualization",
      "Interactive drill-down reports designed for rapid clinical insight generation",
    ],
    architecturePoints: [
      "Data Ingestion: Structured patient health logs and clinical observations",
      "Semantic Modeling: Normalized star-schema with relational dimension tables",
      "Calculations: DAX measures for anomaly flags, moving averages, and variance",
      "Interface: High-contrast Power BI interactive dashboards with filter slices",
    ],
    metrics: [
      { label: "Analytics Tool", value: "Power BI + DAX" },
      { label: "Analysis Scope", value: "Trend & Anomaly" },
      { label: "Output Format", value: "Interactive BI Suite" },
    ],
  },
  {
    id: "ozonolysis-water-purification",
    number: "03",
    title: "Ozonolysis for Water Purification",
    year: "2023",
    category: "Scientific Computing",
    tagline: "Computational modeling and laboratory investigation of organic contaminant oxidation",
    status: "Research Study",
    technologies: [
      "Python",
      "MATLAB",
      "Data Analysis",
      "Mathematical Modeling",
      "Laboratory Tools",
    ],
    description:
      "A research-oriented project exploring ozone-driven oxidation methods to break down organic pollutants and contaminants in water, enhancing safety and purification efficacy.",
    detailedOverview:
      "Conducted a systematic investigation into the application of ozonolysis reactions for water purification. The research combined empirical laboratory data with computational modeling using Python and MATLAB to study reaction kinetics, contaminant breakdown curves, and oxidation efficiency. The analysis verified significant reductions in harmful organic compounds and modeled optimal ozone dosing parameters.",
    keyFeatures: [
      "Investigation of ozone oxidative cleavage pathways for persistent organic pollutants",
      "Kinetic reaction rate modeling and degradation curve plotting using MATLAB",
      "Empirical data verification and purification trend analysis in Python",
      "Laboratory parameter correlation (pH, contact time, ozone concentration)",
      "Structured documentation of contaminant reduction methodologies",
    ],
    architecturePoints: [
      "Experimental Setup: Controlled ozone contact chamber with sampling intervals",
      "Data Acquisition: Spectrophotometric and chemical contaminant readings",
      "Computational Tools: MATLAB ODE solvers for kinetic rates; Python NumPy/Matplotlib",
      "Deliverable: Research findings and mathematical degradation curve models",
    ],
    metrics: [
      { label: "Modeling Suite", value: "MATLAB & Python" },
      { label: "Methodology", value: "Oxidative Cleavage" },
      { label: "Focus Area", value: "Organic Contaminants" },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "nandha-engineering",
    institution: "Nandha College of Technology",
    qualification: "Bachelor of Engineering — Computer Science and Engineering",
    period: "Sep 2023 – May 2027",
    location: "Erode, Tamil Nadu",
    isCurrent: true,
    highlights: [
      "Rigorous core curriculum in Data Structures, Object-Oriented Programming, and Systems",
      "Hands-on project work in Embedded AI, Vehicle Safety Systems, and Data Analytics",
      "Active participant and award winner in technical project symposiums and paper presentations",
    ],
  },
  {
    id: "jaycees-matric",
    institution: "Jaycees Matric. Hr. Sec. School",
    qualification: "Higher Secondary Education",
    period: "2021 – 2023",
    location: "Erode, Tamil Nadu",
    isCurrent: false,
    highlights: [
      "Strong foundation in Mathematics, Physics, and Computer Science",
      "Demonstrated academic excellence and problem-solving discipline",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-oci",
    issuer: "Oracle",
    name: "OCI – Oracle Cloud Infrastructure by AI Foundation",
    category: "Cloud & AI",
  },
  {
    id: "cert-nptel-cloud",
    issuer: "NPTEL",
    name: "Cloud Computing",
    level: "Elite",
    category: "Cloud & AI",
  },
  {
    id: "cert-nptel-affective",
    issuer: "NPTEL",
    name: "Affective Computing",
    level: "Elite",
    category: "Cloud & AI",
  },
  {
    id: "cert-nptel-python",
    issuer: "NPTEL",
    name: "The Joy of Computing using Python",
    level: "Elite + Silver",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-nptel-java",
    issuer: "NPTEL",
    name: "Programming in Java",
    level: "Elite + Silver",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-hr-sql",
    issuer: "HackerRank",
    name: "SQL",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-hr-js",
    issuer: "HackerRank",
    name: "JavaScript",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-hr-css",
    issuer: "HackerRank",
    name: "CSS",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-hr-java",
    issuer: "HackerRank",
    name: "Java",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-hr-ps",
    issuer: "HackerRank",
    name: "Problem Solving",
    category: "Programming & Problem Solving",
  },
  {
    id: "cert-learning-platforms",
    issuer: "Continuous Learning Platforms",
    name: "Kaggle, HP LIFE, Microsoft, Infosys, Nexora",
    category: "Learning Platform",
  },
];

export const trainingWorkshops: TrainingItem[] = [
  {
    id: "train-cyber-security",
    title: "Cyber Security Training",
    institution: "Bannari Amman Institute of Technology",
    focus: "Network security fundamentals, defensive protocols, and vulnerability analysis.",
    tags: ["Cyber Security", "Network Protocols", "Defensive Systems"],
  },
  {
    id: "train-additive-manufacturing",
    title: "Hands-on Training in Additive Manufacturing",
    institution: "Sathyabama Institute of Science and Technology",
    focus: "3D prototyping methodologies, rapid manufacturing workflows, and material layering.",
    tags: ["Additive Manufacturing", "Hardware Prototyping", "Rapid Design"],
  },
  {
    id: "train-fullstack-trains",
    title: "Full Stack Web Development Training",
    institution: "Training Trains Software Technologies",
    focus: "Modern frontend and backend architectures, database connectivity, and responsive UI.",
    tags: ["Full Stack", "Web Development", "Databases"],
  },
  {
    id: "train-fullstack-azizen",
    title: "Advanced Full Stack Web Development",
    institution: "Azizen Solutions",
    focus: "Advanced web application engineering, REST APIs, and modern development workflows.",
    tags: ["Advanced Web", "API Design", "Architecture"],
  },
];

export const awards: AwardItem[] = [
  {
    id: "award-best-performer",
    title: "Best Performer of the Year",
    year: "2025",
    category: "Academic & Institutional Excellence",
    description:
      "Conferred for outstanding dedication, technical achievements, and holistic excellence across academic and practical domains.",
  },
  {
    id: "award-winner-projects",
    title: "Winner in Projects",
    category: "Technical Innovation",
    description:
      "Awarded first place recognition for designing and delivering robust, innovative engineering prototypes.",
  },
  {
    id: "award-winner-papers",
    title: "Winner in Papers",
    category: "Technical Research & Presentation",
    description:
      "Recognized with first place for presenting structured technical research and clear scientific findings.",
  },
  {
    id: "award-winner-culturals",
    title: "Winner in Culturals",
    category: "Extracurricular & Team Leadership",
    description:
      "Celebrated for dynamic participation, creative expression, and collaborative leadership in cultural events.",
  },
];

export const languages: LanguageItem[] = [
  { language: "Tamil", proficiency: "Native", percentage: 100 },
  { language: "English", proficiency: "Professional", percentage: 90 },
  { language: "Hindi", proficiency: "Intermediate", percentage: 65 },
  { language: "Hebrew", proficiency: "Basic", percentage: 35 },
];
