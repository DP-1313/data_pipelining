import axios from "axios";
import { all, put, takeLatest, fork, call, delay } from "redux-saga/effects";
import { loginSuccess, loginFailure, LOGIN_REQUEST } from "../reducers/user";

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

const watchLogin = function*() {
  yield takeLatest(LOGIN_REQUEST, login);
};

export default function*() {
  yield all([fork(watchLogin)]);
}
