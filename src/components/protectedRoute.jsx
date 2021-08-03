import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/auth";

function ProtectedRoute({component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component />;
        }
        else{
            return <Redirect to={{ pathname: "/login", state:{from: props.location} }}/>
        }
      }}
    />
  );
}

export default ProtectedRoute;