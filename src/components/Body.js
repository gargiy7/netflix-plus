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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // *********Get the currently signed-in user***********
  // navigate to browse if logged in and to home page if logged out
  // firebase automatically sign you in when you sign up
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("auth state changed wala user ------->");
        console.log(user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Background />
      <Login />
    </>
  );
};

export default Body;
