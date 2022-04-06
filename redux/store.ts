import { configureStore } from "@reduxjs/toolkit";
import authenticationReducers from "./reducer/authentication";
import clientReducer from "./reducer/client";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducers,
    client: clientReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
