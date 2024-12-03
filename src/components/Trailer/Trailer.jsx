import styles from "./Trailer.module.scss";
import Title from "../Title";

export default function Trailer() {
  const embedId = "qsnNhVwAJvg";
  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076272/u8c0ckgqqvs5maziscah.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        <Title title="OUR GAME TITLE" width={300} height={50} />
        <div className={styles.frame}>
          <iframe
            width="853"
            height="480"
            loading="lazy"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className={styles.video}
          />
        </div>
      </div>
    </div>
  );
}
