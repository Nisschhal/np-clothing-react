import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-from/sign-up-form";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util";
import "./auth.style.scss";

const SignIn = () => {
  const logGoogleUserPopup = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    const userDocRef = await createUserDocFromAuth(res.user);
  };
  const logGoogleUserRedirect = async () => {
    const res = await signInWithGoogleRedirect();
    console.log(res);
    // const userDocRef = await createUserDocFromAuth(res.user);
  };
  return (
    <div className="auth-forms">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
