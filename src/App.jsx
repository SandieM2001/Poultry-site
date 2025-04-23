import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Make sure this import stays

function App() {
  useEffect(() => {
    document.title = "P Poultry";
  }, []);

  return (
    <div className="poultry-site"> {/* Added a main container class */}
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="poultry-logo">P Poultry</span> {/* Styled logo text */}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section bg-light text-center py-5"> {/* Custom class */}
        <div className="container">
          <h1 className="hero-title display-4">Fresh Farm Poultry Delivered to You</h1> {/* Custom class */}
          <p className="hero-subtitle lead"> {/* Custom class */}
            We provide chicken from our farm to your table.
          </p>
          <a href="#products" className="hero-button btn btn-primary"> {/* Custom class */}
            View Products
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section py-5 bg-white"> {/* Custom class */}
        <div className="container">
          <h2 className="section-title">About Us</h2> {/* Custom class */}
          <p className="about-text"> {/* Custom class */}
            P Poultry is a family-run poultry farm dedicated to raising healthy chickens in a sustainable and humane way. Our commitment to quality and care ensures you get the best products every time.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section py-5 bg-light"> {/* Custom class */}
        <div className="container">
          <h2 className="section-title">Our Products</h2> {/* Custom class */}
          <div className="row">
            <div className="col-md-4 product-item"> {/* Custom class */}
              <div className="card product-card mb-4"> {/* Custom class */}
                <img
                  src="R.jfif"
                  className="card-img-top product-image" /* Custom class */
                  alt="Farm Eggs"
                />
                <div className="card-body product-info"> {/* Custom class */}
                  <h5 className="card-title product-title">Live chicken</h5> {/* Custom class */}
                  <p className="card-text product-description"> {/* Custom class */}
                    Live big broilers ready for slaughter.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-item">
              <div className="card product-card mb-4">
                <img
                  src="Shutterstock_13765939ml.jpg"
                  className="card-img-top product-image"
                  alt="Whole Chicken"
                />
                <div className="card-body product-info">
                  <h5 className="card-title product-title">Dressed chicken</h5>
                  <p className="card-text product-description">
                    Slaughtered chicken ready to be cooked.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 product-item">
              <div className="card product-card mb-4">
                <img
                  src="OIP (1).jfif"
                  className="card-img-top product-image"
                  alt="Chicken Cuts"
                />
                <div className="card-body product-info">
                  <h5 className="card-title product-title">Chicken Cuts</h5>
                  <p className="card-text product-description">
                    Quality chicken cuts perfect for any recipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5 bg-white"> {/* Custom class */}
        <div className="container">
          <h2 className="section-title">Contact Us</h2> {/* Custom class */}
          <p className="contact-email">Email: hello@PPoultry.com</p> {/* Custom class */}
          {/* <p>Phone: +123 456 7890</p> */}
          {/* <p>Location: Farm Lane, Countryside, TX</p> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3"> {/* Custom class */}
        <div className="container">
          <p className="footer-copyright mb-0">© 2025 P Poultry. All rights reserved.</p> {/* Custom class */}
        </div>
      </footer>
    </div>
  );
}

export default App;