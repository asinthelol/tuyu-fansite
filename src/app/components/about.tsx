import styles from "../styles/index.module.scss";

export default function About() {
  return (

    <>
      <section id={styles.about}>
        <div id={styles.kurabera_icon}>
        <img src="/tuyu-logo.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." />
        </div>
        <div id={styles.artist_info}>
          <p>A music unit consisting of Pusu on guitar and in charge of composing the songs, Rei as vocals, and miro on piano. The group was formed on June 12, 2019. It's name comes from the Japanese word for "rainy season" during which it was formed.</p>
        </div>
      </section>
    </>
  )};