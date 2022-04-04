import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDung"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./Types/QuanLyNguoiDungType";
import { history } from "../../App";
export const dangNhapAction = (thongTinDangNhap) =>{
    return async dispatch =>{
        try{
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            // console.log("result",result)

            if(result.status === 200){
                dispatch({
                    type:DANG_NHAP_ACTION,
                    thongTinDangNhap:result.data.content
                })
                history.push("/home");

            }

        }catch(err){
            console.log(err)
        }
    }
}

export const layThongTinNguoiDungAction = (thongTinDangNhap) =>{
    return async dispatch =>{
        try{
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(thongTinDangNhap);
            // console.log("result",result)

            if(result.status === 200){
                dispatch({
                    type:SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung:result.data.content
                })
            }

        }catch(err){
            console.log(err)
        }
    }
}

//Dang ky action
export const dangKyAction = (values) =>{
    console.log(values)
    return async dispatch =>{
        try{
            const result = await quanLyNguoiDungService.dangKy(values);
            console.log("result",result)

            if(result.status === 200){
                alert('chinh sua thanh cong!')
                dispatch(dangNhapAction(values))
            }


        }catch(err){
            console.log(err)
        }
    }
}

//chinh sua thong tin
export const chinhSuaThongTinAction = (values) =>{
    console.log(values)
    return async dispatch =>{
        try{
            const result = await quanLyNguoiDungService.chinhSuaThongTin(values);
            console.log("result",result)

            if(result.status === 200){
                dispatch(layThongTinNguoiDungAction(values))
            }


        }catch(err){
            console.log(err)
        }
    }
}