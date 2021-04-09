import { useLocalStore } from "mobx-react-lite";
import React from "react";
import { createNewStore } from "./createStore";

const NewsContext = React.createContext(null);

export const NewsProvider = ({ children }) => {
  const newsStore = useLocalStore(createNewStore);

  return (
    <NewsContext.Provider value={newsStore}>{children}</NewsContext.Provider>
  );
};

export const useNewsStore = () => React.useContext(NewsContext);
