import { configureStore } from "@reduxjs/toolkit";
import authenticationReducers from "./reducer/authentication";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
