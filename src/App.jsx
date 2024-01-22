import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
