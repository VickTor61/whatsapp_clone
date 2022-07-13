import React from "react"
import {SearchOutlined} from "@material-ui/icons";
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import './Search.css';


function Search(props) {
    return (
            <div className="sidebar_search">

                    <div  className="sidebar_searchContainer">
                        <SearchOutlined />
                       <input type="text" placeholder="Search or start new chat"/>
                   </div>
                    
                    <div>
                      <FilterListOutlinedIcon/>
                     </div>
            </div>
    );
}

export default Search;
