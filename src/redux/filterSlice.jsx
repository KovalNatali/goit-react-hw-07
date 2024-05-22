import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
      // state.filter = action.payload;
    },
  },
});

export const selectFilteredContacts = (state) => state.filter;
export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
