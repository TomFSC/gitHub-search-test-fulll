import { API_BASE_URL } from "./baseURL";

export const getUsers = async (param: string) => {
  const datas = await fetch(`${API_BASE_URL}/search/users?q=${param}`);
  const response = await datas.json();

  return response;
};
