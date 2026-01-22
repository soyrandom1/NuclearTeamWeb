import './App.css';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function App() {
  return (
    <div className="app">
      <div className="social-links">
        <a href="https://www.instagram.com/nuclearteam1/" className="instagram-link">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.tiktok.com/@nuclearteam1" className="tiktok-link">
          <FaTiktok size={32} />
        </a>
      </div>
    </div>
  );
}

export default App;
