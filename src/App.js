import "./App.css";
import "./styles/styles.css";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from "./pages/post";
import { NewsProvider } from "./state/context";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  //Array to hold categories for menus
  const categories = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
  ];

  return (
    <NewsProvider>
      <div>
        <Header categories={categories} />

        <BrowserRouter>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Post} path="/post/:id" />
          </Switch>
        </BrowserRouter>

        <Footer categories={categories} />
      </div>
    </NewsProvider>
  );
}

export default App;
