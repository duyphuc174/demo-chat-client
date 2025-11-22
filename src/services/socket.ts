import { io } from "socket.io-client";

export const initSocketConnection = async () => {
  const token = localStorage.getItem("chat-token");

  if (token && token !== "undefined") {
    const socket = io("http://localhost:5000", {
      auth: {
        token,
      },
    });
    return socket;
  }

  return null;
};
