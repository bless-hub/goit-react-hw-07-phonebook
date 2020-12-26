import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import taskReducer from "./tasks/tasksReducers";
import authReducer from "./auth/authReducers";
import logger from "redux-logger";

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
  middleware: getDefaultMiddleware().concat(logger),
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    // users: authReducer,
    users: persistReducer(persistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
