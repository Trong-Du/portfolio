import { motion } from "framer-motion";

import { Typograhpy } from "../../components";
import { SkillsData } from "../../data/SkillsData";
import { pageTransition, pageVariants } from "../../utils/FramerAnimation";

import styles from "./skills.module.scss";

const skillsOpen = "<skills>";
const skillsClose = "</skills>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <Typograhpy variant="h3" className={styles.skillsopen}>
            {skillsOpen}
          </Typograhpy>
          <div className={styles.skills_content}>
            {SkillsData.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <Typograhpy variant="h3" className={styles.skillsclose}>
            {skillsClose}
          </Typograhpy>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
