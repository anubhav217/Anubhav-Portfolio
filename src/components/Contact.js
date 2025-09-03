import React from "react";

// Try to load react-icons, else fallback to simple text
let FaGithub, FaLinkedin, FaInstagram, SiLeetcode, MdEmail, HiDownload;

try {
  ({ FaGithub, FaLinkedin, FaInstagram } = require("react-icons/fa"));
  ({ SiLeetcode } = require("react-icons/si"));
  ({ MdEmail } = require("react-icons/md"));
  ({ HiDownload } = require("react-icons/hi"));
} catch (e) {
  const Fallback = (props) => <>{props.label}</>;
  FaGithub = (props) => <Fallback label="GitHub" {...props} />;
  FaLinkedin = (props) => <Fallback label="LinkedIn" {...props} />;
  FaInstagram = (props) => <Fallback label="Instagram" {...props} />;
  SiLeetcode = (props) => <Fallback label="LeetCode" {...props} />;
  MdEmail = (props) => <Fallback label="Email" {...props} />;
  HiDownload = (props) => <Fallback label="Résumé" {...props} />;
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>
        Whether you have a question or just want to say hi, feel free to drop a
        message!
      </p>

      <div className="contact-links">
        <a
          href="https://leetcode.com/u/anubhav217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode /> LeetCode
        </a>

        <a href="mailto:anubhav.majumdar.in@gmail.com">
          <MdEmail /> Email
        </a>

        <a
          href="https://www.instagram.com/anubhav._.majumdar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </a>

        <a
          href="https://github.com/anubhav217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anubhav-majumdar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          className="resume-tile"
          href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiDownload /> Download Résumé
        </a>
      </div>
    </section>
  );
}
