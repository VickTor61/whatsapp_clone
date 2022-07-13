import React from "react"
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import './Header.css';


function Header(props) {
    return (
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
    );
}

export default Header;
