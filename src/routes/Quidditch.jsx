import { useState } from "react";
import { useNavigate } from "react-router-dom";
import topBanner from '/TopBanner.svg';
import "./Quidditch.css";
import banner1 from '/GryffindorBanner.jpg';
import banner2 from '/SlytherinBanner.jpeg';



export default function Quidditch() {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(true);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = () => {
        if (username.trim() !== "") {
            setIsPopupVisible(false); // Hide popup after entering username
        }
    };

    return (
        <div className="quidditch-container">
            
            
            {isPopupVisible && (
                <div className="username-popup">
                    <h2>Enter Your Username</h2>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        id="username"
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit}>Start</button>
                </div>
            )}

            {/* Main Content (Only visible after username is entered) */}
            {!isPopupVisible && (
                <>
                    <div className="top-banner">
                        <img src={topBanner} alt="Top Banner" />
                    </div>

                    {/* Welcome Message */}
                    

                    <div className="select-house">
                        <h1 className="welcome-message">Welcome, {username}!</h1>
                        <h1 className="house-title">Select Your House</h1>
                        <p className="house-description">Choose wisely, as your house will determine your Quidditch team!</p>
                    </div>

                    <div className="banner-div">
                        <button className="banner-left house-banner" onClick={() => navigate(`/teamroom/Gryffindor`)}>
                            <img src={banner1} alt="Gryffindor Banner" />
                        </button>
                        <button className="banner-right house-banner" onClick={() => navigate(`/teamroom/Slytherin`)}>
                            <img src={banner2} alt="Slytherin Banner" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
