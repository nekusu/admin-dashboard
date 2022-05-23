import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Dashboard">
        <Header />
      </div>
    </div>
  );
}

export default App;
