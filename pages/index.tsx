import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Education.module.scss";
import {
  Education as EducationType,
  getEducation,
  getProfile,
  Profile,
} from "../api";
import Layout from "../components/Layout";
import { getYear } from "../utils/date";

export const getStaticProps: GetStaticProps = async () => {
  const [profile, education] = await Promise.all([
    getProfile(),
    getEducation(),
  ]);
  return {
    props: {
      profile,
      education,
    },
  };
};

type EducationProps = {
  profile: Profile;
  education: EducationType[];
};

const Education: FunctionComponent<EducationProps> = ({
  profile,
  education,
}) => {
  const { t, lang } = useTranslation();

  return (
    <Layout profile={profile} pageTitle={t("common:education")}>
      <section className={styles.container}>
        <div className={styles.schools}>
          {education.map(
            ({ id, school, description, dateStart, dateEnd, location }) => (
              <div key={id}>
                <p>
                  {getYear(dateStart)} - {getYear(dateEnd)}
                </p>
                <div>
                  <h3>{school}</h3>
                  <p>{location}</p>
                </div>
                <p>{description[lang]}</p>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Education;
