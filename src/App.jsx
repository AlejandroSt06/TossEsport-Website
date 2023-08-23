
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/home';
import Events from './Pages/Events/Events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventos" element={<Events />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
