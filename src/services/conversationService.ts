import axiosClient from "./axiosClient";

const ConversationService = {
  getAll() {
    return axiosClient.get("/conversations/me");
  },
};

export default ConversationService;
