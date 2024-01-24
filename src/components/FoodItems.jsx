import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const FoodItems = () => {
  const recipes = useSelector((store) => store.foodItem);
  return (
    <div className="container recipe-container">
      {recipes.length > 0 &&
        recipes.map((recipe) => <FoodItem key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default FoodItems;
