import { useState, useEffect } from 'react';
import { useTransition } from 'react-transition-state';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [transitionState, toggleBackground] = useTransition({ timeout: 300 });
  useEffect(() => toggleBackground(isSidebarOpen), [isSidebarOpen]);

  return (
    <div className="App">
      <div
        className={`Background ${transitionState}`}
        onClick={() => toggleSidebar(false)}
      />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Dashboard toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
