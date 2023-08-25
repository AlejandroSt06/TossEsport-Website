
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/home';
import Events from './Pages/Events/Events';

function App() {
  console.log("App rendered")
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/eventos" element={<Events />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
