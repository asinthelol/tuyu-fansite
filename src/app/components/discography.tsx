import styles from '../styles/index.module.scss'

export default function Discography() {
  return (
    <>
      <section id={styles.discography}>
        <div className={styles.song}>
          <img className={styles.song_image} src="/yappariameha.jpg" alt="Thumbnail from TUYU music video 'Compared Child'." draggable={false} />
          <div className={styles.play_button}>
            <a href="https://www.youtube.com/watch?v=D0ehC_8sQuU" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
          </div>
        </div>

        <div className={styles.song}>
          <img className={styles.song_image} src="/kuraberarekko.jpeg" alt="Thumbnail from TUYU music video 'Compared Child'." draggable={false} />
          <div className={styles.play_button}>
          <a href="https://www.youtube.com/watch?v=4TmzJzGXbB4" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
          </div>
        </div>
        <div className={styles.song}>
          <img className={styles.song_image} src="/shuutennosakiga.png" alt="Thumbnail from TUYU music video 'Compared Child'." draggable={false} />
          <div className={styles.play_button}>
          <a href="https://www.youtube.com/watch?v=vcw5THyM7Jo" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
          </div>
        </div>
        <div className={styles.song}>
          <img className={styles.song_image} src="/dorono.png" alt="Thumbnail from TUYU music video 'Compared Child'." draggable={false} />
          <div className={styles.play_button}>
          <a href="https://www.youtube.com/watch?v=M7FH1dL51oU" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
          </div>
        </div>
        <div className={styles.song}>
          <img className={styles.song_image} src="/daemonisch.png" alt="Thumbnail from TUYU music video 'Compared Child'." draggable={false} />
          <div className={styles.play_button}>
          <a href="https://www.youtube.com/watch?v=Wx08V5jPEwg" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
          </div>
        </div>
      </section>
    </>
  );
}