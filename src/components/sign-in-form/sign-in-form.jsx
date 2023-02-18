import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  createAuthUserFromEmailAndPassword,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-in-form.style.scss";
const SignInForm = () => {
  const defaultFormState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(defaultFormState);
  const { email, password } = formState;
  const onChangeHandler = (e) => {
    e.preventDefault();

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.log(err.message);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!password || !email)
      return alert("Please Enter valid email and Password!");
    try {
      const res = await signInUserWithEmailAndPassword(email, password);
      //   const userDocRef = await createUserDocFromAuth(user, { displayName });
      setCurrentUser(res.user);

      // console.log(res);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return alert("Email is already in used!");
      } else if (error.code === "auth/user-not-found") {
        return alert("No Account with such email, please sign up first!!");
      } else if (error.code === "auth/wrong-password") {
        return alert("Invalid Credentials!!");
      } else {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h1>Already have an account?</h1>
      <p>Sign in with Email and Password</p>
      <form onSubmit={submitHandler}>
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
        <div className="buttons">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
