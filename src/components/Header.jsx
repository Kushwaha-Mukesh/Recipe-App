import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { useRef, useState } from "react";
import axios from "axios";
import { setSearchItem } from "../index.js";
import Navigation from "./Navigation.jsx";
import { HiOutlineViewList } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favItems = useSelector((store) => store.favoriteItem);
  const fav = favItems.length > 0;
  const searchRef = useRef();
  const { meal } = useParams();
  const searchItem = async (e) => {
    if (e.key === "Enter") {
      const search = searchRef.current.value;
      const res = await axios.get(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      dispatch(setSearchItem(res.data.recipes));
      navigate("/search");
    }
  };
  return (
    <div className="header container">
      <Link to={"/"}>
        <img src="Lunch time.gif" alt="logo" className="logo" />
      </Link>
      <Navigation />
      <div className="right-box">
        <input
          type="search"
          name="search"
          id=""
          className="search"
          placeholder="search food item by name"
          ref={searchRef}
          onKeyDown={(e) => searchItem(e)}
        />
        <p className="fav">
          <Link to={"/favorites"}>
            {fav ? (
              <span>
                <FcLike />
                <span className="position-relative top-0 start-0 translate-middle badge rounded-pill bg-success fs-6">
                  {favItems.length}
                </span>
              </span>
            ) : (
              <CiHeart />
            )}
          </Link>
        </p>
        <p className="menu">
          <HiOutlineViewList onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <div className="menu-list">
              <Link to={"/meal/Breakfast"} className="link">
                <p className={meal === "Breakfast" ? "click" : undefined}>
                  Breakfast
                </p>
              </Link>
              <Link to={"/meal/Lunch"} className="link">
                <p className={meal === "Lunch" ? "click" : undefined}>Lunch</p>
              </Link>
              <Link to={"/meal/Dinner"} className="link">
                <p className={meal === "Dinner" ? "click" : undefined}>
                  Dinner
                </p>
              </Link>
              <Link to={"/meal/Snack"} className="link">
                <p className={meal === "Snack" ? "click" : undefined}>Snack</p>
              </Link>
              <Link to={"/meal/Dessert"} className="link">
                <p className={meal === "Dessert" ? "click" : undefined}>
                  Dessert
                </p>
              </Link>
              <Link to={"/meal/Beverage"} className="link">
                <p className={meal === "Beverage" ? "click" : undefined}>
                  Beverage
                </p>
              </Link>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
