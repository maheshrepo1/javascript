// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reducer/rootReducer';
import productSaga , {articleSaga}from '../saga/productSaga';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);
sagaMiddleware.run(articleSaga);
export default store;