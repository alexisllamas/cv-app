import { FunctionComponent } from "react";
import { Profile as ProfileType } from "../api";
import Profile from "./Profile";
import Link from "../components/LinkWithActiveClass";
import styles from "../styles/Layout.module.scss";
import useTranslation from "next-translate/useTranslation";

type LayoutProps = {
  profile: ProfileType;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, profile }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Profile profile={profile} />
      <section className={styles.main}>
        <nav>
          <Link href="/" activeClass={styles.active}>
            <a className="uwu">{t("education")}</a>
          </Link>
          <Link href="/experience" activeClass={styles.active}>
            <a>{t("experience")}</a>
          </Link>
          <Link href="/briefcase" activeClass={styles.active}>
            <a>{t("briefcase")}</a>
          </Link>
          <Link href="/skills" activeClass={styles.active}>
            <a>{t("knowledgesAndSkills")}</a>
          </Link>
        </nav>
        <div className={styles.content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
