import styles from "./Card.module.scss";
import background from "../../assets/image/background/explorer.png";
import Title from "../Title";
import Slide from "../../components/Slide/ImageSlider";

export default function index() {
  return (
    <div className={styles.wrapper}>
      <img
        src={background}
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <Title title="The explorer" width={350} height={50} />
          <div>
            <Slide />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h1>THE ACERMER...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat.
              <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
