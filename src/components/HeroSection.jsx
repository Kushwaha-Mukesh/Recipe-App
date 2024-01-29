import Carousel from "./Carousel.jsx";
const HeroSection = () => {
  return (
    <div className="container-lg hero-section">
      {/* <img src="Eating together.gif" alt="" /> */}
      <div className="hero-content">
        <h1>
          Unlock Flavorful <br />
          Adventures with Our
          <br />
          Recipe App
        </h1>
        <p>
          Where passion for food meets the precision of recipes <br />– welcome
          to a tasteful revolution
        </p>
        <a href="#foodItems" className="btn btn-danger">
          Explore
        </a>
      </div>
      <Carousel />
    </div>
  );
};

export default HeroSection;
