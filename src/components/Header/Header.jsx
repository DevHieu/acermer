import styles from "./Header.module.scss";
import logo from "../../assets/image/game-logo.png";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076272/kows0ufage2yhyzkbamm.webp"
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
