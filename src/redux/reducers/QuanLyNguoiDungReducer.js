import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../actions/Types/QuanLyNguoiDungType"

let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: user,

    thongTinNguoiDung:{

    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,action) => {
  switch (action.type) {

    case DANG_NHAP_ACTION:{
        const {thongTinDangNhap} = action;
        localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
        localStorage.setItem(TOKEN,thongTinDangNhap.accessToken)
        return {...state,userLogin:thongTinDangNhap}
    }

    case SET_THONG_TIN_NGUOI_DUNG : {
      console.log('action123',action.thongTinNguoiDung)
      return {...state,thongTinNguoiDung:action.thongTinNguoiDung}
      // console.log('action123',state)
    }

  default:
    return {...state}
  }
}
