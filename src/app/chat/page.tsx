'use client';

import { useChat } from 'ai/react';

import React from 'react';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (

    <div>
  

      <main className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'eMedic: '}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Spør hva som helst..."
            onChange={handleInputChange}
          />
        </form>
      </main>

     
    </div>


  );
}