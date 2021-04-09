const getNews = async () => {
  const news = await fetch(
    "http://api.mediastack.com/v1/news?access_key=c2eb8e629d5ee157238e9c670061933f&languages=en&countries=ng",
    {
      method: "GET",
    }
  );

  console.log(news);
};

export default getNews();
