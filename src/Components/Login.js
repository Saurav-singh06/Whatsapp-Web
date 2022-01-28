import { Button } from '@mui/material';
import React from 'react';
import "../Login.css"

const signIn = () => {

}

function Login() {
  return (
  <div className='login'>
      <div className="login_container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="" />
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
