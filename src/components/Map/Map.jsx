import styles from "./Map.module.scss";
import "./index.css";
import Title from "../Title";
import VideoPlayer from "../ImageAni/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import img1 from "../../assets/image/background/explorer.png";
import img2 from "../../assets/image/background/aboutUs.png";
import img3 from "../../assets/image/background/plot.png";
import leftArrow from "../../assets/image/arrows/map-left.png";
import rightArrow from "../../assets/image/arrows/map-right.png";

export default function Map() {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076273/ihjwtz8nvjwa8bl4uelu.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        <Title title="acermer continent" width={370} height={60} />
        <div className={styles.slideWrapper}>
          <Swiper
            className="mySwiper"
            spaceBetween={100}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <VideoPlayer
                id="player1"
                publicId="Map_2_render_GIF_1p_jc09m2"
                playerConfig={{
                  muted: true,
                }}
                width={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img1}
                alt="img1"
                className="slideImage"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="img1"
                className="slideImage"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="img1"
                className="slideImage"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img1}
                alt="img1"
                className="slideImage"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="img1"
                className="slideImage"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
          <div className={styles.arrow}>
            <button className="arrow-left arrow">
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className="arrow-right arrow">
              <img src={rightArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <h1>HELIGOS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis
            asufhsdfkhasdfjkasdhfjksdhfjkasdhfjkasdfhk
          </p>
        </div>
      </div>
    </div>
  );
}
