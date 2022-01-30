import {
  AttachFile,
  InsertEmoticon,
  Message,
  Mic,
  MoreVert,
  Search,
  Send,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { doc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "../Chat.css";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from 'firebase/compat/app';

function Chat() {
  const [Seed, setSeed] = useState("");
  const [input, setinput] = useState("");
  const {roomId} = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setmessages] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    if(roomId){
      db.collection("rooms").doc(roomId).
      onSnapshot(snapshot => (
        setroomName(snapshot.data().name)
      ));
      db.collection("rooms").doc(roomId).
      collection("messages").orderBy('timestamp','asc').onSnapshot((snapshot) =>
      
          setmessages(snapshot.docs.map((doc) =>
            doc.data()))
        );
    }
  }, [roomId]);
  


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >> ",input);

    db.collection("rooms").doc(roomId).collection('messages').add({
      msg:input,
      name:user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setinput("")
  };
 
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
        />
        <div className="chat_headerInfo">
          <h4>{roomName}</h4>
          <p>Last Seen {
            new Date(
              messages[messages.length - 1]?.
              timestamp?.toDate()
            ).toUTCString()}</p>
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
        {messages.map((message) =>(
          <p 
          className={`chat_message ${message.name === user.displayName && "chat_reciever"}`}>
          <span className="chat_name">{message.name}</span>
          {message.msg}
          <span className="chat_timestamp">
            {new Date(message.timestamp?.toDate()).toUTCString()}
          </span>
        </p>
        ))}
        
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form action="">
          <input value={input} onChange={e => 
          setinput(e.target.value)} type="text" placeholder="Type a message" />
          {/* <button>Send a Message</button> */}
          <IconButton className="MicIcon">
            <Mic />
          </IconButton>
          <IconButton onClick={sendMessage} type="submit" className="sendIcon">
            <Send />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
