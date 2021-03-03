import { ChangeEvent, FunctionComponent } from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { Profile } from "../api";

import styles from "../styles/AboutMe.module.scss";

type AboutMeProps = {
  profile: Profile;
};
const AboutMe: FunctionComponent<AboutMeProps> = ({ profile }) => {
  console.log(styles);
  const { t, lang } = useTranslation();

  function handleLangChange(ev: ChangeEvent<HTMLSelectElement>) {
    setLanguage(ev.target.value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.profilePicture}>
        <img src={profile.picture} alt={`Picture of ${profile.firstName}`} />
      </div>
      <div className={styles.languageContainer}>
        <select onChange={handleLangChange} value={lang}>
          <option value="es">🇪🇸 ES</option>
          <option value="en">🇬🇧 EN</option>
        </select>
      </div>
    </section>
  );
};

export default AboutMe;
