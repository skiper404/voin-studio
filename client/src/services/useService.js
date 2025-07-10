import axios from "axios";

export const submitUser = async (userInfo) => {
  const URL = import.meta.env.VITE_MONGO_URL;
  return axios.post(`${URL}/api/contact`, userInfo);
};
