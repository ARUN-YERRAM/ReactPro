// // ChatbotComponent.js
// import React, { useState, useEffect } from 'react';
// import mongoose from './my-app/src/db.js'; // Adjust the path accordingly

// const ChatbotComponent = () => {
//   const [chatData, setChatData] = useState([]);

//   useEffect(() => {
//     // Define your MongoDB schema and model
//     const chatSchema = new mongoose.Schema({
//       // Define your schema based on your MongoDB collection structure
//       // For example, if you have a 'messages' collection with a 'text' field:
//       text: String,
//     });

//     const ChatModel = mongoose.model('Message', chatSchema);

//     // Fetch data from MongoDB
//     ChatModel.find({}, (err, data) => {
//       if (err) {
//         console.error('Error fetching data from MongoDB:', err);
//       } else {
//         setChatData(data);
//       }
//     });
//   }, []); // Run once on component mount

//   // Render your chatbot component with the fetched data
//   return (
//     <div>
//       {chatData.map((message, index) => (
//         <div key={index}>{message.text}</div>
//       ))}
//     </div>
//   );
// };

// export default ChatbotComponent;
