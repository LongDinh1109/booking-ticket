import React, { Fragment, useEffect } from "react";
import "./Detail.css";
import "../../assets/Styles/circle.scss";
import { Tabs, Radio, Space, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/Types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import {NavLink} from 'react-router-dom'
const { TabPane } = Tabs;

export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("filmDetail", filmDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    //    console.log('id',id)
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${filmDetail.hinhAnh})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "1500px",
          width: "100%",
        }}
      >
        <div className="box1 w-full pt-72">
          <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-4">
              <div className="grid grid-cols-2">
                <img src={filmDetail.hinhAnh} alt="" />
                <div className="text-black ml-5 mt-10 font-bold">
                  <p className="text-3l">
                    <span className="text-white ml-2">
                      {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                    </span>
                  </p>
                  <p className="text-3xl">
                    {" "}
                    <span className="text-white ml-2">
                      {filmDetail.tenPhim}
                    </span>
                  </p>
                  <p className="text-2xl">
                    Mo Ta:{" "}
                    <span className="text-white ml-2">{filmDetail.moTa}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <h1
                style={{
                  marginLeft: "15%",
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Đánh giá
              </h1>
              <h1
                style={{ marginLeft: "5%" }}
                className="text-yellow-400 text-2xl"
              >
                <Rate
                  allowHalf
                  value={filmDetail.danhGia / 2}
                  style={{ color: "#78ed78", fontSize: 30 }}
                />
              </h1>
              <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                <span className="text-white">{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5" >
                    <Tabs defaultActiveKey="1" centered >
                        <TabPane tab="Lịch chiếu" key="1" style={{minHeight:300}}>
                            <div >
                                <Tabs tabPosition={'left'} >
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center">
                                                <img src={htr.logo} className="rounded-full w-full" style={{width:50}} alt=''/>
                                                <div className="text-center ml-2">
                                                {htr.tenHeThongRap}
                                                </div>
                                            </div>}
                                            key={index}>
                                                {htr.cumRapChieu?.map((cumRap,index)=>{ 
                                                    return <div className="mt-5" key={index}>
                                                        <div className="flex flex-row">
                                                            <img alt='' style={{width:60,height:60}} src={cumRap.hinhAnh} />
                                                            <div className="ml-2">
                                                                <p style={{fontSize:20,fontWeight:'bold',lineHeight:1}} >{cumRap.tenCumRap}</p>
                                                                <p className="text-gray-400" style={{marginTop:0}}>{cumRap.diaChi}</p>
                                                            </div>
                                                        </div>
                                                        <div className="thong-tin-lich-chieu grid grid-cols-4">
                                                            {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index) => {
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="rounded-xl border-2 border-indigo-500 text-indigo-500 m-2 text-center">
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                })}
                                    </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{minHeight:300}}>
                            Thông tin
                    </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{minHeight:300}}>
                            Đánh giá
                    </TabPane>
                    </Tabs>
                </div>
        </div>
      </div>
    </Fragment>
  );
}
