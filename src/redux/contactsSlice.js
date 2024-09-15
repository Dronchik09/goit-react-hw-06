import { createSlice } from "@reduxjs/toolkit";


const ContactsSlice = createSlice({

    name : "contacts",
    initialState: { items: [] },
    reducers: {
        addContact: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        deleteContact: (state, action) => {
         state.items = state.items.filter(el => el.id !== action.payload)
        },
       },
});

export const {addContact, deleteContact} = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;