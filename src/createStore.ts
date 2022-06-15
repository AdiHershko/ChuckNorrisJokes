import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import MMKVstorage from './storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: MMKVstorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
