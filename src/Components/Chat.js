import { AttachFile, MoreVert, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState , useEffect } from 'react';
import "../Chat.css"

function Chat() {

  const [Seed, setSeed] = useState("");

  useEffect(() => {
 setSeed(Math.floor(Math.random()*5000));
  }, []);
  
  
  return <div className='chat'>
    <div className="chat_header">
    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}/>
    <div className="chat_headerInfo">
      <h4>Room Name</h4>
      <p>Last Seen at ...</p>
    </div>
    <div className="chat_headerRight">
      <IconButton><Search/></IconButton>
      <IconButton><AttachFile/></IconButton>
<IconButton><MoreVert/></IconButton>
    </div>
    </div>
    <div className="chat_body">

    </div>
    <div className="chat_footer">

    </div>
  </div>;
}

export default Chat;

