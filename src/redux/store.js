import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { itemsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const itemsConfig = {
  key: "items",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    items: persistReducer(itemsConfig, itemsReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
