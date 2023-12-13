import React from "react";
import NewsItem from "./NewsItem";
import "./NewsItem.css";

const News = ({ category }) => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{category} News</h1>
      <div className="news">
        <NewsItem category={category} />
      </div>
    </div>
  );
};

export default News;
