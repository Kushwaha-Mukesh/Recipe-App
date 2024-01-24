import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setFoodItem } from "./index";
const App = () => {
  const dispatch = useDispatch();

  const fetchRecipe = async () => {
    const res = await axios.get("https://dummyjson.com/recipes?limit=50");
    dispatch(setFoodItem(res.data.recipes));
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
