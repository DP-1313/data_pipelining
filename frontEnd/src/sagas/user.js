import axios from "axios";
import { all, put, takeLatest, fork, call, delay } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  LOGIN_REQUEST,
  signupSuccess,
  signupFailure,
  SIGNUP_REQUEST
} from "../reducers/user";

const dummyUserInfo = {
  email: "dlatns0201@gmail.com",
  nickname: "임태현"
};

const loginAPI = loginData => {
  // return axios.post("/user/login", loginData, { withCredentials: true});
  return new Promise(resolve => {
    resolve({ data: dummyUserInfo });
  });
};
const signupAPI = signupData => {
  // return axios.post("/user", signupData, {withCredentials: true});
  return new Promise(resolve => resolve());
};

const login = function*(action) {
  try {
    const result = yield call(loginAPI, action.payload);
    yield delay(2000);
    yield put(loginSuccess(result.data));
    yield call(action.modalCancelEvent);
  } catch (e) {
    console.error(e);
    yield put(loginFailure(error));
  }
};
const signup = function*(action) {
  try {
    yield call(signupAPI, action.payload);
    yield delay(2000);
    yield put(signupSuccess());
    yield call(action.modalCancelEvent);
  } catch (e) {
    console.error(e);
    yield put(signupFailure(e));
  }
};

const watchLogin = function*() {
  yield takeLatest(LOGIN_REQUEST, login);
};
const watchSignup = function*() {
  yield takeLatest(SIGNUP_REQUEST, signup);
};

export default function*() {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
