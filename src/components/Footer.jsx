const Footer = () => {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="footer">
      <p>Its {day[new Date().getDay()]}</p>
      <img src="recipe logo.png" alt="logo" className="logo" />
      <p>Discover Delicious Recipes</p>
      <p>Explore a world of Flavors!</p>
    </div>
  );
};

export default Footer;
