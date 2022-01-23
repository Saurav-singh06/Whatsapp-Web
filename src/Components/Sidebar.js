import React from 'react';
import "../Sidebar.css"
import {Avatar, Icon, IconButton} from "@mui/material"
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
function Sidebar() {
  return(
    <div className='sidebar'>
  <div className="sidebar_header">
    <Avatar/>
    <div className="sb_headerRight">
      
      <IconButton>
      <DonutLarge/>
      </IconButton>
      <IconButton>
      <Chat/>
      </IconButton>
      <IconButton>
      <MoreVert/>
      </IconButton>
      
      
    </div>
  </div>

  <div className="sb_search">
    <div className="sb_searchContainer">
    <SearchOutlined/>
    <input type="text" placeholder='Search or Start new chat' /> 
    </div>
  </div>

  <div className="sb_chats">

  </div>

</div>
  )
}

export default Sidebar;
