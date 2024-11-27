import { Link } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import styles from "./NavBar.module.scss";
import small_logo from "../../assets/image/small-logo.webp";

import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  const handle = () => {
    scroller.scrollTo("myScrollToElement", {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElementID",
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Link to="/" className={styles.Linktag}>
          <img src={small_logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.list}>
          <ScrollLink to="Header">
            <button className={styles.listItem}>Home</button>
          </ScrollLink>
          <ScrollLink to="AboutUs">
            <button className={styles.listItem} onClick={handle}>
              About us
            </button>
          </ScrollLink>
          <ScrollLink to="Plot">
            <button className={styles.listItem}>Our game</button>
          </ScrollLink>
          <ScrollLink to="New">
            <button className={styles.listItem}>New</button>
          </ScrollLink>
          <ScrollLink to="Footer">
            <button className={styles.listItem}>Help</button>
          </ScrollLink>
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
