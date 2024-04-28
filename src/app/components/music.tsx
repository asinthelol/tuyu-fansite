import React from "react";
import styles from '../styles/discography.module.scss';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

// Data for songs
const songs = [
  {
    src: 'songs/yappariameha.jpg',
    alt: "TUYU - 'It's Raining After All'",
    link: 'https://www.youtube.com/watch?v=D0ehC_8sQuU',
  },
  {
    src: 'songs/kuraberarekko.jpeg',
    alt: "TUYU - 'Compared Child (Remix)'",
    link: 'https://www.youtube.com/watch?v=4TmzJzGXbB4',
  },
  {
    src: 'songs/shuutennosakiga.jpg',
    alt: "TUYU - 'If There Was An Endpoint.'",
    link: 'https://www.youtube.com/watch?v=vcw5THyM7Jo',
  },
  {
    src: 'songs/dorono.png',
    alt: "TUYU - 'Being low as dirt, taking what's important from me'",
    link: 'https://www.youtube.com/watch?v=M7FH1dL51oU',
  },
  {
    src: 'songs/daemonisch.png',
    alt: "TUYU - 'Dämonisch'",
    link: 'https://www.youtube.com/watch?v=Wx08V5jPEwg',
  },
];

// Exactly what it suggests.
const PlayButton = ({ link }: { link: string}) => (
  <div className={styles['play-button']}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="material-symbols-outlined" draggable={false}>
        play_arrow
      </span>
    </a>
  </div>
);

export default function Music() {
  return (
    <section id={styles.discography}>
      <h2 className={poppins.className}>MUSIC VIDEOS</h2>
      <div id={styles['song-area']}>
        {songs.map((song, index) => (
          <div key={index} className={styles.song}>
            <img
              className={styles['song-image']}
              src={song.src}
              alt={song.alt}
              draggable={false}
            />
            <PlayButton link={song.link} />
          </div>
        ))}
      </div>
    </section>
  );
}