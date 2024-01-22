const Carousel = () => {
  return (
    <div class="container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-img-div carousel-img1"></div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Classic Margherita Pizza</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img2"></div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Vegetarian Stir-Fry</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img3"></div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Chocolate Chip Cookies</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img4"></div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Chicken Alfredo Pasta</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-div carousel-img5"></div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Mango Salsa Chicken</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
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
