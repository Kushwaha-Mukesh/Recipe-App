import { CiHeart } from "react-icons/ci";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import store, { setFavoriteItem, removeFavoriteItem } from "../index.js";

const FoodItem = ({ recipe }) => {
  const dispatch = useDispatch();
  const favItems = useSelector((store) => store.favoriteItem);
  const fav = favItems.includes(recipe);
  function addFav(recipe) {
    dispatch(setFavoriteItem(recipe));
  }
  function removeFav(recipe) {
    dispatch(removeFavoriteItem(recipe));
  }
  return (
    <div key={recipe.id} className="food-item">
      <img src={recipe.image} alt="food-item" />
      <p className="food-item-name">{recipe.name}</p>
      <p className="rating">
        Rating: {recipe.rating}⭐ ({recipe.reviewCount} reviews)
      </p>
      <p className="food-item-icons">
        <span>
          {fav ? (
            <FcLike className="heart" onClick={() => removeFav(recipe)} />
          ) : (
            <CiHeart className="heart" onClick={() => addFav(recipe)} />
          )}
        </span>

        <span>
          Recipe
          <BsArrowRightCircleFill className="arrow" />
        </span>
      </p>
    </div>
  );
};

export default FoodItem;
