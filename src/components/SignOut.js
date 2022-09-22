import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase";

const SignOut = () => {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "16px" }}
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  );
};

export default SignOut;
