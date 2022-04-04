import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../actions/Types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/Types/QuanLyRapType";

const initialState = {
    arrFilm : [
    ],
    dangChieu:true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail:{},
    thongTinPhim:{}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:{
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = action.arrFilm;

      return {...state}
    }

    case SET_FILM_DANG_CHIEU:{
      state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu )
      
      return {...state,dangChieu:!state.dangChieu}
    }
  
    case SET_FILM_SAP_CHIEU:{
      state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
      return {...state,sapChieu:!state.sapChieu}
    }

    case SET_CHI_TIET_PHIM:{
      return {...state,filmDetail:action.filmDetail}
    }
    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return {...state}
  }


  default:
    return {...state}
  }
}
