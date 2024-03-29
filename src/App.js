import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header-component/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
