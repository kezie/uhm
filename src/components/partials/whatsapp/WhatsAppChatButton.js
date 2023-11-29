import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const WhatsAppChatButton = () => {
  const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER; // Replace with your phone number

  const chatLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <Link to={chatLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button-sticky">
       <span className='wa-text'>Chat with Us</span>
    </Link>
  );
};

export default WhatsAppChatButton;