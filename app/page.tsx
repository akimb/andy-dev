import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const x = 10
  const randomThing : string = "hi"
  return (
    <>
      <head>
        <title>Andy Kim</title>
        <meta name="description" content="Andy Kim's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="moodle_content_ui.png" />
      </head>

      <div className={styles.root}>
        <h1>ANDY KIM</h1> 
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
            Resume
          </a>
        </div>
        {/* <p className={styles.subtitle2}>github</p> */}

      </div>
    </>
  );
}
