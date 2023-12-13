import React, { useEffect, useState } from "react";
import "./NewsItem.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const NewsItem = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  const handlePrevious = async () => {
    setPage((prev) => prev - 1);
    fetchData();
  };

  const handleNext = async () => {
    if (page > Math.ceil(result / 12)) {
      // Handle case where next page exceeds total pages
    } else {
      setPage((prev) => prev + 1);
      fetchData();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=230afd9a5657495cb1af25268b2dafbc&pagesize=12&page=${page}`
      );
      let data = await response.json();
      setResult(data.totalResults);
      setNewsData(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, category]);

  return (
    <div className="news">
      {loading ? (
        <Spinner /> // Render the spinner when loading is true
      ) : (
        newsData.map((news) => (
          <div key={news.url} className="card" style={{ width: "18rem" }}>
            <img src={news.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <a href={news.url} className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        ))
      )}
      <div className="buttons">
        <button
          type="button"
          disabled={page === 1}
          onClick={handlePrevious}
          className="btn btn-dark"
        >
          Previous
        </button>
        <button type="button" onClick={handleNext} className="btn btn-dark">
          Next
        </button>
      </div>
    </div>
  );
};
NewsItem.propTypes = {
  category: PropTypes.string.isRequired,
};

NewsItem.defaultProps = {
  category: "general", // Default value for category prop
};

export default NewsItem;
