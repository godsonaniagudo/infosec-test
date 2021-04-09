// Create and export new store item for global news state
export const createNewStore = () => {
  return {
    news: [],
    addToStore(news) {
      this.news = news;
    },
  };
};
