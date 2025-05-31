import React, { useState } from 'react';

const StartupMessages: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'Investor', text: 'Hi, we noticed your pitch. Can we know more about your MVP timeline?' },
    { sender: 'You', text: 'Sure! We plan to complete MVP in 3 months with allocated funds.' },
    { sender: 'Investor', text: 'Great. Can we get a breakdown of the budget for that?' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { sender: 'You', text: newMsg }]);
    setNewMsg('');
  };

  return (
    <div style={{ padding: 30, maxWidth: 600, margin: '0 auto' }}>
      <h2>💬 Messages</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: 5,
        padding: 15,
        height: 300,
        overflowY: 'auto',
        marginBottom: 15,
        background: '#f9f9f9'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            marginBottom: 10,
            textAlign: msg.sender === 'You' ? 'right' : 'left'
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: msg.sender === 'You' ? '#007bff' : '#e5e5ea',
              color: msg.sender === 'You' ? 'white' : 'black',
              padding: '8px 12px',
              borderRadius: 15
            }}>
              <strong>{msg.sender === 'You' ? 'You' : 'Investor'}:</strong> {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          value={newMsg}
          onChange={e => setNewMsg(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: 10 }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 20px',
            marginLeft: 10,
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: 5
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default StartupMessages;
