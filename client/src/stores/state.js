import { createSlice } from "@reduxjs/toolkit"

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    darkMode: false,
    searchWord: ""
  },
  reducers: {
    setSearchWord: (state, action) => {
      debugger;
      state.searchWord = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSearchWord, setDarkMode } = stateSlice.actions;

export const selectDarkMode = (state) => state.darkMode;
export const selectSearchWord = (state) => state.searchWord;

export default stateSlice.reducer;
