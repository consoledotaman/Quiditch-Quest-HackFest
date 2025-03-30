import { Link } from "react-router-dom";
import "./HomePage.css"; // Importing the CSS file
import GIF from '/homepg-gif.gif'; // Importing the GIF
export default function Home() {
  return (
    <div className="home-container">
      {/* Left Side - Image */}
      <div className="home-image">
        <img src={GIF} alt="GIF Animation"  />
      </div>
      
        {/* Center - Logo */}

        <div className="home-logo">
        <h1 className="home-title">Quidditch Quest</h1>
        </div>

      {/* Right Side - Content */}
      <div className="home-content">
        
        <p className="home-description">
          Experience the magic of Quidditch and test your trivia skills!
        </p>
        <div className="home-buttons">
          
          <Link to="/quidditch">
            <button className="btn enter-quidditch">Enter Quidditch</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
