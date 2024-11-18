import { useEffect, useState } from "react";
import styles from "./Map.module.scss";
import "./index.css";
import Title from "../Title";
import VideoPlayer from "../ImageAni/index";
import MapData from "../../data/MapData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import leftArrow from "../../assets/image/arrows/map-left.png";
import rightArrow from "../../assets/image/arrows/map-right.png";

export default function Map() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState(MapData[activeStep].title);
  const [content, setContent] = useState(MapData[activeStep].content);

  useEffect(() => {
    setTitle(MapData[activeStep].title);
    setContent(MapData[activeStep].content);
  }, [activeStep]);

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
            onActiveIndexChange={({ realIndex }) => {
              setActiveStep(realIndex);
            }}
          >
            {MapData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <VideoPlayer
                    id="player1"
                    publicId={data.publicId}
                    playerConfig={{
                      muted: true,
                    }}
                    width={100}
                  />
                </SwiperSlide>
              );
            })}
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
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
