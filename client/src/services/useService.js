import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

export const submitUser = async (userInfo) => {
  return axios.post(`${URL}/api/contact`, userInfo);
};
