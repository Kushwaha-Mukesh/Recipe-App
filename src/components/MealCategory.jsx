import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FoodItem from "./FoodItem";

const MealCategory = () => {
  const { meal } = useParams();
  const foodItems = useSelector((store) => store.foodItem);
  const breakfastItems = foodItems.filter((food) =>
    food.mealType.includes(`${meal}`)
  );
  return (
    <div className="container recipe-container">
      {breakfastItems.length > 0 &&
        breakfastItems.map((breakfastItem) => (
          <FoodItem key={breakfastItem.id} recipe={breakfastItem} />
        ))}
    </div>
  );
};

export default MealCategory;
