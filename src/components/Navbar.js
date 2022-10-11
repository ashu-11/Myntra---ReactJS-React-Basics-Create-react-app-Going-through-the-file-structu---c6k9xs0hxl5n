import React from "react";
import myntraLogo from "../icon.jpeg";

function NavBar() {
  return (
    <nav>
      <div className="icon-holder">
        <img src={myntraLogo} alt="logo" width={70} height={70} />
      </div>
    </nav>
  );
}

export default NavBar;
