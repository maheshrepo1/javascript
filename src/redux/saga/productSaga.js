import { PRODUCT_SAGA_CALL,SET_PRODUCT_LIST ,SET_ARTICLE_CALL,ARTICLE_SAGA_CALL} from "../constant";
import {takeEvery , put} from 'redux-saga/effects'

function* getProducts(){
    console.log('second');
    let data = yield fetch('http://localhost:3010/product');
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST , data:data})

}


function* getArticle(){
    console.log('second');
    let data = yield fetch('http://localhost:3010/article');
    data = yield data.json();
    yield put({type:SET_ARTICLE_CALL , data:data})

}

function* productSaga(){
    console.log('first call');
    yield takeEvery(PRODUCT_SAGA_CALL, getProducts)
}

function* articleSaga(){
    console.log('first call');
    yield takeEvery(ARTICLE_SAGA_CALL, getArticle)
}

export default productSaga;
export  { articleSaga};


