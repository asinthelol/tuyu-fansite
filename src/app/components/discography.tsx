import React from "react";
import styles from '../styles/album.module.scss';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

const albums = [ 
  {
    title: "It's Raining After All",
    alt: "Cover of TUYU album 'It's Raining After All'",
    image: "/albums/its-raining-after-all.jpg",
    link: "https://linkco.re/7g3S6Y0A?lang=en",
    songs: [
      {
        title: "Under the Summer Breeze",
        length: "3:22"

      },
      {
        title: "Envy",
        length: "1:48"
      },
      {
        title: "Compared Child",
        length: "3:34"
      },
      {
        title: "Goodbye to Rock you",
        length: "3:28"
      },
      {title: "Even Tears Withered",
        length: "4:09"
      }
    ]
  },
  {
    title: "I'll Put You in Misery",
    alt: "Cover of TUYU album 'I'll Put You in Misery'",
    image: "/albums/ill-put-you-in-misery.jpg",
    link: "https://linkco.re/Snts5rmX?lang=en",
    songs: [
      {
        title: "Dämonisch",
        length: "2:38"
      },
      {
        title: "Trapped in the Past",
        length: "3:48"
      },
      {
        title: "Loser Girl",
        length: "3:17"
      },
      {
        title: "Territory Battle",
        length: "2:30"
      },
      {
        title: "If there was an Endpoint.",
        length: "2:58"
      }
    ]
  },
  {
    title: "Under Mentality",
    alt: "Cover of TUYU album 'Under Mentality'",
    image: "/albums/under-mentality.jpg",
    link: "https://tuyu.lnk.to/undermentality",
    songs: [
      {
        title: "Under Kids",
        length: "3:24"
      },
      {
        title: "Under Heroine",
        length: "2:46"

      },
      {
        title:"Overcast Skies",
        length: "2:41"
      },
      {
        title: "Rain Fall",
        length: "3:45"
      },
      {
        title: "Shelter from the Rain",
        length: "1:15"
      }
    ]
  }
]

const ListenButton = ({ link }: { link: string}) => (
  <div className={styles['listen-button']}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="material-symbols-outlined" draggable={false}>
        headphones
      </span>
    </a>
  </div>
);

export default function Discography() {
  return (
    <>
      <section id={styles.albums}>
        <h2 className={poppins.className}>DISCOGRAPHY</h2>
        <div id={styles["album-area"]}>
          {albums.map((album) => (
            <div key={album.title} className={`${styles.album}`}>
              <div className={styles["album-banner"]} style={{ background: `url(${album.image}) no-repeat center/cover` }}>
                {/* Overlay for darkening effect */}
                <div className={styles["overlay"]}></div>
                
                <p>{album.title}</p>
              </div>
              <div className={styles["song-list"]}>
                {album.songs.map((song) => (
                  <>
                    <div key={song.title} className={styles["song-holder"]}>
                      <div className={styles.song}>{song.title}</div>
                      <div className={styles["song-length"]}>{song.length}</div>
                    </div>
                    <hr className={styles['song-divider']} />
                  </>
                ))}
              </div>

              <ListenButton link={album.link} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}