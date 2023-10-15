import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";

const Store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
  },
});

export default Store;
