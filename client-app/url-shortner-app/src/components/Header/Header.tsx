import * as React from "react";
import "./Header.css"; // Import CSS file

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <nav>
        <div className="title">URLShortner</div>
      </nav>
    </header>
  );
};

export default Header;
