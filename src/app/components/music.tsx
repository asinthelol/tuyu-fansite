"use client";

import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../styles/music.module.scss";
import songs from "../json/songs.json";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

// Exactly what it suggests.
const PlayButton = ({ link }: { link: string }) => (
  <div className={styles["play-button"]}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="material-symbols-outlined" draggable={false}>
        play_arrow
      </span>
    </a>
  </div>
);

export default function Music() {
  // Track the current song index in the carousel
  const [cSongIndex, setSongIndex] = useState(0);

  const cycleIndex = (increment: number) =>
    setSongIndex((cSongIndex + increment + songs.length) % songs.length);

  // Indexes for the current, previous, and next song
  const indexes = [
    {
      index: (cSongIndex - 1 + songs.length) % songs.length,
      className: styles["song-previous"],
    },
    {
      index: cSongIndex,
      className: styles["song-current"],
    },
    {
      index: (cSongIndex + 1) % songs.length,
      className: styles["song-next"],
    },
  ];

  return (
    <section id={styles.music}>
      <h2 className={poppins.className}>MUSIC VIDEOS</h2>

      <div id={styles["song-area"]}>
        <button
          className={styles["arrow-button"]}
          aria-label="left-button-slider"
          onClick={() => cycleIndex(-1)}
        >
          <span className="material-symbols-outlined">navigate_before</span>
        </button>

        <TransitionGroup className={styles["css-transition"]}>
          {/* Maps through the song indexes to render each song */}
          {indexes.map((i) => {
            return (
              <CSSTransition
                key={i.index}
                timeout={300}
                classNames={{
                  enter: styles["enter"],
                  enterActive: styles["enter-active"],
                  exit: styles["exit"],
                  exitActive: styles["exit-active"],
                }}
              >
                <div className={`${styles.song} ${i.className}`}>
                  <img
                    className={styles["song-image"]}
                    src={songs[i.index].src}
                    alt={songs[i.index].alt}
                    draggable={false}
                    loading="lazy"
                  />
                  <PlayButton link={songs[i.index].link} />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <button
          className={styles["arrow-button"]}
          aria-label="right-button-slider"
          onClick={() => cycleIndex(1)}
        >
          <span className="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
    </section>
  );
}
