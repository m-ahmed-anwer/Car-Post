import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import Cars from "./components/Cars/Cars";
import Header from "./components/Header/Header";
import "./index.css";
import Post from "./components/Post/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signin />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
