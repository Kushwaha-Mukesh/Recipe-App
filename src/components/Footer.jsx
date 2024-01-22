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
      <h2>Its {day[new Date().getDay()]}</h2>
      <img src="recipe logo.png" alt="logo" className="logo" />
      <h3>Discover Delicious Recipes</h3>
      <p>Explore a world of Flavors!</p>
    </div>
  );
};

export default Footer;
