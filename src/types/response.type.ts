export type Response = {
  message: string;
}

export type ErrorResponse = {
  error: string;
  message: string;
}


// User search response type
export interface UserSearch {
  id: string;
  fullName: string;
  avatar?: string;
}
export interface ResponseUserSearch extends Response {
  users: UserSearch[];
}

