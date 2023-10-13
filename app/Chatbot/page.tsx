"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";
import "./../../styles/input.css";
import { useChat } from "ai/react";
import GPTLogo from "@/components/GPTLogo";
import User from "@/components/User";



const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex text-white">
      <div className="max-w-xs md:min-w-[20rem] fixed">
        <Sidebar />
      </div>

      <div className="ml-[320px] w-full bg-[#343541] h-full">
        
        <div className="pt-4 pb-32">
          {messages.map((message) => {
            return (
              <div key={message.id} className={`border-t border-gray-700 ${message.role === "assistant" && "bg-[#444654] font-mono" }`}>
                
                <div className="max-w-3xl text-xl mx-auto py-6 flex ">
                {message.role === "assistant" && <GPTLogo /> }
                {message.role === "user" && <User /> }
                  <span className="ml-4">{message.content}</span>
                </div>
              </div>
            );
          })}

          {/* <form onSubmit={handleSubmit} className="text-black fixed bottom-10 ">
            <input
              className="max-w-3xl shadow-xl w-fit mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background "
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter the prompt"
            />
          </form> */}

       <div className="flex  justify-center ">
       <form onSubmit={handleSubmit} className="input-group fixed bottom-10 ">
            <input
              placeholder="Enter new item here"
              type="text"
              id="input-field"
              value={input}
              onChange={handleInputChange}
            />
            <button  className="submit-button">
              <span>Submit</span>
            </button>
          </form>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
