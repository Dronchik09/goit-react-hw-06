import { configureStore,  combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  {contactsReducer}  from "./contactsSlice";
import  {filterReducer}  from "./filtersSlice";

const persistConfig = {
    key: "root",
    storage,
  };
const rootReducer = {
    contacts: contactsReducer,
    filter: filterReducer,
  };
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(rootReducer)
  );

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["persist"],
      },
    }),
});

export const persistor = persistStore(store);













