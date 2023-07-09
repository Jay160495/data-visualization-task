import WineData from './components/WineData';
import './App.css';
import WineGamaData from './components/WineGamaData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WineData />
        <WineGamaData />
      </header>
    </div>
  );
}

export default App;
