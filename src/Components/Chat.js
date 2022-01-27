import { AttachFile, InsertEmoticon, Message, Mic, MoreVert, Search, Send } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../Chat.css";

function Chat() {
  const [Seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
        />
        <div className="chat_headerInfo">
          <h4>Room Name</h4>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true &&'chat_reciever'}`}>
        <span className="chat_name">saurav</span>
        Hey Guys
        <span className="chat_timestamp">3:54pm</span>
        </p>
     
        
      </div>
      <div className="chat_footer">
        <IconButton><InsertEmoticon/></IconButton>
        <form action="">
        <input type="text" placeholder="Type a message" />
        {/* <button>Send a Message</button> */}
        <IconButton><Mic/></IconButton>
        <IconButton className="sendIcon"><Send/></IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
