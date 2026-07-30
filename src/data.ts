import { Project, TimelineItem, SkillCategory } from "./types";

export const BRAND_NAME = "Diya Patel";
export const BRAND_ROLE = "QA Engineer | Manual Testing | Automation Testing | API Testing";

export const BIO_PARAGRAPHS: string[] = [
  "Results-driven MCA student with project-based experience in manual testing, automation testing, API testing, and mobile application testing. Skilled in designing and executing test cases, validating end-to-end workflows, identifying software defects, and preparing structured bug reports.",
  "Hands-on experience with Selenium WebDriver, Katalon Studio, Appium, Postman, and Mantis Bug Tracker. Familiar with SDLC, STLC, functional testing, regression testing, integration testing, and cross-browser testing.",
  "Knowledge of Java, Python, PHP, HTML, CSS, and MySQL enables effective root cause analysis and collaboration with development teams. Seeking an Automation QA Engineer opportunity to contribute to reliable, secure, and high-quality software delivery.",
];

export const CAREER_OBJECTIVE =
  "Seeking an Automation QA Engineer opportunity to contribute to reliable, secure, and high-quality software delivery.";

export const CONTACT_INFO = {
  phone: "+91 9558168726",
  email: "pdiya2103@gmail.com",
  location: "Gandhinagar, Gujarat",
  linkedin: "https://linkedin.com/in/diya-patel-863417281",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Testing Skills",
    iconName: "CheckSquare",
    skills: [
      "Manual Testing",
      "Automation Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "API Testing",
      "Mobile App Testing",
      "Cross-Browser Testing",
    ],
  },
  {
    category: "Testing Tools",
    iconName: "Wrench",
    skills: [
      "Selenium WebDriver",
      "Katalon Studio",
      "Appium",
      "Postman",
      "Mantis Bug Tracker",
    ],
  },
  {
    category: "QA Methodologies",
    iconName: "GitBranch",
    skills: [
      "SDLC",
      "STLC",
      "Agile",
      "Test Planning",
      "Requirement Analysis",
      "Test Scenario Design",
      "Test Case Writing",
      "Test Execution",
      "Bug Reporting",
      "Defect Tracking",
      "Defect Verification",
    ],
  },
  {
    category: "Programming Skills",
    iconName: "Code",
    skills: ["Java", "Python", "PHP"],
  },
  {
    category: "Web Technologies",
    iconName: "Globe",
    skills: ["HTML", "CSS"],
  },
  {
    category: "Database",
    iconName: "Database",
    skills: ["MySQL"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ebook-store",
    title: "Online E-Book Store Management System – QA & Testing",
    category: "Web Application Testing",
    tags: ["PHP", "MySQL", "Functional Testing", "Regression"],
    description:
      "Developed and tested a web-based e-book store application, executing functional and regression test cases for core user workflows including login, browsing, downloads, ratings, payment flow, and book preview restrictions.",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Testing Type", value: "Functional & Regression" },
      { label: "Bug Reports", value: "Structured" },
      { label: "Coverage", value: "End-to-End" },
    ],
    accentColor: "#C8FF45",
    isFeatured: true,
    role: "QA & Testing Engineer",
    tools: ["PHP", "HTML", "CSS", "MySQL"],
    result:
      "Delivered structured bug reports with reproduction steps, expected/actual results, and validated complete user workflows through systematic testing.",
    challenge:
      "Required comprehensive QA coverage of a web-based e-book platform with multiple user workflows including authentication, payment processing, and access control.",
    solution:
      "Designed and executed functional and regression test cases covering user login, book browsing, downloads, ratings, payment flow, and book preview restrictions using positive, negative, and boundary test scenarios.",
    impactDetails: [
      "Developed and tested a web-based e-book store application using PHP, HTML, CSS, and MySQL.",
      "Designed and executed functional and regression test cases for user login, book browsing, downloads, ratings, payment flow, and book preview restrictions.",
      "Tested user authentication, session management, input validation, and access-control workflows using positive, negative, and boundary test scenarios.",
      "Identified, documented, reported, tracked, and retested software defects through structured bug reports containing reproduction steps, expected results, and actual results.",
    ],
  },
  {
    id: "home-service",
    title: "Online Home Service Booking System – QA & Testing",
    category: "Web Application Testing",
    tags: ["PHP", "MySQL", "E2E Testing", "Cross-Browser"],
    description:
      "Developed and tested a web-based home service booking application, performing end-to-end testing of registration, service selection, scheduling, booking confirmation, and online payment workflows.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Testing Type", value: "E2E & Cross-Browser" },
      { label: "Integration", value: "Tested" },
      { label: "Defects", value: "Verified" },
    ],
    accentColor: "#D9FF72",
    isFeatured: false,
    role: "QA & Testing Engineer",
    tools: ["PHP", "HTML", "CSS", "MySQL"],
    result:
      "Improved application reliability, usability, and overall user experience through systematic defect identification, reporting, tracking, and verification.",
    challenge:
      "Required thorough end-to-end QA coverage of a multi-step home service booking platform with complex workflows and cross-browser compatibility requirements.",
    solution:
      "Performed functional, integration, regression, input validation, and cross-browser testing across different user scenarios, systematically tracking and verifying all identified defects.",
    impactDetails: [
      "Developed and tested a web-based home service booking application using PHP, HTML, CSS, and MySQL.",
      "Performed end-to-end testing of user registration, service selection, date and time scheduling, booking confirmation, and online payment workflows.",
      "Conducted functional, integration, regression, input validation, and cross-browser testing across different user scenarios.",
      "Identified, reported, tracked, and verified software defects to improve application reliability, usability, and overall user experience.",
    ],
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "mca",
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Ganpat University",
    subtitle: "A.M. Patel Institute of Computer Studies, Kherva",
    duration: "2024 – 2026",
    score: "8.60",
    scoreLabel: "CGPA",
    description:
      "Advanced curriculum covering software engineering, software testing methodologies, SDLC, STLC, automation testing frameworks, database systems, and project management.",
    skillsAcquired: ["Manual Testing", "Automation Testing", "SDLC", "STLC", "Software Engineering"],
  },
  {
    id: "bca",
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "KSV University",
    subtitle: "Bholabhai Patel College of Computer Studies, Gandhinagar",
    duration: "2021 – 2024",
    score: "9.24",
    scoreLabel: "CPI",
    description:
      "Foundational computer science education covering object-oriented programming, web technologies (PHP, HTML, CSS), database management with MySQL, and software development basics.",
    skillsAcquired: ["Java", "PHP", "HTML", "CSS", "MySQL"],
  },
  {
    id: "hsc",
    type: "education",
    title: "HSC – Commerce",
    organization: "N.K. Solanki School of Commerce, Gandhinagar",
    duration: "2020 – 2021",
    score: "86.14%",
    scoreLabel: "Percentage",
    description:
      "Higher Secondary Certificate in Commerce stream with a strong academic record, building analytical thinking and structured problem-solving skills.",
    skillsAcquired: [],
  },
];

