import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.util";
import "./sign-up-form.style.scss";
import Button from "../button/button";
const SignUpForm = () => {
  const defaultFormState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formState;
  const onChangeHandler = (e) => {
    e.preventDefault();

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Password does not match!");
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocFromAuth(user, { displayName });
      console.log(userDocRef);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        return alert("Email is already in used!");
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Don't have an account?</h1>
      <p>Sign up with Email and Password</p>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Full Name"
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          onChange={onChangeHandler}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          onChange={onChangeHandler}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
