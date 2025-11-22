import axiosClient from "./axiosClient";

const MessageService = {
  getByConversation(conversationId: string) {
    return axiosClient.get(`/messages`, { params: { conversationId } });
  },

  sendMessage(data: { conversationId: string; content: string }) {
    return axiosClient.post("/messages/send", data);
  },
};

export default MessageService;
