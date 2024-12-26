import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import mode from '../Store/Mode/ModeSlice'
import auth from '../Store/Auth/AuthSlice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['auth' , 'mode']
}
const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whiteList: ['user']
}
const modePersistConfig = {
  key: 'mode',
  version: 1,
  storage,
  whiteList: ['value']
}

const rootReducer = combineReducers({
  auth : persistReducer(authPersistConfig , auth),
  mode : persistReducer(modePersistConfig , mode),
})
 const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
 const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store)
export { store , persistor }