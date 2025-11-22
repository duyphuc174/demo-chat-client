import axiosClient from "./axiosClient";

const AuthService = {
  login(data: { username: string; password: string }): Promise<any> {
    return axiosClient.post("/auth/login", data);
  },

  logout() {
    localStorage.removeItem("chat-token");
    localStorage.removeItem("chat-user");
  },
};

export default AuthService;
