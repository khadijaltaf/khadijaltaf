// Mock data for Khadija Altaf's SQA Portfolio
export const personalInfo = {
  name: "Khadija Altaf",
  designation: "Software Quality Assurance Engineer",
  subtitle: "QA Automation Specialist",
  tagline: "Ensuring seamless software experiences through quality-driven testing & automation",
  location: "Karachi, Pakistan",
  email: "khadija.altaf@example.com",
  phone: "+92 300 1234567",
  experience: "3+ Years",
  education: "BSc Mathematics",
  gpa: "3.70 CGPA",
  profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b714?w=400&h=400&fit=crop&crop=face",
  resume: "/resume-khadija-altaf.pdf"
};

export const skills = {
  testing: [
    { name: "Manual Testing", level: 95, description: "Functional, Integration & System Testing" },
    { name: "Test Automation", level: 85, description: "Cypress, Selenium WebDriver" },
    { name: "API Testing", level: 90, description: "Postman, REST APIs" },
    { name: "Bug Tracking", level: 92, description: "Jira, TestRail, Azure DevOps" },
    { name: "Test Planning", level: 88, description: "Test Cases, Strategy & Documentation" }
  ],
  tools: [
    { name: "Cypress", icon: "🔧", description: "End-to-end test automation" },
    { name: "Jira", icon: "🐛", description: "Issue tracking & project management" },
    { name: "TestRail", icon: "📋", description: "Test case management" },
    { name: "Postman", icon: "🚀", description: "API testing & documentation" },
    { name: "GitHub", icon: "💻", description: "Version control & collaboration" },
    { name: "Azure DevOps", icon: "☁️", description: "CI/CD & project management" }
  ],
  development: [
    { name: "JavaScript", level: 75, description: "ES6+, Test Scripts" },
    { name: "React", level: 70, description: "Component-based UI development" },
    { name: "Node.js", level: 65, description: "Backend development basics" },
    { name: "MongoDB", level: 60, description: "Database operations & queries" },
    { name: "HTML/CSS", level: 85, description: "UI/UX implementation" }
  ]
};

export const experience = [
  {
    id: 1,
    title: "SQA Professional",
    company: "MyMo",
    period: "2021 - Present",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description: "Leading quality assurance initiatives for web and mobile applications",
    achievements: [
      "Automated 50+ critical test cases using Cypress",
      "Reduced bug escape rate by 40% through comprehensive testing",
      "Implemented API testing framework with Postman",
      "Mentored junior QA team members on best practices"
    ]
  },
  {
    id: 2,
    title: "Junior Developer",
    company: "Benchmark",
    period: "2020 - 2021",
    location: "Remote",
    type: "Remote",
    description: "Supporting QA automation and contributing to UI bug fixes",
    achievements: [
      "Developed automated test scripts for regression testing",
      "Fixed critical UI bugs improving user experience",
      "Collaborated with development team on quality standards",
      "Created comprehensive test documentation"
    ]
  },
  {
    id: 3,
    title: "Mathematics Teacher",
    company: "The Inspiration Model School",
    period: "2019 - 2020",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description: "Teaching mathematics and developing analytical thinking skills",
    achievements: [
      "Improved student performance by 25% through innovative teaching",
      "Developed curriculum for advanced mathematics courses",
      "Enhanced problem-solving and analytical skills",
      "Built strong communication and presentation abilities"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Cypress E2E Automation Suite",
    description: "Comprehensive end-to-end testing framework for web applications",
    technologies: ["Cypress", "JavaScript", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    github: "https://github.com/khadija-altaf/cypress-automation",
    achievements: ["50+ Test Cases", "CI/CD Integration", "Cross-browser Testing"],
    status: "Active"
  },
  {
    id: 2,
    title: "MyMo QA Dashboard",
    description: "Real-time testing metrics and bug tracking dashboard",
    technologies: ["React", "Chart.js", "API Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
    achievements: ["Real-time Metrics", "Bug Analytics", "Team Collaboration"],
    status: "In Production"
  },
  {
    id: 3,
    title: "API Testing Framework",
    description: "Automated API testing solution with comprehensive reporting",
    technologies: ["Postman", "Newman", "Jenkins"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com/khadija-altaf/api-testing",
    achievements: ["100+ API Tests", "Automated Reports", "CI Integration"],
    status: "Completed"
  }
];

export const certifications = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "BanoQabil",
    date: "2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    skills: ["React", "Node.js", "MongoDB", "Express.js"]
  },
  {
    id: 2,
    title: "Digital Marketing",
    issuer: "Bahria University",
    date: "2022",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
    skills: ["SEO", "Social Media", "Content Strategy", "Analytics"]
  },
  {
    id: 3,
    title: "ISTQB Foundation Level",
    issuer: "ISTQB",
    date: "Coming Soon",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    skills: ["Testing Principles", "Test Design", "Test Management"],
    status: "upcoming"
  }
];

export const education = [
  {
    id: 1,
    degree: "BSc Mathematics",
    institution: "Jinnah University for Women",
    period: "2016 - 2020",
    gpa: "3.70 CGPA",
    minor: "Statistics & Physics",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
    achievements: [
      "Mathematics Excellence Award",
      "Statistics Research Project",
      "Dean's Honor List"
    ]
  },
  {
    id: 2,
    degree: "Software Development",
    institution: "Aptech",
    period: "2023 - Present",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    focus: [
      "Advanced Programming",
      "Software Architecture",
      "Quality Assurance"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    position: "Lead Developer, MyMo",
    content: "Khadija's attention to detail and systematic approach to QA has significantly improved our software quality. Her automation skills are exceptional.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b714?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmad Khan",
    position: "Project Manager, Benchmark",
    content: "Working with Khadija was a great experience. Her QA expertise and problem-solving abilities helped us deliver bug-free releases consistently.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/khadija-altaf",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/khadija-altaf",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:khadija.altaf@example.com",
    icon: "mail"
  }
];