import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

import root from '../reducers/root';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, root);

export const store = createStore(
    pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    //devToolsEnhancer());
export const persistor = persistStore(store);