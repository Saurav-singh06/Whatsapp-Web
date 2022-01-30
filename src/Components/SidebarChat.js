import { Avatar } from '@mui/material';
import React, { useState ,useEffect } from 'react';
import "../SidebarChat.css"
import db from "../firebase"
import { Link } from 'react-router-dom';
import { snapshotEqual } from 'firebase/firestore';

function SidebarChat({id,name,addNewChat}) {

  const [Seed,setSeed] = useState("");
  const [messages, setmessages] = useState("");

  useEffect(() => {
    if(id) {
      db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp","desc")
      .onSnapshot(snapshot => 
        setmessages(snapshot.docs.map((doc) =>
        doc.data()
        ))
      );
    }
  
  
  }, [id]);
  
  
  useEffect(() => {
  setSeed(Math.floor(
    Math.random()*5000
  ))
  }, []);

  const createChat = () => {
    const roomName = prompt("Plese Enter name of Chat");

    if(roomName){
      //do Some database Stuff...
      db.collection('rooms').add({
        name:roomName,
      });
    }
  };
  

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
  <div className='sidebar_Chats'>
    <Avatar src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}/>
    <div className="sbChat_info">
      <h4>{name}</h4>
      <p>{messages[0]?.message}</p>
    </div>

  </div>
  </Link>
  ): (
    <div onClick={createChat} className='sidebar_Chats'>
      <h4>Add new Chat</h4>
    </div>

  )
}

export default SidebarChat;
