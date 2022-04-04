import { values } from "lodash";
import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService{

    constructor(){
        super();
    }

    dangNhap = (thongTinDangNhap) =>{ 
        return this.post('api/QuanLyNguoiDung/DangNhap',thongTinDangNhap);
    }

    layThongTinNguoiDung = () =>{ 
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
    
    dangKy = (values) =>{
        return this.post(`api/QuanLyNguoiDung/DangKy`,values)
    }

    chinhSuaThongTin = (values)=>{
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,values)
    }
    
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();