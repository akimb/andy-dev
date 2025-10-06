import styles from "./page.module.css";
import BackgroundShader from "./BackgroundShader";
import Links from "./components/Links";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import { SITE_TITLE, INTRO } from "./site_descriptions";
import Divider from "./components/Divider";



export default function Home() {
  return (
    <>
      <BackgroundShader>
        <div className={styles.root}>
          <Title text={SITE_TITLE} />
          <Divider />
          <Subtitle text={INTRO} />
          <Divider />
          <Subtitle text={'links:'} />
          <Links
            items={[
              { href: "https://a-kimb0.itch.io/", label: "Itch.io |" },
              { href: "https://github.com/akimb", label: "GitHub |", },
              { href: "https://www.linkedin.com/in/andrewkim101/", label: "LinkedIn |" },
              { href: "https://godotshaders.com/shader/futuristic-jet-thruster/", label: "Shaders |" },
              { href: "Andrew Kim Technical Resume.pdf", label: "Resume |" },
              { href: "https://www.biorxiv.org/content/10.1101/2024.08.22.609245v2", label: "Publications", badge: "new!" },
            ]}
          />
        </div>
      </BackgroundShader>
        
    </>
  );
}

