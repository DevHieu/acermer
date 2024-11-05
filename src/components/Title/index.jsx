import styles from "./title.module.scss";

export default function index({ title, width, height }) {
  return (
    <div
      className={styles.title}
      style={{ backgroundSize: width + "px " + height + "px" }}
    >
      {title}
    </div>
  );
}
