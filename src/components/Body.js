import React from "react";
import Header from "./Header";
import Main from "./Main";

const Body = () => {
  return (
    <>
      <Header />
      {/* if not signIn/signUp 
          -login page
        * if signin 
          -browse page
      */}
      <Main />
    </>
  );
};

export default Body;
