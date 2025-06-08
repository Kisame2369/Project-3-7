import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6845be93fc51878754dc22bc.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/addAll", async () => {
  const res = await axios.get("/contacts");
  return res.data;
});

export const addContact = createAsyncThunk("contacts/createConatct", async (newContact) => {
    const res = await axios.post("/contacts", newContact);
    return res.data;
  });

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const res = await axios.delete(`/contacts/${contactId}`);
    return res.data;
  }
);

