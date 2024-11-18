import { useParams } from "react-router-dom";
import styles from "./Infomation.module.scss";
import data from "../../data/NewData";

export default function Infomation() {
  const params = useParams();
  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076274/usoo9jnlsmtjvspve9xd.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{data[params.id].title}</h1>
        <p className={styles.content}>{data[params.id].content}</p>
      </div>
    </div>
  );
}
