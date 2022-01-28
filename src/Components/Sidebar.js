import React, { useState, useEffect } from "react";
import "../Sidebar.css";
import { Avatar, Icon, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "../firebase.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, addDoc } from "firebase/firestore";


function Sidebar() {
  const [rooms, setrooms] = useState([]);

  // useEffect(() => {
    // db.collection("rooms").onSnapshot((snapshot) =>
    //   setrooms(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );


    useEffect(() => {
      const db = firebase.firestore();
      return db.collection('rooms').onSnapshot((snapshot) => {
      setrooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
         data: doc.data(),
        }))
      )
    })
    
       
    }, []);
    

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sb_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sb_search">
        <div className="sb_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or Start new chat" />
        </div>
      </div>

      <div className="sb_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) =>(
          <SidebarChat  key={room.id} id={room.id}
          name={room.data.name}/>
        ) )}
      </div>
    </div>
  );
}

export default Sidebar;
