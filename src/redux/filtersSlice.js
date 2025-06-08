import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilters: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeFilters } = filtersSlice.actions

export const selectNameFilter = (state) => state.filters.name

export default filtersSlice.reducer