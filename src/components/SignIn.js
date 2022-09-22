import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = () => {
  function signInWithGoole() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoole}>グーグルでログイン</Button>
    </div>
  );
};

export default SignIn;
