import { Avatar } from '@mui/material';
import React, { useState ,useEffect } from 'react';
import "../SidebarChat.css"

function SidebarChat() {

  const [Seed,setSeed] = useState("");
  
  useEffect(() => {
  setSeed(Math.floor(
    Math.random()*5000
  ))
  }, []);
  

  return (
  <div className='sidebar_Chats'>
    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}/>
    <div className="sbChat_info">
      <h4>Saurav Singh</h4>
      <p>Last Message...</p>
    </div>

  </div>
  )
}

export default SidebarChat;
