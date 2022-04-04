import { history } from "../../App";
import { quanLyPhimService } from "../../Services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./Types/QuanLyPhimType";

export const layDanhSachPhimACtion = (tenPhim='') => {
    return async (dispatch) =>{
        try{
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);

            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const themPhimUploadHinhAction = (formData)=>{
    return async (dispatch)=>{
        try{
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('them thanh cong')
            console.log('result', result)
        }catch(err){
            console.log(err)
        }
    }
}

export const layThongTinPhimAction =  (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);

   

            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}

export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result.data.content);

            dispatch(layDanhSachPhimACtion());
            history.push('/admin/films');

            
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}

export const xoaPhimAction = (maPhim) =>{
    return async (dispatch) =>{
        try {
            let result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result)
            alert('Xoa Phim Thanh Cong!');
            dispatch(layDanhSachPhimACtion())
        }catch(err){
            console.log(err)
        }
    }
}
