import styles from "./page.module.css";
import BackgroundShader from "./BackgroundShader";
import Links, { LinkItem } from "./components/Links";
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
              { href: "https://a-kimb0.itch.io/", label: "Itch.io", external: true },
              { href: "https://github.com/akimb", label: "GitHub", external: true },
              { href: "https://www.linkedin.com/in/andrewkim101/", label: "LinkedIn", external: true },
              { href: "https://godotshaders.com/shader/futuristic-jet-thruster/", label: "Shaders", external: true },
              { href: "Andrew Kim Technical Resume.pdf", label: "Resume", external: true },
              { href: "https://www.biorxiv.org/content/10.1101/2024.08.22.609245v2", label: "Publications", external: true, badge: "new!" },
            ]}
          />
          {/* <p className={styles.subtitle2}>github</p> */}

        </div>
      </BackgroundShader>
        
    </>
  );
}

