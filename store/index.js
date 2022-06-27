import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'
import playlistReducer from './playlist/playlistReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
  playlist: playlistReducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // other options e.g middleware, go here
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store);
export default store;