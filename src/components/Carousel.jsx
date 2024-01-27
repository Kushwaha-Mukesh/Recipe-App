const Carousel = () => {
  return (
    <div className="carousel-box">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-img-div carousel-img1"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Classic Margherita Pizza</h5>
              {/* <p>
                Timeless Margherita Delight: Luscious tomatoes, fresh basil,
                melted mozzarella perfection.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img2"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Vegetarian Stir-Fry</h5>
              {/* <p>
                Sizzling Vegetarian Symphony: Crisp veggies, savory stir-fry,
                culinary harmony.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img3"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Chocolate Chip Cookies</h5>
              {/* <p>
                Irresistible Chocolate Bliss: Gooey centers, golden edges, pure
                indulgence.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img4"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Chicken Alfredo Pasta</h5>
              {/* <p>
                Creamy Chicken Elegance: Alfredo pasta, savory bites, culinary
                comfort.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img5"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Mango Salsa Chicken</h5>
              {/* <p>
                Tropical Fusion: Grilled chicken dances with zesty mango salsa.
              </p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
