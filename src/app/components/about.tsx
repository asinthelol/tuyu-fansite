import React from "react";
import styles from "../styles/about.module.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export default function About() {
  return (

    <>
      <section id={styles.about}>
        <h2 className={poppins.className}>ABOUT</h2>
        <div id={styles["artist-area"]}>
          <div id={styles.logo}>
            <img src="logos/tuyu-logo-colored.png" alt="Thumbnail from TUYU music video 'Compared Child'." />
          </div>
          <div id={styles["artist-info"]}>
            <p>A music unit consisting of Pusu on guitar and in charge of composing the songs, Rei as vocals, and miro on piano. The group was formed on June 12, 2019. Its name comes from the Japanese word for “rainy season” during which it was formed.</p>
          </div>
        </div>
      </section>
    </>
  )};