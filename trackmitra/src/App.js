import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeatData from './pages/HeatData';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Trackmitra from './pages/Trackmitra';
import RawData from './pages/RawData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/heatsdata" element={<HeatData />} />
        <Route path="/rawdata" element={<RawData />} />
        <Route path="/uploadcsv" element={<Upload />} />
        <Route path="/showcsv" element={<Trackmitra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
