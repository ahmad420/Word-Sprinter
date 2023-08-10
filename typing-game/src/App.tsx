import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Profile } from './pages/Profile';
import Navbar from './components/NavBar';

function App() {
  return (
  <>
    <Router>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
       </Routes>
    </Router>
  </>

  );
}

export default App;
