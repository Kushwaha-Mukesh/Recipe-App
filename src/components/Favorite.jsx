import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Favorite = () => {
  const favItems = useSelector((store) => store.favoriteItem);
  return (
    <div className="container recipe-container">
      {favItems.map((favItem) => (
        <FoodItem key={favItem.id} recipe={favItem} />
      ))}
    </div>
  );
};

export default Favorite;
