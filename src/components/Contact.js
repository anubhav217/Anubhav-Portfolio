import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-sub">Whether you have a question or just want to say hi, feel free to drop a message!</p>

      <div className="contact-links">
        {/* Top row - 3 items */}
        <a
          className="contact-card"
          href="https://leetcode.com/u/anubhav217/"
          target="_blank"
          rel="noreferrer"
          title="LeetCode"
        >
          <span className="icon"><SiLeetcode /></span>
          <span className="label">LeetCode</span>
        </a>

        <a
          className="contact-card"
          href="mailto:anubhav.majumdar.in@gmail.com"
          title="Email Anubhav"
        >
          <span className="icon"><FaEnvelope /></span>
          <span className="label">Email</span>
        </a>

        <a
          className="contact-card"
          href="https://www.instagram.com/anubhav._.majumdar/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <span className="icon"><FaInstagram /></span>
          <span className="label">Instagram</span>
        </a>

        {/* Bottom row - 2 items centered */}
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/anubhav-majumdar/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <span className="icon"><FaLinkedin /></span>
          <span className="label">LinkedIn</span>
        </a>

        <a
          className="contact-card"
          href={process.env.PUBLIC_URL + '/assets/resume.pdf'}
          target="_blank"
          rel="noreferrer"
          title="Download Résumé"
        >
          <span className="icon"><FaDownload /></span>
          <span className="label">Download Résumé</span>
        </a>
      </div>
    </section>
  );
}
