import React from "react";
import styles from "../styles/discography.module.scss";
import albums from "../json/albums.json";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const ListenButton = ({ link }: { link: string }) => (
  <div className={styles["listen-button"]}>
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
              <div
                className={styles["album-banner"]}
                style={{
                  background: `url(${album.image}) no-repeat center/cover`,
                }}
              >
                {/* Overlay for darkening effect */}
                <div className={styles["overlay"]}></div>

                <p>{album.title}</p>
              </div>
              <div className={styles["song-list"]}>
                {album.songs.map((song) => (
                  <React.Fragment key={song.title}>
                    <div className={styles["song-holder"]}>
                      <div className={styles.song}>{song.title}</div>
                      <div className={styles["song-length"]}>{song.length}</div>
                    </div>
                    <hr className={styles["song-divider"]} />
                  </React.Fragment>
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
