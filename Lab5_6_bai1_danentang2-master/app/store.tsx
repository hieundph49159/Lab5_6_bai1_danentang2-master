import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import counterReducer from './counterSlice';

// Kết hợp reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Định nghĩa kiểu RootState đúng cách
export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'], // Lưu lại state của counter
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;