import React, { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { layDanhSachPhimACtion } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  // console.log(arrFilm)

  // const renderFilm = () =>{
  //   return arrFilm.map((phim,index)=>{
  //     return <Film key={index}/>
  //   })
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimACtion());
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  return (
    <Fragment>
      <HomeCarousel />

      <div className="container m-auto">
        <MultipleRowSlick arrFilm={arrFilm} />
        <div className="text-black  text-center m-auto">
          <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">{/* {renderFilm()} */}</div>
            </div>
          </section>
          <HomeMenu heThongRapChieu={heThongRapChieu} />
        </div>
      </div>
    </Fragment>
  );
}
