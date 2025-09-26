import styles from "./page.module.css";
import BackgroundShader from "./BackgroundShader";

export const metadata = {
  title: "Andy Kim's Personal Website",
  description: "My next big thing will be here!",
  icons: {
    icon: "/moodle_content_ui.png",
  }
}

export default function Home() {
  return (
    <>
      <BackgroundShader>
        <div className={styles.root}>
          
          <div className={styles.title}>ANDY KIM</div>
          <p className={styles.subtitle1}>*********************************************************</p>
          <p className={styles.subtitle1}>
            welcome to my website!
            my name is andrew (andy) kim. i am an ex-aerospace engineer-turned-software-developer/game-developer 
            and am passionate about all things software! below are some links 
            that will take you to some of my projects. enjoy!
          </p>
          <p className={styles.subtitle1}>*********************************************************</p>
          <p className={styles.subtitle1}>links:</p>
          <div className={styles.links}>
            <a href="https://a-kimb0.itch.io/" target="_blank" rel="noopener noreferrer">
              Itch.io |
            </a>
            <a href="https://github.com/akimb" target="_blank" rel="noopener noreferrer">
              GitHub |
            </a>
            <a href="https://www.linkedin.com/in/andrewkim101/" target="_blank" rel="noopener noreferrer">
              LinkedIn |
            </a>
            <a href="https://godotshaders.com/shader/futuristic-jet-thruster/" target="_blank" rel="noopener noreferrer">
              Shaders |
            </a>
            <a href="Andrew Kim Technical Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume |
            </a>
            <a href="https://www.biorxiv.org/content/10.1101/2024.08.22.609245v2" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Research Paper
              <span className={`${styles.newBadge} ${styles["newBadge--pulse"]}`} aria-hidden="true">new!</span>
            </a>
          </div>
          {/* <p className={styles.subtitle2}>github</p> */}

        </div>
      </BackgroundShader>
        
    </>
  );
}

