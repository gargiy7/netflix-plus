import React, { useState } from "react";
import Header from "./Header";
import useInput from "../customHooks/useInput";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
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

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(nameValue, emailValue);

    resetName();
    resetEmail();
    resetPassword();
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
        />
      </div>
      <form
        className="bg-zinc-950 text-white absolute p-12 w-2/6 mt-32 mx-auto right-0 left-0 bg-opacity-90"
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
        <button className="bg-red-700 p-3 my-2 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
