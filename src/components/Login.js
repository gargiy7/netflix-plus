import React, { useState } from "react";
import useInput from "../hooks/useInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) =>
    /^(?:(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,}.*)$/.test(value)
  );
  // -------------------------CHECKING FORM VALIDITY---------------------------------
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  //--------------------------HANDLING THE SUBMIT EVENT-----------------------
  const submitHandler = (event) => {
    event.preventDefault();
    //-----------IF FORM IS INVALID THEN TERMINATE THIS FUNCTION--------------
    if (!formIsValid) {
      return;
    }
    //-----------IF FORM IS VALID THEN PROCEED WITH SIGN IN/SIGN UP--------------
    if (!isSignInForm) {
      //----------------SIGN UP LOGIC-----------
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //---------SIGN IN LOGIC---------------
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          //console.log("user signed In");
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    resetName();
    resetEmail();
    resetPassword();
  };
  return (
    <div>
      <form
        className="bg-zinc-950 text-white absolute p-12 w-2/6 mt-32 mx-auto right-0 left-0 bg-opacity-85"
        onSubmit={submitHandler}
      >
        <h1 className="font-bold text-3xl pb-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-3 w-full bg-zinc-900"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        )}
        {!isSignInForm && nameHasError && (
          <p className="text-red-600">❌Please enter your Name </p>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-3 w-full bg-zinc-900"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="text-red-600">❌Please enter a valid email address </p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-zinc-900"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className="text-red-600">
            ❌Password must contain atleast one number, one upper case, one
            lower case letter and atleast 8 characters.{" "}
          </p>
        )}

        {isSignInForm ? (
          <button className="bg-red-700 p-3 my-2 w-full">Sign In</button>
        ) : (
          <button className="bg-red-700 p-3 my-2 w-full">Sign Up</button>
        )}

        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
