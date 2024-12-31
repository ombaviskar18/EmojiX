import './App.css';
import ParticlesComponent from './components/particles';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: -1 }}></ParticlesComponent>
      <Home/>
    </div>
  );
}


export default App;
