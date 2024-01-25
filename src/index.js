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

const searchItemSlice = createSlice({
  name: "searchItem",
  initialState: [],
  reducers: {
    setSearchItem: (state, action) => {
      return [...action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    favoriteItem: favoriteItemSlice.reducer,
    foodItem: foodItemSlice.reducer,
    searchItem: searchItemSlice.reducer,
  },
});

export const { setFavoriteItem, removeFavoriteItem } =
  favoriteItemSlice.actions;
export const { setFoodItem } = foodItemSlice.actions;
export const { setSearchItem } = searchItemSlice.actions;
export default store;
