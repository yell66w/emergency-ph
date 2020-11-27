import React from "react";
import { useToasts } from "react-toast-notifications";
import { AuthService } from "../../services/AuthService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Appbar from "../../components/bars/Appbar";
import HomeContainer from "../../containers/MainContainer";
import Sidebar from "../../components/bars/Sidebar";
import Extra from "../../components/bars/Extra";
import HomeBody from "./HomeBody";
import TyphoonBody from "./TyphoonBody";
import CrimesBody from "./CrimesBody";
import Error404 from "./Error404";

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
        <HomeContainer>
          <Sidebar currentUser={currentUser} />
          <Switch>
            <Route exact path="/">
              <HomeBody currentUser={currentUser} />
            </Route>
            <Route exact path="/typhoon">
              <TyphoonBody />
            </Route>
            <Route exact path="/crimes">
              <CrimesBody />
            </Route>
            <Route path="/*">
              <Error404 />
            </Route>
          </Switch>
          <Extra currentUser={currentUser} />
        </HomeContainer>
      </div>
    </Router>
  );
};

export default Main;
