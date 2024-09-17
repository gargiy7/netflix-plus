import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  // *********Get the currently signed-in user***********
  // navigate to browse if logged in and to home page if logged out
  // firebase automatically sign you in when you sign up
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse", { replace: true });
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="absolute h-30 bg-gradient-to-b w-full  from-black  pl-10 pr-10 z-10 flex justify-between ">
        <img className="w-56 h-24" alt="logo" src={NETFLIX_LOGO} />
        {user && (
          <div className="flex p-2 ">
            <img className="h-16 w-14 mt-2" alt="user_icon" src={USER_AVATAR} />
            <div className="text-xl p-1 mr-4 text-pretty text-white ">
              <div className="text-sm">Welcome </div>
              <p className="text-sm">{user.displayName || "ABCD"}</p>
              <button
                onClick={handleSignOut}
                className="text-sm px-2 mt-1 text-pretty bg-gray-500 text-white cursor-pointer rounded-xl"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
