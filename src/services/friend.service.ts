import { get } from "@/helpers/request.helper";
import type { ResponseUserSearch, UserSearch } from "@/types/response.type";

export const getListUserSearch = async(input: string): Promise<UserSearch[]> => {
  const response = await get(`/friend/getListUser?input=${input}`) as ResponseUserSearch;
  return response.users;
}