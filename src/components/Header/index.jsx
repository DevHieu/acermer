import styles from "./Header.module.scss";
import background from "../../assets/image/background/header.png";
import logo from "../../assets/image/game-logo.png";

export default function index() {
  return (
    <div className={styles.wrapper}>
      <img
        src={background}
        alt="background"
        className={styles.background}
        loading="lazy"
      />

      <div className={styles.content}>
        <img
          src={logo}
          alt="game-logo"
          className={styles.logo}
          loading="lazy"
        />
        <div className={styles.title}>
          <h2>CONFRONT DESTINY</h2>
          <h1>AUGUST 18, 2025</h1>
        </div>
        <button className={styles.download}>DOWLOAD NOW</button>
      </div>
    </div>
  );
}
