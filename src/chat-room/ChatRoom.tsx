import { useEffect, useRef } from "react";
import ChatList from "./components/ChatList";
import Conversation from "./components/Conversation";
import Header from "./components/Header";
import { initSocketConnection } from "../services/socket";

export default function ChatRoom() {
  const socket = useRef<any>(null);
  useEffect(() => {
    const getSocket = async () => {
      const res = await initSocketConnection();
      socket.current = res;
    };

    getSocket();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        {/* width 400px */}
        <div className="h-[calc(100vh-60px)] w-[400px] border-r border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
          <ChatList />
        </div>
        <Conversation socket={socket} />
      </div>
    </div>
  );
}
