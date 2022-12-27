import { motion } from "framer-motion";

import { EducationCard, Typograhpy } from "../../components";
import { ExperienceData } from "../../data/ExperienceData";
import { pageTransition, pageVariants } from "../../utils/FramerAnimation";

import styles from "./experience.module.scss";

const eduOpen = "<experience>";
const eduClose = "</experience>";

const Experience = () => {
  return (
    <div className={styles.education}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <Typograhpy variant="h3" className={styles.eduOpen}>
            {eduOpen}
          </Typograhpy>
          <div className={styles.center_line}></div>
          {ExperienceData.map((item, index) => (
            <EducationCard
              key={item.company}
              company={item.company}
              title={item.title}
              date={item.date}
              teamSize={item.teamSize}
              businessValues={item.businessValues}
              activities={item.activities}
              technicalStacks={item.technicalStacks}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
          <Typograhpy variant="h3" className={styles.eduClose}>
            {eduClose}
          </Typograhpy>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
