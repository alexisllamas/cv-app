import { profile } from "console";
import { FunctionComponent } from "react";
import { Profile } from "../api";
import AboutMe from "./AboutMe";

type LayoutProps = {
  profile: Profile;
};
const Layout: FunctionComponent<LayoutProps> = ({ children, profile }) => {
  return (
    <div>
      <AboutMe profile={profile} />
      <nav></nav>
      {children}
    </div>
  );
};

export default Layout;
