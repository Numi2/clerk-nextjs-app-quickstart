'use client';

import { useChat } from 'ai/react';
import { toast } from 'sonner';
import React, { useState } from 'react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
      onError: err => {
        toast.error(err.message);
      },
    });
    

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            {messages.length > 0
                ? messages.map((m) => (
                        <div key={m.id} className="whitespace-pre-wrap">
                            {m.role === 'user' ? 'User: ' : 'eMedic: '}
                            {m.content}
                        </div>
                    ))
                : null}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Søk..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
};

