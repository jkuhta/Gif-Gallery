import React from "react";
import GifBox from "./GifBox";
import "./Home.css";
import img1 from "../assets/analogni.gif";
import img2 from "../assets/komplementarni.gif";
import img3 from "../assets/nasičenost.gif";
import img4 from "../assets/svetlost.gif";
import img5 from "../assets/temperatura.gif";
import img6 from "../assets/ton_črke.gif";
import img7 from "../assets/ton_nasičenost.gif";
import img8 from "../assets/ton_svetlost.gif";
import img9 from "../assets/ton_temperatura.gif";
import img10 from "../assets/ton.gif";
import img11 from "../assets/triad.gif";
import img12 from "../assets/triada.gif";

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            {imgs.map((img, index) => (
              <GifBox key={index} className="gif__box" src={img} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
