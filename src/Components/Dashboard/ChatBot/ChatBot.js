// ChatbotComponent.jsx
import React from 'react';

class ChatbotComponent extends React.Component {
  render() {
    return (

        <div className="chatbot-container">
    <iframe title="Chat Bot"
    src="https://webchat.botframework.com/embed/mylangbotazure-bot?s=77Ydj8MfPnI.hVwx7fRXLEORdBmf0LvuHUA_s_xRbTWJ8q732pdW41Y"
    style={{ position: "absolute", right: 0, bottom: "3%", height: "502px", maxHeight: "502px" }}
  ></iframe>
    </div>

    );
  }
}

export default ChatbotComponent;