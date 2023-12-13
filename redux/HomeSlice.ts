import { createSlice } from "@reduxjs/toolkit";

interface Home {
  id: string;
  quantity: number;
}

interface HomeState {
  homes: Home[];
  userInfo: [];
}

const initialState: HomeState = {
  homes: [],
  userInfo: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const item = state.homes.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.homes.push(action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.homes = state.homes.filter((item) => item.id !== action.payload);
    },
  },
});
