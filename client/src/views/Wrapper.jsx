import React, { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/Home";
import Loading from "./loading/Loading";

const Wrapper = () => {
  const [checkingUser, setCheckingUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const _auth = new AuthService();
    const checkAuthenticated = async () => {
      const res = await _auth.checkAuthenticated();
      setIsAuth(res);
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
      <Home setCheckingUser={setCheckingUser} setIsAuth={setIsAuth} />
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
