const Zoom = require("react-reveal/Zoom");

import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.png";
import { Anchor, Image, Typograhpy } from "../../components";

const welcomeText = `Hi, I am ${AboutData.lastName} ${AboutData.firstName}  `;

const Home = () => {
  return (
    <div className={styles.home}>
      <Zoom cascade>
        <Image src={profilePic} alt='Profile' className={styles.image} />
        <Typograhpy variant="h2" className={styles.title}>{welcomeText}</Typograhpy>
      </Zoom>
      <Zoom cascade>
        {
          AboutData.about.map((about: string) => (<Typograhpy variant="h3" className={styles.about}>{about}</Typograhpy>))
        }

        <div className={styles.links}>
          {LinksData.map((item) => (
            <Anchor
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </Anchor>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
