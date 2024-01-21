import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header">
      <img src="recipe logo.png" alt="logo" className="logo" />
      <input
        type="search"
        name="search"
        id=""
        className="search"
        placeholder="search recipe"
      />
      <p className="fav">
        <CiHeart /> Add to Fav
      </p>
    </div>
  );
};

export default Header;
