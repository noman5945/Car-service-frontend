import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import serviceReducer from "./features/services/serviceSlice";
import slotsReducer from "./features/slots/slotsSlice";
import bookedSlotReducer from "./features/bookings/bookedSlotDataSlice";
import { baseAPI } from "./api/baseAPI";

const persistConfig = {
  key: "authCar",
  storage,
};

const persistServiceIdConfig = {
  key: "serviceID",
  storage,
};
const persistSlotIdConfig = {
  key: "slotID",
  storage,
};
const persistBookedSlotDataConfig = {
  key: "bookedSlotData",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistServiceIDReducer = persistReducer(
  persistServiceIdConfig,
  serviceReducer
);
const persistBookedSlotDataReducer = persistReducer(
  persistBookedSlotDataConfig,
  bookedSlotReducer
);

const persistSlotIDReducer = persistReducer(persistSlotIdConfig, slotsReducer);

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    auth: persistedAuthReducer,
    service: persistServiceIDReducer,
    slot: persistSlotIDReducer,
    bookedSlot: persistBookedSlotDataReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPI.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
