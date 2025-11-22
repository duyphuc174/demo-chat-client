import { Avatar } from "flowbite-react";
import { useEffect } from "react";

export default function ChatItem({
  conversation,
  conversationId,
  click,
}: {
  conversation: any;
  conversationId: string;
  click?: (id: string) => void;
}) {
  return (
    <li>
      <div
        className={`${conversation._id === conversationId ? "bg-gray-100 dark:bg-gray-700" : ""} flex cursor-pointer flex-row items-center gap-4 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700`}
        onClick={() => click && click(conversation._id)}
      >
        <Avatar
          className="shrink-0"
          img="https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=48&q=75"
          rounded
          status="online"
          statusPosition="bottom-right"
        />
        <div className="flex w-full flex-row">
          <div className="flex flex-col">
            <span className="text-md font-semibold text-gray-900 dark:text-white">
              {conversation.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Send you a message
            </span>
          </div>
          {/* <div className="ms-auto">
            {dayjs(conversation.updatedAt).format("HH:mm")}
          </div> */}
        </div>
      </div>
    </li>
  );
}
