import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import Title from "../Title";
import "./ImageSlider.css";
import leftArrow from "../../assets/image/arrows/card-left.png";
import rightArrow from "../../assets/image/arrows/card-right.png";
import gsap from "gsap";
import data from "../../data/CardData";

const image1 = "src/assets/image/card.png";
const image2 = "src/assets/image/card.png";
const image3 = "src/assets/image/card.png";
const image4 = "src/assets/image/card.png";
const image5 = "src/assets/image/card.png";
const image6 = "src/assets/image/card.png";

const imageArray = [image1, image2, image3, image4, image5, image6];

export default function Card() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  useEffect(() => {
    if (midImage == 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage == imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const Increment = () => {
    if (midImage == imageArray.length - 1) {
      setMidImage(0);
    } else {
      setMidImage(midImage + 1);
    }
    //----------------GSAP ANIMATIONS-------------------------
    gsap.fromTo(
      ".middleImage",
      { x: -200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };
  const Decrement = () => {
    if (midImage == 0) {
      setMidImage(imageArray.length - 1);
    } else {
      setMidImage(midImage - 1);
    }
    //----------------GSAP ANIMATIONS-------------------------
    gsap.fromTo(
      ".middleImage",
      { x: 200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };

  return (
    <div className={styles.wrapper}>
      <img
        src="https://res.cloudinary.com/dyjeugvrl/image/upload/v1731076272/cibz7lcf7ih1uxy1s7wn.webp"
        alt="background"
        className={styles.background}
        loading="lazy"
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <Title title="The explorer" width={350} height={50} />
          <div>
            <div className="ImageSlider">
              <button className="leftButton btn" onClick={() => Decrement()}>
                <img src={leftArrow} alt="left-arrow" />
              </button>
              <div className="ImageSliderContainter">
                <div className="Images">
                  <img
                    src={data[rightImage].img}
                    alt="card"
                    className="rightImage"
                    loading="lazy"
                  />
                  <img
                    src={data[midImage].img}
                    alt="card"
                    className="middleImage"
                    loading="lazy"
                  />
                  <img
                    src={data[leftImage].img}
                    alt="card"
                    className="leftImage"
                    loading="lazy"
                  />
                </div>
              </div>
              <button className="rightButton btn" onClick={() => Increment()}>
                <img src={rightArrow} alt="right-arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h1>{data[midImage].title}</h1>
            <p>{data[midImage].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
