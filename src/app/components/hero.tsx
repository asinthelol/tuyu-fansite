import React from "react";
import styles from "../styles/hero.module.scss";

export default function Hero() {
  return (
    <>
      <section id={styles.hero}>
        <div id={styles["hero-overlay"]}>
          <div id={styles.logo}>
            <img  src="logos/tuyu-logo.png" alt="TUYU logo."/>
          </div>

        </div>

      </section>
    </>
  );
}