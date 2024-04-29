import React from "react";
import styles from "../styles/about.module.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <>
      <section id={styles.about}>
        <h2 className={poppins.className}>ABOUT</h2>
        <div id={styles["artist-area"]}>
          <div id={styles.logo}>
            <img
              src="logos/logo.svg"
              alt="Thumbnail from TUYU music video 'Compared Child'."
              loading="lazy"
            />
          </div>
          <div id={styles["artist-info"]}>
            <p>
              TUYU (ツユ) is a Japanese pop group consisting of Pusu on on
              guitar, Rei as vocals, and Miro on piano. Former members include
              Omutatsu and AzyuN who were in charge of the illustration and
              video design of music videos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
