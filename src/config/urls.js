export const API_BASE_URL = "https://dummyapi.io/data/v1";

export const getApiUrl = (endPoint) => API_BASE_URL + endPoint;

export const GET_USERS = getApiUrl("/user");
