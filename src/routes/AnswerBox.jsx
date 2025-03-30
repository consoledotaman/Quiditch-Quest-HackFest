import React, { useState } from "react";
import "./AnswerBox.css"; // Ensure the CSS file is properly styled

const AnswerBox = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput(""); // Clear input after submit
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="answer-box">
      <input
        type="text"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="answer-input"
      />

      <button className="submit-btn" onClick={handleSubmit} aria-label="Submit">
        ➤ 
      </button>
    </div>
  );
};

export default AnswerBox;
