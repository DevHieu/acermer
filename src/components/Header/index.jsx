import styles from "./Header.module.scss";
import background from "../../assets/image/background/header.png";

export default function index() {
  return (
    <div className={styles.wrapper}>
      <img src={background} alt="background" className={styles.background} />
    </div>
  );
}
