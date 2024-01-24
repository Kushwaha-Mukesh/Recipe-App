import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const Header = () => {
  const favItems = useSelector((store) => store.favoriteItem);
  const fav = favItems.length > 0;
  return (
    <div className="header container">
      <Link to={"/"}>
        <img src="recipe logo.png" alt="logo" className="logo" />
      </Link>
      <div className="right-box">
        <input
          type="search"
          name="search"
          id=""
          className="search"
          placeholder="search food item"
        />
        <p className="fav">
          <Link to={"/favorites"}>
            {fav ? (
              <span>
                <FcLike />
                <span class="position-relative top-0 start-0 translate-middle badge rounded-pill bg-success fs-6">
                  {favItems.length}
                </span>
              </span>
            ) : (
              <CiHeart />
            )}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
