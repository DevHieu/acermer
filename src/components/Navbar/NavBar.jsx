import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import small_logo from "../../assets/image/small-logo.png";

import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Link to="/" className={styles.Linktag}>
          <img src={small_logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.list}>
          <button className={styles.listItem}>Home</button>
          <button className={styles.listItem}>About us</button>
          <button className={styles.listItem}>Our game</button>
          <button className={styles.listItem}>New</button>
          <button className={styles.listItem}>Help</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <IoIosSearch size={20} className={styles.searchIcon} />
        </div>

        <button className={styles.loginBtn}>LOGIN</button>
      </div>
    </div>
  );
}
