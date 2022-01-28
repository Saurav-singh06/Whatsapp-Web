import { Button } from "@mui/material";
import React from "react";
import { auth , provider} from "../firebase";
import "../Login.css";

const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => console.log(result))
    .catch((error) => alert(error.message));
};

function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login_text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
