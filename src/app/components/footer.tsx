import React from "react";
import styles from "../styles/footer.module.scss";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div id={styles["social-area"]}>
        <h2 className={poppins.className}>TUYU SOCIALS</h2>
        <div id={styles["icons-area"]}>
          <a
            href="https://twitter.com/TUYU_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://www.instagram.com/rei_tuyu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.youtube.com/@TUYU_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} />
          </a>
        </div>
      </div>
      <p>&copy; 2024 Kevin Tolbert</p>
    </footer>
  );
}
