import styles from "./MainMenu.module.scss";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import Trailer from "../../components/Trailer";
import Plot from "../../components/Plot";
import Card from "../../components/Card";
import Map from "../../components/Map";

export default function MainMenu() {
  return (
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <Trailer />
      <Plot />
      <Card />
      <Map />
    </div>
  );
}
