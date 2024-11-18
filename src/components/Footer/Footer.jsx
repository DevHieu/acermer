import styles from "./Footer.module.scss";
import logo from "../../assets/image/logo.webp";
import gameLogo from "../../assets/image/game-logo.webp";
import warning from "../../assets/image/warning.webp";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076273/mpkuluz2tfchclxyxwrl.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="company logo" className={styles.comLogo} />
          <img src={gameLogo} alt="game logo" className={styles.gameLogo} />
        </div>
        <div className={styles.license}>
          <a href="https://www-youtube-com.translate.goog/static?template=terms&_x_tr_sl=en&_x_tr_tl=vi&_x_tr_hl=vi&_x_tr_pto=tc">
            Điều khoản dịch vụ
          </a>
          <a href="https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer">
            Chính sách về quyền riêng tư
          </a>
          <a href="https://about.google/intl/ALL_vn/">Giới thiệu công ty</a>
        </div>
        <img src={warning} alt="warning" className={styles.warning} />
        <p>Chơi game quá 180 phút sẽ gâu ảnh hưởng đến sức khỏe</p>
        <p>Người chịu trách nhiệm nội dung: Ông Bùi Nguyễn Mạnh Hùng</p>
        <p>16/25 Phý Mỹ Hưng, Quận 7, Thành Phố Hồ Chí Minh</p>
        <p>
          &ldquo;PlayStation Family Mark,&ldquo; &ldquo;PS5 logo&ldquo; and
          &ldquo;PS4 logo&ldquo; are registered trademarks or trademarks of Sony
          Interactive Entertainment Inc.
          <br /> Epic, Epic Games, Epic Games Store, the Epic Games Store logo,
          and Epic Online Services are trademarks and/or registered trademarks
          of Epic Game
        </p>
        <p>
          All other trademarks are the property of their respective owners.for
          admin
        </p>
      </div>
    </div>
  );
}
