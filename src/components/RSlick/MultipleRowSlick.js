import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/Types/QuanLyPhimType";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {

  const dispatch = useDispatch();
  const {dangChieu,sapChieu} = useSelector(state => state.QuanLyPhimReducer)
  
  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';
  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';
  

  const renderFilm = () => {
    return props.arrFilm.slice(0, 12).map((film, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <Film_Flip phim={film} />
        </div>
      );
    });
  };

  // console.log('arrFilm',this.props.arrFilm)

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mt-5">
      <button
        type="button"
        className= {`${styleSlick[activeClassDC]} px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-coolGray-100 mr-2`}
        onClick={()=>{
          const action = {type:SET_FILM_DANG_CHIEU}
          dispatch(action);
        }}
      >
        PHIM DANG CHIEU
      </button>
      <button
      onClick={()=>{
        const action = {type:SET_FILM_SAP_CHIEU}
        dispatch(action);
      }}
        type="button"
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-coolGray-100`}
      >
        PHIM SAP CHIEU
      </button>
      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
