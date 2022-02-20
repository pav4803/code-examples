import React, { FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { mainRoutes, RouteNames } from "../routes";

const Router: FunctionComponent = () => {
  return (
    <Switch>
      {mainRoutes?.map((route) => {
        return (
          <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.comp}
        />
        )
      }
      
       )}
      <Redirect to={RouteNames.CONVERT} />
    </Switch>
  );
};

export default Router;
