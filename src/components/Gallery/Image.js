import React, { useState } from "react";

const Image = ({ index, arr }) => {
  const [isOpen, setOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(index);

  const handlerPopUp = (e) => {
    setOpen((prevState) => !prevState);
    setIndexImg(index);
  };
  const nextImg = () => {
    if (indexImg + 1 === arr.length) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };
  const prevImg = () => {
    if (indexImg - 1 === -1) {
      setIndexImg(arr.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  return (
    <>
      <img src={arr[index]} alt={index} onClick={handlerPopUp} />
      {isOpen && (
        <div id={"lightbox"}>
          <div className="blur"></div>
          <div className={"btn-background"} onClick={prevImg}>
            <button onClick={prevImg} className="prevBtn" />
          </div>

          <div className={"img-width"} onClick={handlerPopUp}>
            <div
              className="img-d"
              style={{
                backgroundImage: `URL(${arr[indexImg]})`,
              }}
            ></div>
          </div>

          <div className={"btn-background"} onClick={nextImg}>
            <button onClick={nextImg} className="nextBtn" />
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
