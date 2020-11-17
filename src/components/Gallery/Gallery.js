import React from "react";
import "./Gallery.scss";
import Image from "./Image";
import img1 from "../../images/gallery/IMG-1.jpg";
import img2 from "../../images/gallery/IMG-2.jpg";
import img3 from "../../images/gallery/IMG-3.jpg";
import img4 from "../../images/gallery/IMG-4.jpg";
import img5 from "../../images/gallery/IMG-5.jpg";
import img6 from "../../images/gallery/IMG-6.jpg";
import img7 from "../../images/gallery/IMG-7.jpg";
import img8 from "../../images/gallery/IMG-8.jpg";
import img9 from "../../images/gallery/IMG-9.jpg";
import img10 from "../../images/gallery/IMG-10.jpg";
import img11 from "../../images/gallery/IMG-11.jpg";
import img12 from "../../images/gallery/IMG-12.jpg";
import img13 from "../../images/gallery/IMG-13.jpg";
import img14 from "../../images/gallery/IMG-14.jpg";

const Gallery = () => {
  const arr = [
    img1,
    img2,
    img3,
    img13,
    img14,
    img9,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="gallery">
      {arr.map((img, index) => (
        <Image url={img} key={img} arr={arr} index={index} />
      ))}
    </div>
  );
};

export default Gallery;
