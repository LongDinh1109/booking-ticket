import React, { useEffect, useState } from "react";
import { Button, Descriptions, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { chinhSuaThongTinAction, layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { Tabs } from "antd";
import moment from "moment";
import _ from "lodash";
import { useFormik } from "formik";
import { GROUPID } from "../../util/setting/config";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default function Profile() {
  return (
    <div style={{ width: "70%" }} className="mx-5">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Thong Tin Khach Hang" key="1">
          <ThongTin />
        </TabPane>
        <TabPane tab="Lich su dat ve" key="2">
          <KetQuaDatVe />
        </TabPane>
      </Tabs>
    </div>
  );
}

function ThongTin(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log(thongTinNguoiDung);
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      email: thongTinNguoiDung.email,
      soDt: thongTinNguoiDung.soDt,
      maNhom: `${GROUPID}`,
      hoTen: thongTinNguoiDung.hoTen,
      maLoaiNguoiDung: "Khách hàng"
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(chinhSuaThongTinAction(values))
    },
  });

  
  return (
    <div className="container mt-5 ">
      <Descriptions
        contentStyle={{ fontSize: "20px" }}
        labelStyle={{ fontWeight: "bold", fontSize: "20px" }}
        title="User Info"
      >
        <Descriptions.Item label="UserName">
          {thongTinNguoiDung.taiKhoan}
        </Descriptions.Item>
        <Descriptions.Item label="Telephone">
          {thongTinNguoiDung.soDt}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {thongTinNguoiDung.email}
        </Descriptions.Item>
        <Descriptions.Item label="Name">
          {thongTinNguoiDung.hoTen}
        </Descriptions.Item>
        <Descriptions.Item label="Type">
          {thongTinNguoiDung.loaiNguoiDung}
        </Descriptions.Item>
      </Descriptions>
      <div className="text-right w-5/6 mt-6">
        <Button  type="primary" onClick={showModal}>
          Chinh sua
      </Button>
      <Modal title="Edit Profile" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
      <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      
      <div className="">
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Username
              </div>
              <input
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type
                placeholder="Input username"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                name="matKhau"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}

                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Phonenumber
                </div>
              </div>
              <input
                name="soDt"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.soDt}

                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your phonenumber"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Name
                </div>
              </div>
              <input
                name="hoTen"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.hoTen}

                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
      </Modal>
      </div>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);

  console.log("thongTinNguoiDung", thongTinNguoiDung);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-pink-500 title-font font-medium text-2xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
              </p>
              <p>
                <span className="font-bold">Địa điểm:</span>{" "}
                {seats.tenHeThongRap}{" "}
              </p>
              <p>
                <span className="font-bold">Tên rạp:</span> {seats.tenCumRap} -{" "}
                <span className="font-bold">Ghế:</span>{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="text-green-500 text-xl" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {renderTicketItem()}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                                <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
