import React, { useEffect, useState } from "react";
import newsPlaceholder from "../assets/images/news.jpg";
import ArticleItem from "../components/articleItem";
import ArticleItemHorizontal from "../components/articleItemHorizontal";
import { Link } from "react-router-dom";
import getDate from "../helpers/getDate";
import { useNewsStore } from "../state/context";
import { configure } from "mobx";
import RandomNews from "../components/randomNews";
import loading from "../assets/images/loadingblack.svg";

const Home = () => {
  const [news, setNews] = useState([]);
  const [gettingNews, setGettingNews] = useState(true);
  const [loadingNews, setLoadingNews] = useState(false);
  const [side, setSide] = useState([]);
  const [limit, setLimit] = useState(12);

  //Create reference to global state for news items
  const newsStore = useNewsStore();

  configure({
    useProxies: "never",
  });

  useEffect(() => {
    getNews();
  }, []);

  //   Fetch news items from MediaStack API
  const getNews = async () => {
    setLoadingNews(true);
    const allNews = await fetch(
      `http://api.mediastack.com/v1/news?access_key=c2eb8e629d5ee157238e9c670061933f&languages=en&countries=us&limit=${limit}`,
      {
        method: "GET",
      }
    );

    let tempNews = [...news];
    const newsResult = await allNews.json();
    tempNews = newsResult.data;
    newsStore.addToStore(tempNews);
    setNews(tempNews);
    setGettingNews(false);
    setLoadingNews(false);
    const tempSide = [...side];

    // Get random news items from fetched news
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * newsResult.data.length);
      tempSide.push({
        index,
        details: tempNews[index],
      });
    }

    setSide(tempSide);
  };

  //Fetch more news items from API
  const loadMoreNews = () => {
    setLimit(limit + 12);
    getNews();
  };

  //Load empty div while news is first being fetched
  if (gettingNews === true) return <div></div>;

  return (
    <div>
      <div className="pageContainer">
        <div className="heroSection">
          <div className="heroLeft">
            <img
              alt="news preview pic"
              src={news[0].image ? news[0].image : newsPlaceholder}
              className="heroMainImage"
            />
            <Link to="/post/0">
              <h2>{news[0]?.title}</h2>
            </Link>
            <p className="descriptionText">
              {news[0]?.description.length > 100
                ? news[0].description.substring(0, 200) + "..."
                : news[0].description}
            </p>
            <div>
              <span className="postedDate">
                <i class="far fa-clock"></i> {getDate(news[0].published_at)}
              </span>
              <span>{news[0].author}</span>
            </div>
          </div>
          <div className="heroRight">
            {news[1] && <ArticleItem width="48%" details={news[1]} index={1} />}

            {news[2] && <ArticleItem width="48%" details={news[2]} index={2} />}

            {news[3] && <ArticleItem width="48%" details={news[3]} index={3} />}

            {news[4] && <ArticleItem width="48%" details={news[4]} index={4} />}
          </div>
        </div>

        <div className="contentSection">
          <div className="contentSectionLeft">
            <h1>More News</h1>

            <div className="contentSectionLeftContainer">
              {news.map((item, index) => {
                if (index > 4)
                  return <ArticleItemHorizontal details={item} index={index} />;
              })}
            </div>

            <div className="loadMoreButtonContainer">
              <div>{loadingNews && <img alt="loading" src={loading} />}</div>

              <button
                className="loadMoreButton"
                onClick={() => {
                  loadMoreNews();
                }}
              >
                Load More
              </button>
            </div>
          </div>

          <div className="contentSectionRight">
            <div>
              <RandomNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
