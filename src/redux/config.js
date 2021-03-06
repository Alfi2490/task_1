import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import appReducer from './app-reducer';

const rootReducer = combineReducers({
    app:appReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;