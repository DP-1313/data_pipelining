const initialState = {
  isLoggingIn: false,
  loginErrorReason: "",
  isSigningUp: false,
  signupErrorReason: "",
  userInfo: null
};

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_FAILURE = "user/LOGIN_FAILURE";

export const SIGNUP_REQUEST = "user/SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "user/SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "user/SIGNUP_FAILURE";

export const loginRequest = (email, password, modalCancelEvent) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
  modalCancelEvent
});
export const loginSuccess = userInfo => {
  return {
    type: LOGIN_SUCCESS,
    payload: userInfo
  };
};
export const loginFailure = error => ({ type: LOGIN_FAILURE, error });

export const signupRequest = (email, password, nickname, modalCancelEvent) => ({
  type: SIGNUP_REQUEST,
  payload: { email, password, nickname },
  modalCancelEvent
});
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = error => ({ type: SIGNUP_FAILURE, error });

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginErrorReason: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        userInfo: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginErrorReason: action.error
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        signupErrorReason: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signupErrorReason: action.error
      };
    default:
      return { ...state };
  }
};
