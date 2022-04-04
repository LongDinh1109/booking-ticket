import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import './HomeCarousel.css'

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  // console.log(arrImg)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="opacity-0" alt="" />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="w-full text-center" >
      <Carousel effect="fade" >
        {renderImg()}
      </Carousel>
    </div>
  );
}
