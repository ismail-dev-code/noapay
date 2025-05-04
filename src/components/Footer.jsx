import React from "react";
import footerLogo from '../assets/noapay-logo.png'

const Footer = () => {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 pb-3">
      <aside>
       <img src={footerLogo} alt="" />
        <p>
          <strong>NoaPay</strong> Solutions Ltd.
          <br />
          Digital Bill Pay — securely and efficiently
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
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
        <a className="link link-hover">Blog</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Security</a>
      </nav>
      
    </footer>
    <aside>
    <p className="bg-base-200 text-base-content text-center"><small>Copyright © {new Date().getFullYear()} - All right reserved by Ismail initiative.</small></p>
  </aside>
    </>
  );
};

export default Footer;
