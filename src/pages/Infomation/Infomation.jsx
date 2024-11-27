import { useParams } from "react-router-dom";
import styles from "./Infomation.module.scss";
import data from "../../data/NewData";
import NavBar from "../../components/Navbar";

export default function Infomation() {
  const params = useParams();
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <img
          src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076274/usoo9jnlsmtjvspve9xd.webp"
          alt="background"
          className={styles.background}
          loading="lazy"
        />
        <h1 className={styles.title}>{data[params.id].title}</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.content}>{data[params.id].content}</p>
          </div>
          <div className={styles.right}>
            {data[params.id].stuff.map((value, index) => {
              return <img src={value} alt="img" key={index} loading="lazy" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
