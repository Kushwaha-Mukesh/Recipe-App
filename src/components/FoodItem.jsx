const FoodItem = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="food-item">
          <img src={recipe.image} alt="food-item" />
          <p>{recipe.name}</p>
          <p>
            Rating: {recipe.rating}⭐ ({recipe.reviewCount} reviews)
          </p>
          <div className="tags">
            {recipe.mealType.map((meal, i) => (
              <span key={i} className="btn btn-success">
                {meal}
              </span>
            ))}
          </div>
          <button className="btn btn-dark">See Recipe</button>
        </div>
      ))}
    </>
  );
};

export default FoodItem;
