import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  let [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <div className="App">
      <div
        className={`SidebarBG ${!isSidebarOpen ? 'hidden' : ''}`}
        onClick={() => toggleSidebar(false)}
      />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Dashboard toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
