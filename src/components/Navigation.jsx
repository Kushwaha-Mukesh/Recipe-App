import { Link, useParams } from "react-router-dom";

const Navigation = () => {
  const { meal } = useParams();
  return (
    <div className="navigation">
      <Link to={"/meal/Breakfast"} className="link">
        <p className={meal === "Breakfast" && "click"}>Breakfast</p>
      </Link>
      <Link to={"/meal/Lunch"} className="link">
        <p className={meal === "Lunch" && "click"}>Lunch</p>
      </Link>
      <Link to={"/meal/Dinner"} className="link">
        <p className={meal === "Dinner" && "click"}>Dinner</p>
      </Link>
      <Link to={"/meal/Snack"} className="link">
        <p className={meal === "Snack" && "click"}>Snack</p>
      </Link>
      <Link to={"/meal/Dessert"} className="link">
        <p className={meal === "Dessert" && "click"}>Dessert</p>
      </Link>
      <Link to={"/meal/Beverage"} className="link">
        <p className={meal === "Beverage" && "click"}>Beverage</p>
      </Link>
    </div>
  );
};

export default Navigation;
