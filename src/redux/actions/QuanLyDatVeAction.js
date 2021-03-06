import { connection } from "../..";
import { quanLyDatVeService } from "../../Services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_DAT_VE } from "./Types/QuanLyDatVeType";


export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch =>{
        try{
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            if(result.status === 200){
                dispatch({
                    type:SET_CHI_TIET_DAT_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        }catch(err){
            console.log(err)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe())=>{
    return async (dispatch,getState) =>{
        try{
            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({
                type: DAT_VE_HOAN_TAT
            })
            await dispatch(hideLoadingAction)

            
            let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
             connection.invoke('datGheThanhCong',userLogin.taiKhoan,thongTinDatVe.maLichChieu);

            dispatch({type:CHUYEN_TAB})
        }catch(err){
            console.log(err)
            dispatch(hideLoadingAction)
        }
    }
}


export const datGheAction = (ghe,maLichChieu) => {


    return async (dispatch,getState) => {

        //Đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        });

        //Call api về backend 
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);
        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

        //Call api signalR
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);




    }

}