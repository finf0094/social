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
        ...action.data,
        isAuth: true,
      }
    };
  }
  return state;
};

// dispatch's
export const setAuthUserData = (id, login, email) => ({ type: 'SET-USER-DATA', data: { id, login, email } });

// thunk's
export const setAuthUser = () => {
  return (dispatch) => {
    headerAPI.auth().then(data => {
      const { id, login, email } = data
      if (data.login) {
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}

export default authReducer;