import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import HeroSection from "./HeroSection.jsx";
import Quotes from "./Quotes.jsx";
const FoodItems = () => {
  const recipes = useSelector((store) => store.foodItem);
  return (
    <>
      <HeroSection />
      <Quotes />
      <div className="container recipe-container" id="foodItems">
        {recipes.length > 0 &&
          recipes.map((recipe) => <FoodItem key={recipe.id} recipe={recipe} />)}
      </div>
    </>
  );
};

export default FoodItems;
