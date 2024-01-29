import { Link, useParams } from "react-router-dom";

const Navigation = () => {
  const { meal } = useParams();
  return (
    <div className="navigation">
      <Link to={"/meal/Breakfast"} className="link">
        <p className={meal === "Breakfast" ? "click" : undefined}>Breakfast</p>
      </Link>
      <Link to={"/meal/Lunch"} className="link">
        <p className={meal === "Lunch" ? "click" : undefined}>Lunch</p>
      </Link>
      <Link to={"/meal/Dinner"} className="link">
        <p className={meal === "Dinner" ? "click" : undefined}>Dinner</p>
      </Link>
      <Link to={"/meal/Snack"} className="link">
        <p className={meal === "Snack" ? "click" : undefined}>Snack</p>
      </Link>
      <Link to={"/meal/Dessert"} className="link">
        <p className={meal === "Dessert" ? "click" : undefined}>Dessert</p>
      </Link>
      <Link to={"/meal/Beverage"} className="link">
        <p className={meal === "Beverage" ? "click" : undefined}>Beverage</p>
      </Link>
    </div>
  );
};

export default Navigation;
