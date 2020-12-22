import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/tasksReducers";
import authReducer from "./auth/authReducer";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
  },
});

export default store;
