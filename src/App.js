import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM NAMING CONVENTION
    <div className="App">
      
      <div className="app_body">
        <Sidebar/>
        {/*chatbar*/}
      </div>
    </div>
  );
}

export default App;
