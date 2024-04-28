import styles from '../styles/index.module.scss';
import albumStyles from '../styles/album.module.scss'

export default function Albums() {
  return (
    <>
    <section id={albumStyles.albums}>

      <div className={`${albumStyles.album} ${styles.card}`}>
        <div className={albumStyles["album-banner"]} data-albumname="It's Raining After All"></div>
        <div className={albumStyles["play-button"]}>
          <a href="#" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
        </div>
        <div className={albumStyles["song-list"]}>
          <div className={albumStyles["song"]}>It's Raining After All</div>
          <div className={albumStyles["song"]}>Under the Summer Breeze</div>
          <div className={albumStyles["song"]}>Compared Child</div>
          <div className={albumStyles["song"]}>Goodbye to Rock you</div>
          <div className={albumStyles["song"]}>Even tears withered</div>
        </div>
      </div>
      <div className={`${albumStyles.album} ${styles.card}`}>
        <div className={albumStyles["album-banner"]} data-albumname="I'll Put You in Misery"></div>
        <div className={albumStyles["play-button"]}>
          <a href="#" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
        </div>
        <div className={albumStyles["song-list"]}>
          <div className={albumStyles["song"]}>Dämonisch</div>
          <div className={albumStyles["song"]}>Trapped in the past</div>
          <div className={albumStyles["song"]}>Loser Girl</div>
          <div className={albumStyles["song"]}>What If This Isn't a Slave?</div>
          <div className={albumStyles["song"]}>If There Was an Endpoiint.</div>
        </div>
      </div>
      <div className={`${albumStyles.album} ${styles.card}`}>
        <div className={albumStyles["album-banner"]} data-albumname="Under Mentality"></div>
        <div className={albumStyles["play-button"]}>
          <a href="#" target="_blank"><span className="material-symbols-outlined" draggable={false}>play_arrow</span></a>
        </div>
        <div className={albumStyles["song-list"]}>
          <div className={albumStyles["song"]}>Under Mentality</div>
          <div className={albumStyles["song"]}>Under Kids</div>
          <div className={albumStyles["song"]}>Under Heroine</div>
          <div className={albumStyles["song"]}>I Hope You Can Be an Adult Someday.asdasd</div>
          <div className={albumStyles["song"]}>Replace Name</div>
        </div>
      </div>

    </section>
    </>
  );
}