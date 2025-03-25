import React from "react";
import "../styles/footer.css";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const ContactItem = ({ icon, children }) => (
  <div className="contactItem">
    <div className="icon">{icon}</div>
    <div className="contactText">{children}</div>
  </div>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logoSection">
          <div className="">
            <a href="/">
              <img width="145" src="assets/footerLogo.png" alt="Logo" />
            </a>
          </div>
        </div>

        <div className="infoSection">
          <h3>Information</h3>
          <ul>
            {[
              { name: "Main", path: "/" },
              { name: "Gallery", path: "/galery" },
              { name: "Projects", path: "/proyects" },
              { name: "Certifications", path: "/certifications" },
              { name: "Contact Us", path: "/contactUs" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="contactsSection">
          <h3>Contacts</h3>
          <ContactItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            }
          >
            <p>1234 Sample Street</p>
            <p>Austin Texas 78704</p>
          </ContactItem>

          <ContactItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
            }
          >
            <p>512.333.2222</p>
          </ContactItem>

          <ContactItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            }
          >
            <p>sampleemail@gmail.com</p>
          </ContactItem>
        </div>

        <div className="socialSection">
          <h3>Social Media</h3>
          <div className="socialIcons">
            <SocialIcon href="https://facebook.com" ariaLabel="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" ariaLabel="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" ariaLabel="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" ariaLabel="Pinterest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0a12 12 0 0 0-4.4 23.19c0-.95.01-2.09.32-3.12.31-1.32 2.06-8.38 2.06-8.38s-.53-1.03-.53-2.56c0-2.4 1.4-4.19 3.14-4.19 1.48 0 2.19 1.1 2.19 2.42 0 1.47-.94 3.67-1.41 5.7-.4 1.7.85 3.08 2.53 3.08 3.03 0 5.06-3.88 5.06-8.48 0-3.5-2.35-6.12-6.62-6.12-4.83 0-7.85 3.59-7.85 7.6 0 1.38.53 2.35 1.34 3.1.15.18.17.33.13.51-.14.59-.47 1.84-.53 2.1-.08.33-.29.4-.66.24-1.85-.75-2.71-2.77-2.71-5.04 0-3.76 3.17-8.26 9.45-8.26 5.05 0 8.37 3.66 8.37 7.59 0 5.19-2.89 9.08-7.15 9.08-1.43 0-2.77-.77-3.24-1.64l-.88 3.49c-.32 1.15-.94 2.31-1.5 3.2.67.2 1.38.31 2.12.31 4.42 0 8-3.58 8-8s-3.58-8-8-8z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
