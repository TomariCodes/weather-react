import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
          <p>
            This project was coded by{" "}
            <a
              className="footer_link"
              href="https://tomari-southern.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tomari Southern
            </a>{" "}
            and is open-sourced on{" "}
            <a
              className="footer_link"
              href="https://github.com/TomariCodes/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
    </footer>
  );
}

export default Footer;