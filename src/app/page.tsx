import React from "react";
import styles from "../app/styles/index.module.scss";
import RootLayout from "./layout";
import About from "./components/about";
import Hero from "./components/hero";
import Music from "./components/music";
import Discography from "./components/Discography";
import Footer from "./components/footer";
import "./styles/global.scss";

export default function Index(): JSX.Element {
  return (
    <>


    <RootLayout>
      <main id={styles.main}>
        <Hero />
        <About />

        <Music />
        <Discography />
      </main>
      <Footer />
    </RootLayout>
    </>
  );
}