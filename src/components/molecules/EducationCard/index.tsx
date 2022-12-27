import { FC } from "react";
import { IoIosSchool } from "react-icons/io";

import { Typograhpy } from "../..";

import styles from "./educationCard.module.scss";

interface EducationCardProps {
  company: string;
  title: string;
  date: string;
  teamSize?: string;
  businessValues?: string[];
  activities?: string[];
  technicalStacks?: string[];
  isLeft?: boolean;
}

export function EducationCard(props: EducationCardProps) {
  return (
    <div
      className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}
    >
      <section>
        <IoIosSchool className={styles.icon} />
        <div className={styles.details}>
          <span className={styles.title}>
            <Typograhpy variant="h4">{props.company}</Typograhpy>
          </span>
          <span>|</span>
          <span>{props.date}</span>
        </div>
        <div className={styles.details}>
          <Typograhpy variant="h4">{props.title}</Typograhpy>
        </div>
        {props.teamSize && (
          <>
            <div className={styles.details}>
              <Typograhpy variant="h3">Teamsize</Typograhpy>
            </div>
            <Typograhpy>◉ {props.teamSize}</Typograhpy>
          </>
        )}
        {props.businessValues && (
          <>
            <div className={styles.details}>
              <Typograhpy variant="h3">Business Values</Typograhpy>
            </div>
            {props.businessValues.map((item) => (
              <Typograhpy key={item}>◉ {item}</Typograhpy>
            ))}
          </>
        )}
        {props.activities && (
          <>
            <div className={styles.details}>
              <Typograhpy variant="h3">Activities</Typograhpy>
            </div>
            {props.activities.map((item) => (
              <Typograhpy key={item}>◉ {item}</Typograhpy>
            ))}
          </>
        )}
        {props.technicalStacks && (
          <>
            <div className={styles.details}>
              <Typograhpy variant="h3">Technical Stacks</Typograhpy>
            </div>
            {props.technicalStacks.map((item) => (
              <Typograhpy key={item}>◉ {item}</Typograhpy>
            ))}
          </>
        )}
      </section>
    </div>
  );
}
