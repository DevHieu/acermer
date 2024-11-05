import styles from "./MainMenu.module.scss";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import Trailer from "../../components/Trailer";
import Plot from "../../components/Plot";

export default function MainMenu() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <Trailer />
      <Plot />
    </div>
  );
}
