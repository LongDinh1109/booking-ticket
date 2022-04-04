import React, { Fragment, memo, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import {NavLink} from 'react-router-dom';
import moment from 'moment'

const { TabPane } = Tabs;

function HomeMenu(props) {
  console.log("props123", props);
  const { heThongRapChieu } = props;
  const renderHeThongRap = () => {
    return heThongRapChieu.map((rap, index) => {
      return (
        <TabPane
          key={index}
          tab={<img src={rap.logo} className="rounded-full w-20" alt="" />}
        >
          <Tabs tabPosition={"left"}>
            {rap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div className="flex">
                      <img src={cumRap.hinhAnh} className=" w-12 mr-2" alt="" />
                      <div>
                        {cumRap.tenCumRap}
                        <p className="text-red-500 text-left">Chi tiet</p>
                        </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.map((phim,index)=>{
                    return <Fragment key={index}>
                    <div className="flex my-2">
                      <div className="mr-2">
                        <img width={100} height={100} src={phim.hinhAnh} alt=''/>
                      </div>
                      <div>
                        <h3 className="text-xl text-left text-blue-900">{phim.tenPhim}</h3>
                        <p className="text-left m-0">{cumRap.diaChi}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      {phim.lstLichChieuTheoPhim?.slice(0,10).map((lich,index)=>{
                        return <Fragment key={index} className='mr-2'>
                          <NavLink className='rounded-xl border-2 border-indigo-500 text-indigo-500 m-2' to={`/checkout/${lich.maLichChieu}`}>
                            {moment(lich.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                        </Fragment>
                      })}
                    </div>
                    <hr/>
                    </Fragment>
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition={"left"}>{renderHeThongRap()}</Tabs>
    </>
  );
}

export default memo(HomeMenu);
