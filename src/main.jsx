import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FoodItems from "./components/FoodItems.jsx";
import Favorite from "./components/Favorite.jsx";
import { Provider } from "react-redux";
import store from "./index.js";
import SearchItem from "./components/SearchItem.jsx";
import Recipe from "./components/Recipe.jsx";
import MealCategory from "./components/MealCategory.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FoodItems />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/search",
        element: <SearchItem />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
      {
        path: "/meal/:meal",
        element: <MealCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
