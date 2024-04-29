import React from "react";
import styles from "../styles/hero.module.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <>
      <section id={styles.hero}>
        <div id={styles["hero-overlay"]}>
          <div id={styles.logo}>
            <h1 className={poppins.className}>THIS IS TUYU</h1>
          </div>
        </div>
      </section>
    </>
  );
}
