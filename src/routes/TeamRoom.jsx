import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import teamData from "../data/teamData.json"; // Import JSON
import "./TeamRoom.css";

export default function TeamRoom() {
  const { house } = useParams(); // Get house from URL
  const navigate = useNavigate(); // Navigation hook
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Load team members for selected house
    if (house in teamData) {
      setTeam(teamData[house]);
    }
  }, [house]);

  return (
    <div className={`teamroom-container ${house.toLowerCase()}`}>
      <h1>Welcome to {house} Team Room</h1>

      <div className="team-list">
        {team.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.avatar} alt={member.name} className="avatar" />
            <p>{member.name}</p>
          </div>
        ))}
      </div>

      {/* Start Game Button */}
      <button className="start-game-button" onClick={() => navigate("/quidditcharena")}>
        Start Game
      </button>
    </div>
  );
}
