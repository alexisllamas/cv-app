import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Education.module.scss";
import {
  Certification,
  Education as EducationType,
  getCertifications,
  getEducation,
  getProfile,
  Profile,
} from "../api";
import Layout from "../components/Layout";
import { getYear, toShortDate } from "../utils/date";

export const getStaticProps: GetStaticProps = async () => {
  const [profile, education, certifications] = await Promise.all([
    getProfile(),
    getEducation(),
    getCertifications(),
  ]);
  return {
    props: {
      profile,
      education,
      certifications,
    },
  };
};

type EducationProps = {
  profile: Profile;
  education: EducationType[];
  certifications: Certification[];
};

const Education: FunctionComponent<EducationProps> = ({
  profile,
  education,
  certifications,
}) => {
  const { t, lang } = useTranslation();

  return (
    <Layout profile={profile} pageTitle={t("common:education")}>
      <section className={styles.container}>
        <div className={styles.scoolTimeline}>
          {education.map(
            ({ id, school, description, dateStart, dateEnd, location }) => (
              <div key={id} className={styles.item}>
                <p className={styles.dateRange}>
                  {getYear(dateStart)} - {getYear(dateEnd)}
                </p>
                <div className={styles.title}>
                  <h3>{school}</h3>
                  <p className={styles.location}>{location}</p>
                </div>
                <p className={styles.description}>{description[lang]}</p>
              </div>
            )
          )}
        </div>
        <div className={styles.certifications}>
          <h2>{t("education:licences")}</h2>
          {certifications.map((certification) => (
            <div key={certification.id} className={styles.certification}>
              <div className={styles.ceritficationImageContainer}>
                <Image
                  src={"/certification-placeholder.png"}
                  width={150}
                  height={100}
                />
              </div>
              <div className={styles.certificationContent}>
                <h3>{certification.title[lang]}</h3>
                <p className={styles.certificationDescription}>
                  {certification.description[lang]}
                </p>
                <p>
                  {t("education:registred", {
                    date: toShortDate(certification.registred, lang),
                  })}
                </p>
                <p className={styles.certificationKey}>
                  {t("education:key", { key: certification.key })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Education;
