// // pages/chat.js
// import { useState, useEffect } from 'react';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useAuth } from '../context/AuthContext';
// import Message from '../components/Message';

// export default function Chat() {
//   const { user } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const q = query(collection(db, 'messages'), orderBy('timestamp'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map(doc => doc.data()));
//     });

//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (newMessage.trim()) {
//       await addDoc(collection(db, 'messages'), {
//         text: newMessage,
//         user: user.uid,
//         timestamp: new Date(),
//       });
//       setNewMessage('');
//     }
//   };

//   return (
//     <div>
//       <h1>Chat Room</h1>
//       <div>
//         {messages.map((msg, idx) => (
//           <Message key={idx} message={msg} />
//         ))}
//       </div>
//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
