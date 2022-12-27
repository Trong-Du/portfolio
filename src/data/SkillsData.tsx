import { DiMsqlServer, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaBitbucket,
  FaChartBar,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiCss3,
  SiMaterialui,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

import { Typograhpy } from "../components";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#000000dc" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#000000dc" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color="#000000dc" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#000000dc" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color="#000000dc" />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#000000dc" />,
    link: "https://nodejs.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color="#000000dc" />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#000000dc" />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color="#000000dc" />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Material-Ui",
    icon: <SiMaterialui color="#000000dc" />,
    link: "https://mui.com/",
  },
  {
    name: "PHP",
    icon: <FaPhp color="#000000dc" />,
    link: "https://https://www.php.net//",
  },
  {
    name: "Highcharts",
    icon: <FaChartBar color="#000000dc" />,
    link: "https://www.highcharts.com/",
  },
  {
    name: "Github",
    icon: <FaGithub color="#000000dc" />,
    link: "https://github.com/",
  },
  {
    name: "Gitlab",
    icon: <FaGitlab color="#000000dc" />,
    link: "https://www.gitlab.com/",
  },
  {
    name: "Bitbucket",
    icon: <FaBitbucket color="#000000dc" />,
    link: "https://www.bitbucket.org/",
  },
  {
    name: "SQL Server",
    icon: <DiMsqlServer color="#000000dc" />,
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-2022/",
  },
  {
    name: "MySQL",
    icon: <DiMysql color="#000000dc" />,
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql color="#000000dc" />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Self-learning",
    icon: <Typograhpy variant="h6">#Self-learning</Typograhpy>,
    link: "#",
  },
  {
    name: "Self-research",
    icon: <Typograhpy variant="h6">#Self-research</Typograhpy>,
    link: "#",
  },
  {
    name: "Sociable",
    icon: <Typograhpy variant="h6">#Sociable</Typograhpy>,
    link: "#",
  },
  {
    name: "Time management",
    icon: <Typograhpy variant="h6">#Time management</Typograhpy>,
    link: "#",
  },
  {
    name: "Good communication",
    icon: <Typograhpy variant="h6">#Good communication</Typograhpy>,
    link: "#",
  },
  {
    name: "Easy to adapt",
    icon: <Typograhpy variant="h6">#Easy to adapt</Typograhpy>,
    link: "#",
  },
];
