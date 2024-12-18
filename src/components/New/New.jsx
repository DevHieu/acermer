/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./New.module.scss";
import data from "../../data/NewData";

const Content = ({ title, content, img, index, reverse }) => {
  return (
    <div className={reverse ? styles.box : `${styles.box} ${styles.reverse}`}>
      <Link to={`/info/${index}`}>
        <img src={img} alt="image" className={styles.image} />
      </Link>
      <div className={reverse ? styles.right : styles.left}>
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default function New() {
  return (
    <div className={styles.wrapper} id="New">
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076274/elj1iexkzty9iihxqyzx.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        {data.map((value, index) => {
          return (
            <Content
              key={index}
              title={value.title}
              content={value.content}
              img={value.img}
              index={index}
              reverse={index % 2 == 0}
            />
          );
        })}
      </div>
    </div>
  );
}
