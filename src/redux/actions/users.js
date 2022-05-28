import { GET_USERS } from "../../config/urls";
import { apiGet } from "../../utils/utils";
import store from "../store";

export function getUsers(query = "", headers) {
  console.log(GET_USERS, query, "GET_USERS");
  return apiGet(GET_USERS + query, {}, headers);
}
