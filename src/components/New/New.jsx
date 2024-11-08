/* eslint-disable react/prop-types */
import styles from "./New.module.scss";
import background from "../../assets/image/background/new.png";
import data from "../../data/NewData";
import cityImg from "../../assets/image/city.png";

const Content = ({ title, content, reverse }) => {
  return (
    <div className={reverse ? styles.box : `${styles.box} ${styles.reverse}`}>
      <img src={cityImg} alt="image" />
      <div className={reverse ? styles.right : styles.left}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function New() {
  return (
    <div className={styles.wrapper}>
      <img
        src={background}
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        {data.map((value, index) => (
          <Content
            title={value.title}
            content={value.content}
            key={index}
            reverse={index % 2 == 0}
          />
        ))}
      </div>
    </div>
  );
}
