import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, isUser: true }]);
    // Here you would typically send the user message to a backend API for processing and get a response.
    // For now, let's simulate a response from the server after a brief delay.
    setTimeout(() => {
      setMessages([...messages, { text: 'Welcome!!', isUser: false }]);
    }, 500);
    setInput('');
    setTimeout(() => {
        setMessages([...messages, { text: 'Third case is now on hearing!!', isUser: false }]);
      }, 2000);
    setInput('');
  };

  return (
    <div className="body">
        <div className="chatdes">
            <p className="chatp1">A chatbox on a law firm's website serves as a direct communication channel between the firm and its website visitors. It provides an interactive and convenient way for clients, potential clients, and other visitors to engage with the firm in real-time.</p>
        </div>
    <div className="chatbox-container">
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'server-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    <div>
        <img className="chatinimg " src="https://i.pinimg.com/564x/9b/ff/53/9bff53d19ed0eba3d42b17c365744610.jpg"></img>
    </div>
    </div>
  );
};

export default Chatbox;
