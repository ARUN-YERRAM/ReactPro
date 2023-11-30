import React from 'react';
import Config from './Config.js';
import  Chatbot  from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider.jsx';
import 'react-chatbot-kit/build/main.css';


const MyChatbot = () => {
    return (
    <div className='chatbotdiv' align="center">
    <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
    </div>
    );
};

export default MyChatbot;