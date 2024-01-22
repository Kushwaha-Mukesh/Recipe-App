import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header container">
      <img src="recipe logo.png" alt="logo" className="logo" />
      <div className="right-box">
        <input
          type="search"
          name="search"
          id=""
          className="search"
          placeholder="search recipe"
        />
        <p className="fav">
          <CiHeart className="heart" />
          Add to Fav
        </p>
      </div>
    </div>
  );
};

export default Header;
