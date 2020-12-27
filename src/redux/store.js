import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import taskReducer from "./tasks/tasksReducers";
import authReducer from "./auth/authReducers";

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
