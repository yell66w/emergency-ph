import React from "react";
import { useToasts } from "react-toast-notifications";
import { AuthService } from "../../services/AuthService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Appbar from "../../components/Appbar";
import HomeContainer from "../../containers/home/HomeContainer";
import Sidebar from "../../components/home/Sidebar";
import Body from "../../components/home/Body";
import Extra from "../../components/home/Extra";

const Main = ({ setIsAuth, setCheckingUser, currentUser, setCurrentUser }) => {
  const _auth = new AuthService();
  const { addToast } = useToasts();

  const onSignOut = () => {
    _auth.signOut();
    setCheckingUser(true);
    setIsAuth(false);
    setCurrentUser({});
    addToast("Logged Out Succesfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Appbar onSignOut={onSignOut} currentUser={currentUser} />
        <Switch>
          <Route exact path="/">
            <HomeContainer>
              <Sidebar currentUser={currentUser} />
              <Body currentUser={currentUser} />
              <Extra currentUser={currentUser} />
            </HomeContainer>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/*">
            <div>404 page not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
