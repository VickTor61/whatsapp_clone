import React from "react"
import { Avatar, IconButton } from '@material-ui/core';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';




import './Chatbar.css';

function Chatbar(props) {
    return (
        <div className="chatbar">
            <div className="chatbar_header">
                <Avatar/>
                <div className="chat_headerinfo">
                    <h3 className='chat-room-name'> Avatar Name</h3>
                    <p className='chat-room-lastseen'>Last seen 2:30pm</p>
                </div>
                <div   className="chatbar_header_right">
                
                    <IconButton>
                     <VideocamOutlinedIcon/>
                    </IconButton>

                    <IconButton className="border_right">
                     <PhoneOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                     <SearchIcon/>
                    </IconButton>

                    <IconButton>
                     <MoreHorizIcon/>
                    </IconButton>
                    
                </div>

            </div>

            <div className='chat_body'>
                    <p className>
                        <span className="chat_name"></span>
                       
                        <span className="chat_timestemp"></span>
                    </p>

            </div>


            <div className='chat_footer'>
             <InsertEmoticonIcon />
             <AttachFileIcon/>
                <form className= 'chat_message'>
                    <input  type="text" placeholder="Type a message"/>
                    <button type="submit" > Send a Message</button>
                </form>
                <MicIcon/>
                    
            </div>
        
        </div>
    );
}

export default Chatbar;