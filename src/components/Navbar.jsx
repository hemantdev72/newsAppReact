import { useState } from "react";
import News from "./News";
import "./NewsItem.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("business");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary header">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/science"
                  onClick={() => handleCategoryChange("science")}
                >
                  science
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/entertainment"
                  onClick={() => handleCategoryChange("entertainment")}
                >
                  entetainment
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/general"
                  onClick={() => handleCategoryChange("general")}
                >
                  general
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/health"
                  onClick={() => handleCategoryChange("health")}
                >
                  health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <News category={selectedCategory} />
    </div>
  );
}

export default Navbar;
