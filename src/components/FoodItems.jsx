import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import HeroSection from "./HeroSection.jsx";
const FoodItems = () => {
  const recipes = useSelector((store) => store.foodItem);
  return (
    <>
      <HeroSection />
      <div className="container recipe-container">
        {recipes.length > 0 &&
          recipes.map((recipe) => <FoodItem key={recipe.id} recipe={recipe} />)}
      </div>
    </>
  );
};

export default FoodItems;
