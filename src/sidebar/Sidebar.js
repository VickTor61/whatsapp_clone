import SidebarHeader from './SidebarHeader/Header'
import SidebarSearch from './SidebarSearch/Search'
import './Sidebar.css';


function Sidebar(props) {
    return (
        <div className="sidebar">
         <SidebarHeader/>
         <SidebarSearch/>
        </div>
    );
}

export default Sidebar;
