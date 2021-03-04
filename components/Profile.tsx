/* eslint-disable jsx-a11y/accessible-emoji */
import { ChangeEvent, FunctionComponent } from 'react';
import Image, { ImageProps } from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import { Profile as ProfileType } from '../api';
import styles from '../styles/AboutMe.module.scss';

type AboutMeProps = {
  profile: ProfileType;
};

const ContactItem: FunctionComponent = ({ children }) => (
  <div className={styles.contactItem}>{children}</div>
);

const ContactItemIcon: FunctionComponent<ImageProps> = ({
  children,
  ...props
}) => <Image className={styles.contactItemIcon} {...props} />;

const ContactItemValue: FunctionComponent = ({ children, ...props }) => (
  <p className={styles.contactItemValue} {...props}>
    {children}
  </p>
);

const Profile: FunctionComponent<AboutMeProps> = ({ profile }) => {
  const { t, lang } = useTranslation('common');

  function handleLangChange(ev: ChangeEvent<HTMLSelectElement>) {
    console.log(ev.target.value, ev.target);
    setLanguage(ev.target.value);
  }
  console.log(lang);
  return (
    <section className={styles.container}>
      <div className={styles.profilePicture}>
        <img src={profile.picture} alt={`${profile.firstName}`} />
      </div>
      <div className={styles.languageContainer}>
        <select
          onChange={handleLangChange}
          onBlur={handleLangChange}
          value={lang}
        >
          <option value="es">🇪🇸 ES</option>
          <option value="en" aria-label="Flag of UK">
            🇬🇧 EN
          </option>
        </select>
      </div>
      <h1>
        {profile.firstName} {profile.lastName}
      </h1>
      <div>
        <h2>{t('aboutMe')}</h2>
        <p>{profile.aboutMe[lang]}</p>
      </div>
      <div className={styles.contact}>
        <h2>{t('contact')}</h2>
        <ul>
          <ContactItem>
            <ContactItemIcon
              src="/mobile-icon.svg"
              alt="mobile cellphone icon"
              width={24}
              height={24}
            />
            <ContactItemValue>
              <a href={`tel:${profile.contact.phone}`}>
                {profile.contact.phone}
              </a>
            </ContactItemValue>
          </ContactItem>
          <ContactItem>
            <ContactItemIcon
              src="/mail-icon.svg"
              alt="email icon"
              width={24}
              height={24}
            />
            <ContactItemValue>
              <a href={`mailto::${profile.contact.email}`}>
                {profile.contact.email}
              </a>
            </ContactItemValue>
          </ContactItem>
          <ContactItem>
            <ContactItemIcon
              src="/linkedin-icon.svg"
              alt="linkedin icon"
              width={24}
              height={24}
            />
            <ContactItemValue>
              <a href={`${profile.contact.linkedin}`}>
                {profile.contact.linkedin}
              </a>
            </ContactItemValue>
          </ContactItem>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
