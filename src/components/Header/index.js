import React from "react";
import './Header.css';

function Header({ handlePageChange }) {
  return (
    <header className="header">
      <h1>Ali Momin</h1>
      <nav>
        <ul>
          <li>
            <a onClick={() => handlePageChange("About")}>About</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("Projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("Contact")}>Contact</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("Resume")}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
