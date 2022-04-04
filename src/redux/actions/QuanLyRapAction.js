import { quanLyRapService } from "../../Services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./Types/QuanLyRapType";

export const layDanhSachHeThongRapAction = (dispatch) => {
    return async dispatch =>{
        try{
            const result = await quanLyRapService.layDanhSachHeThongRap();
            // console.log('result',result);
            if(result.status === 200){
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result.data.content
                })
            }
        }catch(err){
            console.log(err)
        }
    }
}

export const layThongTinChiTietPhim = (id) =>{
    return async dispatch =>{
        try{
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);
            console.log(result)
            if(result.status  === 200){
                dispatch({
                    type:SET_CHI_TIET_PHIM,
                    filmDetail:result.data.content
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
