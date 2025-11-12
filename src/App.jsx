import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Application from "./pages/Application";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";


function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
