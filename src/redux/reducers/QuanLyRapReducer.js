import { SET_HE_THONG_RAP_CHIEU } from "../actions/Types/QuanLyRapType"

const initialState = {
    heThongRapChieu : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU : {
        return {...state,heThongRapChieu:action.heThongRapChieu}
    }
 

  default:
    return {...state}
  }
}
