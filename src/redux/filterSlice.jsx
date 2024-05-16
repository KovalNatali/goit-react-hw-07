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

export const selectContactsFilter = (state) => state.filter;

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const filterSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },

//   reducers: {
//     setFilter: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
// export const selectContactsFilter = (state) => state.filter.name;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filters) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );
