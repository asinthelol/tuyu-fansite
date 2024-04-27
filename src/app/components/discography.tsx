import styles from '../styles/index.module.scss'

export default function Discography() {
  return (
    <>
      <section id={styles.discography}>
        <div className={styles.song}>
          <img className={styles.song_image} src="/kuraberarekko.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." />
          <div className={styles.play_button}>
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
        </div>

        <div className={styles.song}>
          <img className={styles.song_image} id={styles.song_one} src="/kuraberarekko.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." />
          <div className={styles.play_button}>
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
        </div>
        <div className={styles.song}>
          <img className={styles.song_image} id={styles.song_one} src="/kuraberarekko.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." />
          <div className={styles.play_button}>
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
        </div>
        <div className={styles.song}>
          <img className={styles.song_image} id={styles.song_one} src="/kuraberarekko.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." />
          <div className={styles.play_button}>
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
        </div>
      </section>
    </>
  );
}