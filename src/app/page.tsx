import styles from "../app/styles/index.module.scss";
import RootLayout from "./layout";
import About from "./components/about";
import Hero from "./components/hero";
import Discography from "./components/discography";
import Albums from "./components/albums";
import Footer from "./components/footer";

export default function Index() {
  return (
    <>


    <RootLayout>
      <main id={styles.main}>
        <Hero />
        <About />

        <Discography />
        <Albums />
      </main>
      <Footer />
    </RootLayout>
    </>
  );
}