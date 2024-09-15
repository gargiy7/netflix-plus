import React, { useEffect } from "react";
import Header from "./Header";
import Background from "./Background";
import Login from "./Login";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Background />
      <Login />
    </>
  );
};

export default Body;
