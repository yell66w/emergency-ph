import React from "react";
import { useToasts } from "react-toast-notifications";
import { AuthService } from "../../services/AuthService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Appbar from "../../components/Appbar";

const Home = ({ setIsAuth, setCheckingUser }) => {
  const _auth = new AuthService();
  const { addToast } = useToasts();

  const onSignOut = () => {
    _auth.signOut();
    setCheckingUser(true);
    setIsAuth(false);
    addToast("Logged Out Succesfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <Router>
      <div className="flex flex-col">
        <Appbar onSignOut={onSignOut} />
        <Switch>
          <Route exact path="/">
            <div>Home</div>
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

export default Home;
