import './App.css'
import Intro from './components/Intro';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <div className="layout">
        <Navbar/>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
