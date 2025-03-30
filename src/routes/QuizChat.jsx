import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./QuizChat.css"; 
const socket = io("http://127.0.0.1:5000");

const QuizChat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    socket.on("new_questions", (receivedQuestions) => {
      setQuestions(receivedQuestions);
    });

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("new_questions");
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (username.trim() && message.trim()) {
      socket.send(`${username} : ${message}`);
      setMessage("");
    } else {
      alert("Please enter both a username and a message.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="quiz-title text-2xl font-bold mb-4">Quiz Chat</h1>
      
      <div className="quiz-head bg-gray-200 p-4 rounded-md">
        <h3 className="text-lg font-semibold">Quiz Questions:</h3>
        {questions.map((q, index) => (
          <p key={index}>{index + 1}. {q.question}</p>
        ))}
      </div>
      
      <div className="bg-white p-4 mt-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold">Chat & Scores:</h3>
        <div className="h-40 overflow-auto border p-2 mt-2">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded-md mr-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Answer"
          className="border p-2 rounded-md mr-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default QuizChat;