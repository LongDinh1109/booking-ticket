import { quanLyPhimService } from "../../Services/QuanLyPhimService";
import { DOMAIN } from "../../util/setting/config";
import { SET_CAROUSEL } from "./Types/CarouselType";

const { default: Axios } = require("axios")


export const getCarouselAction = () =>{
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();
            dispatch({
                type: SET_CAROUSEL,
                arrImg:result.data.content
            })
        }catch(err){
            console.log(err)
        }
      }
}
