import {combineReducers} from "redux";
import productList from "../reducer/product";
import partList from "../reducer/parts";
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
//import watcherSaga from '../../saga/productsaga';
//import  watcherSagaPart  from '../../saga/partsaga';
import rootSaga from '../../saga/root/rootsaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({productList,partList});
const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) =>{
    return getDefaultMiddleware({thunk:false}).prepend(sagaMiddleware)

    },
});

//sagaMiddleware.run(watcherSaga);
//sagaMiddleware.run(watcherSagaPart);
sagaMiddleware.run(rootSaga);
export default store;

// combine all the reducers  and also create saga Middleware 
// generator takeEvery and put method 