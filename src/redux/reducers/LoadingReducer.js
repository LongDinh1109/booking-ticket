import { DISPLAY_LOADING, HIDE_LOADING } from "../actions/Types/LoadingType"

const initialState = {
    isLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING:{
        return {...state,isLoading:true}
    }
 
    case HIDE_LOADING:{
        return {...state,isLoading:false}
    }

  default:
    return {...state}
  }
}
