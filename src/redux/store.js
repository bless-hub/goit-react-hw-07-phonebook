import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "./tasks/tasksReducers";
import authReducer from "./auth/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // tasks: taskReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