export const CERTIFICATIONS: TimelineItem[] = [
  {
    id: "cert-testing-fundamentals",
    type: "certification",
    title: "Software Testing Fundamentals",
    organization: "Infosys Springboard",
    duration: "",
    description:
      "Covers SDLC, STLC, test planning, test case design, and defect management.",
    skillsAcquired: ["SDLC", "STLC", "Test Planning", "Test Case Design", "Defect Management"],
  },
  {
    id: "cert-appium",
    type: "certification",
    title: "Appium Mobile Automation – Android, iOS, Frameworks and CI/CD",
    organization: "Udemy",
    duration: "",
    description:
      "Mobile application automation testing and framework concepts for Android and iOS platforms with CI/CD integration.",
    skillsAcquired: ["Appium", "Mobile Testing", "Android", "iOS", "CI/CD"],
  },
  {
    id: "cert-automation",
    type: "certification",
    title: "Test Automation: Automated Software Testing",
    organization: "Infosys Springboard",
    duration: "",
    description:
      "Automation concepts, testing frameworks, and automated test execution techniques.",
    skillsAcquired: ["Test Automation", "Testing Frameworks", "Automated Execution"],
  },
  {
    id: "cert-sw-engineering",
    type: "certification",
    title: "Software Engineering Fundamentals: Software Development and Testing",
    organization: "Infosys Springboard",
    duration: "",
    description:
      "Foundational software engineering principles covering the software development lifecycle and testing methodologies.",
    skillsAcquired: ["Software Engineering", "Development Lifecycle", "Testing Methodologies"],
  },
];

export const KEY_STRENGTHS: string[] = [
  "Strong analytical and bug-detection mindset with close attention to software quality and detail.",
  "Ability to design structured test cases and manage defects from identification through verification.",
  "Quick learner with practical exposure to manual, automation, mobile, and API testing tools.",
  "Developer knowledge enables deeper technical understanding and effective root cause analysis.",
  "Strong documentation and communication skills for collaborative development and testing environments.",
];
