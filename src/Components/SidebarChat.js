import { Avatar } from '@mui/material';
import React, { useState ,useEffect } from 'react';
import "../SidebarChat.css"

function SidebarChat({id,name,addNewChat}) {

  const [Seed,setSeed] = useState("");
  
  useEffect(() => {
  setSeed(Math.floor(
    Math.random()*5000
  ))
  }, []);

  const createChat = () => {
    const roomName = prompt("Plese Enter name of Chat");

    if(roomName){
      //do Some database Stuff...
    }
  };
  

  return !addNewChat ? (
  <div className='sidebar_Chats'>
    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}/>
    <div className="sbChat_info">
      <h4>{name}</h4>
      <p>Last Message...</p>
    </div>

  </div>
  ): (
    <div onClick={createChat} className='sidebar_Chats'>
      <h4>Add new Chat</h4>
    </div>

  )
}

export default SidebarChat;
