import Sidebar from './sidebar/Sidebar';
import Chatbar from './chatbar/Chatbar';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chatbar />
      </div>
    </div>
  );
}

export default App;
