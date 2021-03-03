import { FunctionComponent } from "react";
import Head from "next/head";
import { Profile } from "../api";
import useTranslation from "next-translate/useTranslation";

type MetaProps = {
  pageTitle: string;
  profile: Profile;
  currentURL?: string;
};
const Meta: FunctionComponent<MetaProps> = ({ pageTitle, profile }) => {
  const { lang } = useTranslation();
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta charSet="utf-8" />
      <title>
        {[profile.firstName]} {profile.lastName} - {pageTitle}
      </title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={profile.aboutMe[lang]} />
      <meta property="og:image" content={profile.picture} key="ogimage" />
      <meta property="og:site_name" content="Incode" key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta
        property="og:description"
        content={profile.aboutMe[lang]}
        key="ogdesc"
      />
    </Head>
  );
};

export default Meta;
