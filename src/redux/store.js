import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import { filterReducer } from "./filterSlice";
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
import { contactsReducer } from "./contactsSlice";

export const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
