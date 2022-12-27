interface ExperienceDataType {
  company: string;
  title: string;
  date: string;
  teamSize?: string;
  businessValues?: string[];
  activities?: string[];
  technicalStacks?: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    company: "Ho Chi Minh University of Science",
    title: "Computer Science",
    date: "Aug 2012 - Oct 2016",
  },
  {
    company: "SAMSUNG ELECTRONICS HCMC CE COMPLEX",
    title: "PHP Fullstack Developer",
    date: "Jan 2017 - Jun 2020",
    teamSize: "1 leader, 8 developers",
    businessValues: [
      "Build an intranet system to improve production operations, and systematize all processes to optimize time and costs",
    ],
    activities: [
      "Build web apps to manage resources and processes of the factory with main modules is Warehouse Management, Human Resource Management",
      "Build Batch job to auto calculate data, send a warning, notification email",
      "Optimize SQL queries for high load",
      "Analyze process and data to Innovate process to reduce maximum cost and resources",
      "Work with direct PIC to get requirements for the new system and get VOC for the deployed system",
    ],
    technicalStacks: [
      "Use CakePHP 2.x with the MVC model to implement web app",
      "Use HTML, CSS, JavaScript, JQuery, Bootstrap, DHTMLX to build UI",
      "Use MySQL as the main database and SQL Server for machine connect",
      "Use Highchart.js for data visualize",
      "Use SVN for source control",
    ],
  },
  {
    company: "B2BE GSS (VIETNAM) CO. LTD",
    title: "PHP Fullstack Developer",
    date: "Jun 2020 - Apr 2021",
    teamSize: "1 leader, 7 developers",
    businessValues: [
      "Provided industry-leading solutions for Business-to-Business web applications integrating with Electronic Data Interchange (EDI) system.",
    ],
    activities: [
      "Manage and deliver against the full software development lifecycle which includes user requirement analysis, designing and writing new software programs, testing and final deployment of the allocated projects",
      "Designed and implemented PHP web application",
      "Database design and application performance optimization",
      "Debug and troubleshoot layout and scripting issues across a variety of desktop and mobile browsers",
    ],
    technicalStacks: [
      "Use PHP with CodeIgniter framework to implement web app",
      "Use HTML5, CSS3, JavaScript, JQuery to build UI",
      "Use MySQL as the main database",
      "Use Gitlab for source control",
    ],
  },
  {
    company: "DTHAUS COMPANY LIMITED",
    title: "Frontend Developer | Project Manager",
    date: "Apr 2021 - Oct 2022",
    teamSize: "1 leader, 4 developers",
    businessValues: [
      "Provided MES (Manufacturing Execution Systems) solutions for SME factories to manage production more closely, save maximum costs and minimize defective goods being exported to the market.",
    ],
    activities: [
      "Work as leader role",
      "Build structure and core components for React app",
      "Mainly responsible for new business features coming from BA side,take analysis, implement or transmit to other members",
      "Mainly responsible for code review, source code quality assurance",
      "Support technical for other team members",
      "Daily meeting to understand the work progress and find out the difficulties each member is facing",
    ],
    technicalStacks: [
      "Build React app with Material-UI",
      "Use Redux Toolkit for state management",
      "Use Formik and Yup for form validation",
      "Use Highchart.js for data visualize",
      "Use Github for source control",
    ],
  },
];
