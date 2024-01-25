import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const SearchItem = () => {
  const searchItems = useSelector((store) => store.searchItem);
  return (
    <div className="container recipe-container">
      {searchItems.length > 0 &&
        searchItems.map((searchItem) => (
          <FoodItem key={searchItem.id} recipe={searchItem} />
        ))}
    </div>
  );
};

export default SearchItem;
