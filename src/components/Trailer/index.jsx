import styles from "./Trailer.module.scss";
import background from "../../assets/image/background/trailer.png";
import Title from "../Title";

export default function index() {
  const embedId = "u83VdXAVq08";
  return (
    <div className={styles.wrapper}>
      <img
        src={background}
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
