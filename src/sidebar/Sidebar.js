import React from "react"
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {SearchOutlined} from "@material-ui/icons";

import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';

import './Sidebar.css';


function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div   className="sidebar_header_right">
                    <IconButton>
                     <DonutLargeIcon/>
                    </IconButton>
                
                    <IconButton>
                     <AddIcon/>
                    </IconButton>
                    
                    <IconButton>
                     <MoreHorizIcon/>
                    </IconButton>




                </div>
            </div>
          

            <div className="sidebar_search">

                    <div  className="sidebar_searchContainer">
                        <SearchOutlined />
                       <input type="text" placeholder="Search or start new chat"/>
                   </div>
                    
                    <div>
                      <FilterListOutlinedIcon/>
                     </div>
            </div>
         


        





        </div>
    );
}

export default Sidebar;