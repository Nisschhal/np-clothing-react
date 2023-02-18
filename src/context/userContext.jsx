import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  //   currentUser: null,
  //   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // signOutUser();
  // Centeralizing the Auth listener which automatically takes user as arugmnets in its callback,
  // as a result we can directly look for the user here rather than creating own manually function to set and get users
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
