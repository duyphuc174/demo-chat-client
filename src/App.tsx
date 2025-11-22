import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import socketService from "./services/socket";

export default function App() {
  const user = JSON.parse(localStorage.getItem("chat-user") || "{}");

  // useEffect(() => {
  //   if (user) {
  //     console.log(user);

  //     socketService.connect(user?._id);
  //   }
  // }, [user]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AppRouter />
    </div>
  );
}
