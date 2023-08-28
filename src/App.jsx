
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/home';
import Events from './Pages/Events/Events';
import Contact from './Pages/Contact/Contact';
function App() {
  console.log("App rendered")
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route exact path="/eventos" element={<Events />} />
        <Route exact path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
