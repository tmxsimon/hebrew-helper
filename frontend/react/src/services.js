import api from "./api";

const path = "/words";

export const fetchWords = async () => {
  const result = await api.get(`${path}`);
  return result.data;
};
