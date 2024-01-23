import axios from "axios";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
const FoodItems = () => {
  const [recipe, setRecipe] = useState([]);
  const fetchRecipe = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    setRecipe(res.data.recipes);
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <div className="container recipe-container">
      {recipe.length > 0 && <FoodItem recipes={recipe} />}
    </div>
  );
};

export default FoodItems;
