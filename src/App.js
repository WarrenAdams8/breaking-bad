import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:name" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
