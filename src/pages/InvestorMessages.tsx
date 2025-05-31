import React, { useState } from 'react';

interface Message {
  sender: 'You' | 'Startup';
  content: string;
  timestamp: string;
}

interface Conversation {
  startupName: string;
  startupId: string;
  messages: Message[];
}

const mockConversations: Conversation[] = [
  {
    startupName: 'FinEdge',
    startupId: '1',
    messages: [
      { sender: 'Startup', content: 'Hi! Thanks for investing with us.', timestamp: '2025-05-30 10:00' },
      { sender: 'You', content: 'How are you planning to use the new funds?', timestamp: '2025-05-30 10:02' },
    ]
  },
  {
    startupName: 'MediTrack',
    startupId: '2',
    messages: [
      { sender: 'Startup', content: 'We’re finalizing new equipment.', timestamp: '2025-05-29 15:40' }
    ]
  }
];

const InvestorMessages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');

const handleSend = () => {
  if (!newMessage.trim()) return;

  const updated = {
    ...selectedChat,
    messages: [
      ...selectedChat.messages,
      {
        sender: 'You' as 'You', // 👈 assert literal type
        content: newMessage,
        timestamp: new Date().toLocaleString(),
      },
    ],
  };

  setSelectedChat(updated);
  setNewMessage('');
};


  return (
    <div style={{ display: 'flex', height: '80vh', border: '1px solid #ccc', borderRadius: 10, overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: 250, backgroundColor: '#f5f5f5', padding: 20 }}>
        <h3>Conversations</h3>
        {mockConversations.map(conv => (
          <div
            key={conv.startupId}
            style={{
              padding: '10px',
              backgroundColor: selectedChat.startupId === conv.startupId ? '#e0f0ff' : 'transparent',
              cursor: 'pointer',
              borderRadius: 5,
              marginBottom: 10
            }}
            onClick={() => setSelectedChat(conv)}
          >
            {conv.startupName}
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column' }}>
        <h3>💬 Chat with {selectedChat.startupName}</h3>
        <div style={{ flex: 1, overflowY: 'auto', marginTop: 10, border: '1px solid #ddd', borderRadius: 5, padding: 10 }}>
          {selectedChat.messages.map((msg, idx) => (
            <div key={idx} style={{
              textAlign: msg.sender === 'You' ? 'right' : 'left',
              marginBottom: 10
            }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: msg.sender === 'You' ? '#007bff' : '#e9ecef',
                  color: msg.sender === 'You' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: 10,
                  maxWidth: '70%'
                }}
              >
                <div>{msg.content}</div>
                <small style={{ fontSize: 10 }}>{msg.timestamp}</small>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 15, display: 'flex', gap: 10 }}>
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={{ flex: 1, padding: 10, borderRadius: 5, border: '1px solid #ccc' }}
          />
          <button
            onClick={handleSend}
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 5 }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorMessages;
