import React from "react";
import "./QuidditchArena.css";
import AnswerBox from "./AnswerBox"; 
import QuizChat from "./QuizChat";
export default function QuidditchArena() {
  const renderTowers = () => {
    const towerColors = [
      "brown", "darkgreen", "darkblue", "darkred",
      "goldenrod", "darkgreen", "brown", "darkred",
      "goldenrod", "darkblue", "brown", "darkgreen"
    ];

    return towerColors.map((color, index) => (
      <div 
        key={index} 
        className="tower" 
        style={{ 
          transform: `rotate(${index * 30}deg)`,
          backgroundColor: color
        }}
      />
    ));
  };

  

  return (
    <div className="stadium-container">
      <div className="griffindor-score">Griffindor: 00</div>
      <div className="slytherin-score">Slytherin: 00</div>

      <div className="question">
        <h2>Question</h2>
        <p>What is the name of the magical ball used in Quidditch?</p>
        
      </div>
      <div className="answer-box-comp">
        <AnswerBox />
      </div>
        <div className="quiz-chat-comp">
            <QuizChat />
        </div>            
     
      

      <div className="stadium-background">
        <div className="stadium-oval">
          <div className="field">
            
            <div className="towers-container">
              {renderTowers()}
            </div>

            
            <div className="goal-area left"></div>
            <div className="goal-area right"></div>

            
            <div className="center-emblem">
              <div className="emblem-circle">
                <div className="emblem-h">H</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
