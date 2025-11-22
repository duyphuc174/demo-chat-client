import { Button, Textarea } from "flowbite-react";
import { HiLink, HiPaperAirplane } from "react-icons/hi";
import ConversationItem from "./ConversationItem";
import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import MessageService from "../../services/messageService";

export default function Conversation({ socket }: { socket: any }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [searchParams] = useSearchParams();
  const conversationId = searchParams.get("id") || "";
  const initialValues = { message: "" };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      const res = await MessageService.sendMessage({
        conversationId,
        content: values.message,
      });

      values.message = "";
      socket.current.emit("sendMessage", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!conversationId) return;

    const fetchConversations = async () => {
      try {
        const res = await MessageService.getByConversation(conversationId);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversations();
  }, [conversationId]);

  useEffect(() => {
    if (!socket?.current) return;
    socket.current.emit("joinRoom", conversationId);
    socket.current.off("receiveMessage");
    socket.current.on("receiveMessage", (data: any) => {
      setMessages((prev) => [data, ...prev]);
    });

    return () => {
      socket.current.off("receiveMessage");
    };
  }, [socket, conversationId]);

  return (
    <div className="flex w-full flex-col">
      <div className="border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
        header
      </div>
      <div className="flex h-[200px] grow-1 flex-col-reverse overflow-auto p-4">
        {messages &&
          messages.map((item) => (
            <ConversationItem message={item} key={item._id} />
          ))}
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form className="flex flex-row items-center gap-2 border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <Button size="sm" color="gray" className="cursor-pointer">
              <HiLink className="h-5 w-5" />
            </Button>
            <Textarea
              id="message"
              style={{ padding: 6 }}
              placeholder="Nhập tin nhắn..."
              required
              rows={1}
              value={values.message}
              onChange={handleChange}
            />
            <Button type="submit" size="sm" className="cursor-pointer">
              <HiPaperAirplane className="h-5 w-5 rotate-90" />
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
