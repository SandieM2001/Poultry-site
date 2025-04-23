import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Keep this import for custom styles

function App() {
  useEffect(() => {
    document.title = "P Poultry";
  }, []);

  return (
    <div className="poultry-site">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="poultry-logo">P Poultry</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section bg-light text-center py-5">
        <div className="container">
          <h1 className="hero-title display-4">Fresh Farm Poultry Delivered to You</h1>
          <p className="hero-subtitle lead">
            We provide chicken from our farm to your table.
          </p>
          <a href="#products" className="hero-button btn btn-primary">
            View Products
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section py-5 bg-white">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            P Poultry is a family-run poultry farm dedicated to raising healthy chickens
            in a sustainable and humane way. Our commitment to quality and care ensures
            you get the best products every time.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="row">
            {[
              {
                img: "R.jfif",
                title: "Live chicken",
                desc: "Live big broilers ready for slaughter.",
                alt: "Farm Eggs",
              },
              {
                img: "Shutterstock_13765939ml.jpg",
                title: "Dressed chicken",
                desc: "Slaughtered chicken ready to be cooked.",
                alt: "Whole Chicken",
              },
              {
                img: "OIP (1).jfif",
                title: "Chicken Cuts",
                desc: "Quality chicken cuts perfect for any recipe.",
                alt: "Chicken Cuts",
              },
            ].map((product, index) => (
              <div key={index} className="col-md-4 product-item">
                <div className="card product-card mb-4">
                  <img
                    src={product.img}
                    className="card-img-top product-image"
                    alt={product.alt}
                  />
                  <div className="card-body product-info">
                    <h5 className="card-title product-title">{product.title}</h5>
                    <p className="card-text product-description">{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5 bg-white">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-email">Email: hello@PPoultry.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2025 P Poultry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
