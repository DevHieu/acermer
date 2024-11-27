import styles from "./Plot.module.scss";
import Title from "../Title";

export default function Plot() {
  return (
    <div className={styles.wrapper} id="Plot">
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076274/usoo9jnlsmtjvspve9xd.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.mainContent}>
        <Title title="guradian world" width={350} height={50} />
        <div className={styles.content}>
          <div className={styles.textScroll}>
            <dt>- Khái quát về Thế giới Guardian Acermer:</dt>
            <dd>
              + Lục địa Acermer: Là trung tâm của thế giới, nơi có thành phố lớn
              nhất và phồn vinh nhất, Cybertron. Thành phố này nổi bật với tháp
              Acermer cao chọc trời, nơi cất giữ &ldquo;Nôi&ldquo; – một tạo vật
              mang lại sinh mạng bất tử cho các Guardian.
            </dd>
            <dd>
              + Vùng đất G-A: Là nơi tập hợp nhiều chủng tộc và sinh vật siêu
              nhiên, bao gồm cả những sinh vật bị đột biến bởi mana. Tuy nhiên,
              thế giới này đã bị tàn phá bởi cuộc nội chiến giữa con người (QK
              human) và các Guardian, dẫn đến sự biến đổi địa hình và sự xuất
              hiện của các sinh vật đột biến.
            </dd>
            <dd>
              +Guardian: Là một chủng tộc vĩ đại, có trách nhiệm bảo vệ các QK
              human và các chủng tộc khác. Họ sở hữu sức mạnh vĩ đại và mang
              trong mình trách nhiệm lớn lao.
            </dd>
            <dt>- Nhân vật chính: </dt>
            <dd>
              + Neriva: Là một Guardian may mắn sống sót sau cuộc nổi dậy ở tháp
              Acermer. Cô đã trốn thoát và rơi xuống vùng đất Cybertron, nơi cô
              gặp tinh linh Nyan. Neriva bắt đầu cuộc phiêu lưu để giải cứu đồng
              loại và khám phá nguyên nhân của thánh chiến Thornes.
            </dd>
            <dd>
              + Nyan**: Là một tinh linh hình mèo nhỏ, cổ xưa, đã tồn tại trước
              cả thánh chiến. Nyan sẽ đồng hành cùng Neriva trong hành trình của
              cô.
            </dd>
            <dt>- Mục tiêu của Người chơi:</dt>
            <dd>
              + Thu thập phiến đá cổ Steinplatte: Người chơi sẽ khám phá quá khứ
              của thế giới và tìm hiểu ***yên nhân của cuộc chiến Thornes thông
              qua việc thu thập các phiến đá cổ.
            </dd>
            <dd>
              + Sở hữu trang phục và vật phẩm: Người chơi có thể thu thập trang
              phục, phụ kiện độc đáo, vật phẩm hồi máu, đạn dược thông qua việc
              đánh boss, thu thập rương và hoàn thành nhiệm vụ ẩn.
            </dd>
            <dd>
              Giải cứu các Guardian: Để đánh đổ tòa tháp Acermer, người chơi cần
              kích hoạt các chiếc nôi sinh mệnh ở 7 vùng đất khác nhau, từ đó
              giải cứu các Guardian đang bị giam cầm.
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}
