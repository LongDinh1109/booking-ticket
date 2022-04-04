import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_DAT_VE } from "../actions/Types/QuanLyDatVeType"
import {ThongTinLichChieu} from '../../_core/models/ThongTinPhongVe'
const initialState = {
    chiTietPhongVe : new ThongTinLichChieu(),
    danhSachGheDangDat:[],
    danhSachGheKhachDat:[{maGhe:90601}],
    tabActive: 1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_DAT_VE:{
        return {...state,chiTietPhongVe:action.chiTietPhongVe}
    }

    case DAT_VE:{
        let danhSachGheCapNhat = [...state.danhSachGheDangDat]
        console.log('action456',action)

        let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)
        console.log('index',index)
        if(index != -1){
            danhSachGheCapNhat.splice(index,1);
        }else{
            danhSachGheCapNhat.push(action.gheDuocChon)

        }
        console.log('danhSachGheCapNhat',danhSachGheCapNhat)

        return {...state,danhSachGheDangDat:danhSachGheCapNhat}
    }

    case DAT_VE_HOAN_TAT:{
        state.danhSachGheDangDat=[];
        return {...state}
    }
    
    case CHUYEN_TAB :{
        state.tabActive = 2;
        return {...state}
    }

    case 'CHANGE_TAB_ACTIVE':{
        return {...state,tabActive:action.key}
    }

    case 'DAT_GHE':{
        state.danhSachGheKhachDat = action.arrGheKhachDat;
        return {...state}
    }

  default:
    return {...state}
  }
}
