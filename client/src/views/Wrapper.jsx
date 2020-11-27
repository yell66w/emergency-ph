import React, { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Main from "./home/Main";
import Loading from "./loading/Loading";

const Wrapper = () => {
  const [checkingUser, setCheckingUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const _auth = new AuthService();
    const checkAuthenticated = async () => {
      const res = await _auth.checkAuthenticated();
      setIsAuth(res);
      setCurrentUser(res);
      setCheckingUser(false);
    };
    if (checkingUser) {
      checkAuthenticated();
    }
  }, [checkingUser]);

  if (checkingUser || isLoading) {
    return <Loading desc={"Loading"} />;
  } else {
    return isAuth ? (
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setCheckingUser={setCheckingUser}
        setIsAuth={setIsAuth}
      />
    ) : showSignIn ? (
      <Login
        setIsLoading={setIsLoading}
        setCheckingUser={setCheckingUser}
        setIsAuth={setIsAuth}
        setShowSignIn={setShowSignIn}
      />
    ) : (
      <Register setIsAuth={setIsAuth} setShowSignIn={setShowSignIn} />
    );
  }
};

export default Wrapper;
