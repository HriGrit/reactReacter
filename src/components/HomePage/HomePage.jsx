import React, { useState } from "react";
import Header from "./Header";
import Poster from "./Poster.jsx";
import Nav from "./Nav.jsx";
import Line from "./Line.jsx";
import Body from "../Body/Body.jsx";
import SignIn from "./SignIn.jsx";

const HomePage = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const closeSignIn = () => {
    setIsSignInVisible(false);
  };

  return (
    <div className="h-100vh">
      {isSignInVisible && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>}
      <Header createAccount={() => setIsSignInVisible(true)} />
      {isSignInVisible && <SignIn closeAccount={closeSignIn} />}
      <Poster createAccount={() => setIsSignInVisible(true)} />
      {isSignInVisible && <SignIn closeAccount={closeSignIn} />}
      <Nav />
      <Line />
      <Body />
    </div>
  );
};

export default HomePage;
