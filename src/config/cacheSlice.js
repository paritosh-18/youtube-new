import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cacheSlice",
  initialState: {},
  reducers: {
    updateCache: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateCache } = cacheSlice.actions;
export default cacheSlice.reducer;
