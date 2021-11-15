import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield all([takeLatest("API_CALL_REQUEST", workerSaga)]);
}
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random",
  });
}
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    console.log(response);
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
