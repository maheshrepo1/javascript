//import { json } from 'body-parser'
//import { response } from 'express'
import {takeEvery,call,put}  from 'redux-saga/effects'
function*  fetchAlbum (){

    let data = yield   fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response =>response.json())
    .then(json=>json)
    return data;   
}

function* workerSagaPart(action)
{
    try{
       const response = yield call(fetchAlbum);
       yield put({type: 'SET_PART_DATA' , response});
    }catch(error){
      yield put({type: 'SET_PART_DATA' , error});
    }

}

function* watcherSagaPart(){
   
   yield takeEvery('GET_PART_DATA', workerSagaPart);

}
export default watcherSagaPart;