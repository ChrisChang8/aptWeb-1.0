import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Application from "./pages/Application";
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>    
          <Route path="/application" element={<Application/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
