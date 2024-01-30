import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const foodItems = useSelector((store) => store.foodItem);
  const recipe = foodItems.filter((foodItem) => foodItem.id === Number(id));
  return (
    <div className="container recipe-landing-page">
      <div className="left-container">
        <img src={recipe[0].image} alt="recipe-image" />
        <p className="tags">
          {recipe[0].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <p className="mealtype">
          {recipe[0].mealType.map((meal) => (
            <span key={meal}>{meal}</span>
          ))}
        </p>
      </div>
      <div className="right-container">
        <h3>{recipe[0].name}</h3>
        <p className="rating">
          {recipe[0].rating}⭐ ({recipe[0].reviewCount} reviews)
        </p>
        <p>Difficulty: {recipe[0].difficulty}</p>
        <p>Cuisine: {recipe[0].cuisine}</p>
        <p>Serving: {recipe[0].servings}</p>
        <p>Calorie Per Serving: {recipe[0].caloriesPerServing}</p>
        <h4>Ingredients</h4>
        <ul className="ingredients">
          {recipe[0].ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h4>Instructions</h4>
        <ul className="instructions">
          {recipe[0].instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
