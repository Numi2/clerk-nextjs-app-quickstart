'use client';

import { useChat } from 'ai/react';
import { toast } from 'sonner';

import { Homepage } from "@/components/homepage";


import Chat from '@/components/chat';
import Footer from "@/components/footer";


export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onError: err => {
      toast.error(err.message);    },
  });

  return (
    <div>
      <Homepage />
 
      <Chat />
      <Footer />




    </div>
  );

}
