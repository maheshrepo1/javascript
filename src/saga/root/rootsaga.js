import { all, fork } from "redux-saga/effects";
import  watcherSaga from '../../saga/productsaga';
import  watcherSagaPart  from '../../saga/partsaga';

export default function* rootSaga() {
  yield all([fork(watcherSaga),fork(watcherSagaPart)]);
}
