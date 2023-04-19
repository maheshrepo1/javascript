//import { json } from 'body-parser'
//import { response } from 'express'
import {takeEvery,call,put}  from 'redux-saga/effects'

function*  fetchUser (){

    let data = yield   fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(json=>json)
    return data;
}

function* workerSaga(action)
{
    console.log('this is sag  a',action);
    try{

        const response = yield call(fetchUser);
        console.log('this is saga response',response);
       
        yield put({type: 'SET_USER_DATA' , response});
    }catch(error){

        yield put({type: 'SET_USER_DATA' , error});
    }

}

function* watcherSaga(){
   
   yield takeEvery('GET_USER_DATA' , workerSaga);

}
export default watcherSaga;