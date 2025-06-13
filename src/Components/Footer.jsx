import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer sm:footer-horizontal  max-w-[1350px] mx-auto text-base-content py-10 px-5 lg:px-0">
        <aside>
          <img className="w-15" src={``} alt="" />
          <h1 className="text-2xl font-bold">
            Page <span className="text-primary">Flow</span>
          </h1>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <p>
            Development By{" "}
            <a className="font-medium hover:underline" target="blank" href="https://www.facebook.com/share/1HXNLBsofY/">
              Shakil Ahamed
            </a>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="">Email: shakil200607@gmail.com</a>
          <a className="">Phone: +8801772144965</a>
          <a className="">WhatsApp: +880134614946</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-5">
            <p>
              <FaFacebook size={25} />
            </p>
            <p>
              <FaTwitter size={25} />
            </p>
            <p>
              <FaInstagram size={25} />
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
