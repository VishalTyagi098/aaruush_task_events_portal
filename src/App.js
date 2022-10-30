import './App.css'
import Events from './components/Events';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from "./components/Navbar";
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <div className="layout">
        <Navbar/>
        <Intro/>
        <Events/>
        <Register/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
