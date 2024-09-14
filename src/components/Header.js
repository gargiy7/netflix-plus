import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
      <div className="absolute  bg-gradient-to-b w-full  from-black  pl-20  z-10 flex justify-between ">
        <img
          className="w-56"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        {user && (
          <div className="flex p-2 ">
            <img
              className="h-16 w-14 mt-2"
              alt="user_icon"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            />
            <div className="text-xl p-1 text-pretty text-white ">
              <div className="text-sm">Welcome :</div>
              <p className="text-sm">{user.displayName || ("ABCD")}</p>
              <button
                onClick={handleSignOut}
                className="text-lg text-pretty text-white cursor-pointer"
              >
                (Sign Out)
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
