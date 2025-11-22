import { HiPencilAlt } from "react-icons/hi";
import ChatItem from "./ChatItem";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import ConversationService from "../../services/conversationService";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const conversationId = searchParams.get("id") || "";
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await ConversationService.getAll();
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversations();
  }, []);

  const goToChatDetail = (id: string) => {
    navigate(`/chat?id=${id}`);
  };
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-row items-center justify-between py-4 ps-6 pe-3">
        <h4 className="text-xl font-semibold dark:text-white">Chats</h4>
        <Button size="xs" color="light" className="cursor-pointer border-0">
          <HiPencilAlt className="h-5 w-5" />
        </Button>
      </div>
      <div className="h-full overflow-auto px-2 py-0">
        <ul>
          {conversations &&
            conversations.map((item) => (
              <ChatItem
                conversation={item}
                conversationId={conversationId}
                key={item._id}
                click={goToChatDetail}
              />
            ))}
        </ul>
      </div>
      {/* <div className="border-t-1 border-gray-200 p-4 dark:border-gray-700">
        abc
      </div> */}
    </div>
  );
}
