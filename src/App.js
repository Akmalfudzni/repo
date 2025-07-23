import logo from './logo.svg';
import './App.css';
import './components/Navbar/Navbar';
import './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import  Skill from './components/Skill/Skill';
function App() {
  return (
    <div className="apaan">
      <Navbar></Navbar>
      <Hero></Hero>    
      <Skill></Skill>    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        hhm...
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Footer> </Footer>
    </div>
  );

}

export default App;
