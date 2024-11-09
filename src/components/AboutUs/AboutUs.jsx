import styles from "./AboutUs.module.scss";
import Title from "../Title";

export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076274/id5nnkny1emflpfw9si1.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.mainContent}>
        <Title title="ABOUT US" width={210} height={50} />
        <div className={styles.content}>
          <p>
            Vishun game Studio - Chúng tôi là ai ?<br /> VISHUN STUDIO là một
            studio game nhỏ tại Việt Nam với sứ mệnh phát triển trò chơi Acermer
            Guradian. Là những người yêu thích game, chúng tôi đam mê tạo ra
            những trải nghiệm chơi game độc đáo và hấp dẫn, phục vụ cho cộng
            đồng game thủ và thể hiện tâm huyết của từng cá nhân trong đội ngũ.
            <br />
            <br />
            VISHUN STUDIO tự hào mang đến cho bạn một thế giới game độc đáo với
            những hình ảnh và câu chuyện hoàn toàn mới mẻ, với sự kết hợp giữa
            công nghệ, ma thuật và yếu tố giả tưởng để tạo ra một bối cảnh phong
            phú và hấp dẫn. Mỗi nhân vật và cốt truyện trong tựa game đều là sản
            phẩm sáng tạo của từng thành viên, thể hiện đam mê và tâm huyết của
            đội ngũ phát triển.
          </p>
        </div>
      </div>
    </div>
  );
}
