import { useState } from "react";

import NavBar from "../components/NavBar";
import NavBarLinks from "../components/NavBarLinks";

const ContactUsPage = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <div className={`${showNav ? "hidden invisible" : "block visible"}`}>
        <NavBar clicked={handleNav} />
      </div>
      <div className={`${showNav ? "visible block" : "hidden invisible"}`}>
        <NavBarLinks clicked={handleNav} />
      </div>
    </div>
  );
};

export default ContactUsPage;
