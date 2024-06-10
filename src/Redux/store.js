import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducer/index"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
}   
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);