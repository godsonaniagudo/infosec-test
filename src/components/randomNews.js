import React, { useEffect, useState } from "react";
import { useNewsStore } from "../state/context";
import SideNewsItem from "./sideNewsItem";

const RandomNews = (props) => {
  const article = useNewsStore();
  const [randomNews, setRandomNews] = useState([]);

  useEffect(() => {
    getRandomNews();
  }, []);

  const getRandomNews = () => {
    const tempRandom = [...randomNews];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * article.news.length);
      tempRandom.push({
        index,
        details: article.news[index],
      });
    }
    setRandomNews(tempRandom);
  };

  return (
    <div>
      <h1>Other News</h1>
      {randomNews.map((item, index) => (
        <SideNewsItem key={index} details={item} />
      ))}
    </div>
  );
};

export default RandomNews;
