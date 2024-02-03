import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
} from 'redux-persist';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const reducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export default store;
export const persistor = persistStore(store);
