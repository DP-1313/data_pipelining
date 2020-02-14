const initialState = {
  isLoggingIn: false,
  loginErrorReason: "",
  userInfo: null
};

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_FAILURE = "user/LOGIN_FAILURE";

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password }
});
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = error => ({ type: LOGIN_FAILURE, error });

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
    default:
      return { ...state };
  }
};
