import React from "react";
import Home from "../pages/Home";
import { Route, Switch } from "react-router-dom";

const PageContent = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
    </>
  );
};
export default PageContent;
