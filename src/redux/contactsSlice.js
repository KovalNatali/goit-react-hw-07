import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts.filter((el) => el.id !== payload),
      };
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducers: {
//     setFilter: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
