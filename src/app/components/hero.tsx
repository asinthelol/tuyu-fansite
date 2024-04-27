import styles from "../styles/index.module.scss";

export default function Hero() {
  return (
    <>
      <section id={styles.hero}>
        <h1 id={styles.hero_text_one}>TU</h1>
        <div id={styles.logo}>
        <img  src="tuyu-logo.jpeg" alt="TUYU official logo."/>
        </div>
        <h1 id={styles.hero_text_two}>YU</h1>
      </section>
    </>
  );
}