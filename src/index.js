import { configureStore, createSlice } from "@reduxjs/toolkit";

const foodItemSlice = createSlice({
  name: "foodItem",
  initialState: [],
  reducers: {
    setFoodItem: (state, action) => {
      return action.payload;
    },
  },
});

const favoriteItemSlice = createSlice({
  name: "favoriteItem",
  initialState: [],
  reducers: {
    setFavoriteItem: (state, action) => {
      return [...state, action.payload];
    },
    removeFavoriteItem: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    },
  },
});

const store = configureStore({
  reducer: {
    favoriteItem: favoriteItemSlice.reducer,
    foodItem: foodItemSlice.reducer,
  },
});

export const { setFavoriteItem, removeFavoriteItem } =
  favoriteItemSlice.actions;
export const { setFoodItem } = foodItemSlice.actions;
export default store;
