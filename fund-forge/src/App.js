import './App.css';
import Dashboard from './components/Dashboard';
import EtfTools from './pages/etfTools'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/etf-tools" element={<EtfTools/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
