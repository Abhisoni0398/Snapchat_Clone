export const API_BASE_URL: string = "http://205.134.254.135/~mobile/interview/public";

export const getApiUrl = (endpoint: string): string => API_BASE_URL + endpoint;

export const RESTAURANT_LIST: string = getApiUrl("/api/restaurants_list");

