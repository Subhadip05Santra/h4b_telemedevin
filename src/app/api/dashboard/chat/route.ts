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


// pages/api/chat.js

import { NextResponse, NextRequest } from 'next/server';
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { generateStream } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { ollama } from 'genkitx-ollama';
import { MODEL_MAP } from '@/lib/model-map';

export async function GET(req: NextRequest) {
  const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp'));
  const querySnapshot = await getDocs(messagesQuery);
  const messages = querySnapshot.docs.map(doc => doc.data());
  
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const { message, user, modelId } = await req.json();

  if (!message.trim() || !user) {
    return NextResponse.json({ error: 'Invalid message or user' }, { status: 400 });
  }

  // Save user message to Firestore
  await addDoc(collection(db, 'messages'), {
    text: message,
    user: user.uid,
    timestamp: new Date(),
  });

  // Generate bot response
  const model_id = modelId || 'qwen2:0.5b';

  configureGenkit({
    plugins: [
        ollama({
          models: [{ name: 'qwen2:0.5b' }],
          serverAddress: 'http://localhost:11434',
        }),
      ],
      logLevel: 'debug',
      enableTracingAndMetrics: true,
  });

  /*
  const { stream } = await generateStream({
    prompt: message,
    model: `ollama/${model_id}`,
    config: {
      temperature: 1,
    },
  });

  const encoder = new TextEncoder();
  const streamResponse = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream()) {
        const text = chunk.text();
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
    cancel() {
      console.log('Stream cancelled by the client');
    },
  });

  const botResponse = await new Response(streamResponse).text();

  // Save bot response to Firestore
  await addDoc(collection(db, 'messages'), {
    text: botResponse,
    user: 'Genkit AI',
    timestamp: new Date(),
  });

  return new Response(streamResponse, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
*/