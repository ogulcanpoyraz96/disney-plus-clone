import React, { ReactElement } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = (): ReactElement => {
  return (
    <div>
      <div className="footer">
        <Link to="/" className="footerLogo">
          <img src="images/logo.svg" alt="" />
        </Link>
        <ul className="footerList">
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/legal/privacy-policy"
              className="footerItemLink"
            >
              Privacy Policy
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/legal/subscriber-agreement"
              className="footerItemLink"
            >
              Subscriber Agreement
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/legal/your-california-privacy-rights"
              className="footerItemLink"
            >
              Your California Privacy Rights
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/legal/do-not-sell-my-info"
              className="footerItemLink"
            >
              Do Not Sell My Info
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
              className="footerItemLink"
            >
              Children's Online Privacy Policy
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://help.disneyplus.com/csp"
              className="footerItemLink"
            >
              Help
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982"
              className="footerItemLink"
            >
              Closed Captioning
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982"
              className="footerItemLink"
            >
              Supported Devices
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/welcome/gift-subscription"
              className="footerItemLink"
            >
              Gift Disney+
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed"
              className="footerItemLink"
            >
              About Us
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://www.disneyplus.com/welcome/partner-program"
              className="footerItemLink"
            >
              Disney+ Partner Program
            </Link>
          </li>
          <li className="footerItem">
            <Link
              to="https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus"
              className="footerItemLink"
            >
              Interest-based Ads
            </Link>
          </li>
        </ul>
        <p className="copyright">© Disney. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
