"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  text: string
  sender: "user" | "assistant"
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
    }

    setMessages([...messages, newMessage])
    setInputMessage("")

    // Simulate an assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now(),
        text: "Thank you for your question. An instructor will respond to you shortly.",
        sender: "assistant",
      }
      setMessages((prevMessages) => [...prevMessages, assistantMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[500px] border rounded-lg lg:mr-4">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}

