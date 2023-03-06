import { headerAPI } from "../API/api";

const initialState = {
    userAuthData: {
      id: null,
      email: null,
      login: null,
      isAuth: false
    }
  };
  
  const authReducer = (state = initialState, action) => {
    if (action.type === 'SET-PROFILE') {
      return state;
    }
    if (action.type === 'SET-USER-DATA') {
      return {
        ...state,
        userAuthData: {
            isAuth: true,
          ...action.data
        }
      };
    }
    return state;
  };
  
  export const setAuthUserData = (id, login, email) => ({ type: 'SET-USER-DATA', data: { id, login, email } });

  export const setAuthUser = () => {
    return (dispatch) => {
      headerAPI.auth(dispatch(setAuthUserData))
    }
  }
  
  export default authReducer;