import { ChangeEvent, FunctionComponent } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
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
    <Layout profile={profile}>
      <Head>
        <title>CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        {education.map(
          ({ id, school, description, dateStart, dateEnd, location }) => (
            <div key={id}>
              <p>
                {getYear(dateStart)} - {getYear(dateEnd)}
              </p>
              <p>{location}</p>
              <h3>{school}</h3>
              <p>{description[lang]}</p>
            </div>
          )
        )}
      </section>
    </Layout>
  );
};

export default Education;
