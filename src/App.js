import React from "react";

import "./App.css";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Layout from "./Components/Menubar/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Aboutauthor from "./Components/About-Author/Aboutauthor";
import Aboutproject from "./Components/About-project/Aboutproject";

function App() {
  return (
    <div className="App">
      <HashRouter >
        
        <Switch>
          <Route path="/about-author" exact component={Aboutauthor}></Route>
          <Route path="/about-project" exact component={Aboutproject}></Route>
          <Route path="/:id" exact component={SingleBlog}></Route>
          <Route path="/" exact component={Blog}></Route>
        </Switch>
        
      </HashRouter>
    </div>
  );
}

export default App;
