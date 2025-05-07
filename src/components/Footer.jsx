import React from "react";
import footerLogo from '../assets/noapay-logo.png'
import { Link } from "react-router";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5  bg-base-200 text-base-content p-10 pb-3">
      <aside>
       <img src={footerLogo} alt="footerLogo" />
        <p>
          <strong>NoaPay</strong> Solutions Ltd.
          <br />
          Digital Bill Pay — securely and efficiently
        </p>
      </aside>

      <nav>
        <h6 className="footer-title hidden md:block">Services</h6>
        <a className="link link-hover">Bill Tracking</a>
        <a className="link link-hover">Auto Payments</a>
        <a className="link link-hover">Expense Reports</a>
        <a className="link link-hover">Reminders</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Help & Support</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Security</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <div className="flex flex-row gap-2.5">
        <Link target="_blank" to={"https://www.facebook.com/m.ismail.hossain24/"} className="link link-hover"><FaFacebookSquare size={35} className="text-success" /></Link>
        <Link target="_blank" to={"https://www.linkedin.com/in/ismail-hossain24/"} className="link link-hover"><FaLinkedin size={35} className="text-success" /></Link>
        <Link target="_blank" to={"https://www.instagram.com/m.ismailhossain24/"} className="link link-hover"><FaInstagramSquare size={35} className="text-success" /></Link>
        <Link target="_blank" to={"https://github.com/ismail-dev-code"} className="link link-hover"><FaGithubSquare size={35} className="text-success" /></Link>
        </div>
      </nav>
      
    </footer>
    <aside>
    <p className="bg-base-200 text-base-content text-center"><small>© {new Date().getFullYear()} - All rights reserved by Ismail initiative.</small></p>
  </aside>
    </>
  );
};

export default Footer;
