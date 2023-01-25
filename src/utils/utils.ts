import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';
import { saveUserData } from '../redux/reducers/authReducer'


const { dispatch, getState } = store;

export async function getHeaders() {
	let userData: any = await AsyncStorage.getItem('userData');
	if (userData) {
		userData = JSON.parse(userData);
		return {
			authorization: `Bearer ${userData?.token}`,
		};
	}
	return {};
}


export async function apiReq(
	endPoint: string,
	data: any,
	method: any,
	headers: object,
) {
	console.log(endPoint, data, headers, "ENDPOINT")
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then((result: any) => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch((error: any) => {
				console.log(error)
				// console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData().then(res => {
						// showError('Unauthorized');
						store.dispatch(saveUserData({}));
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.msg || "Network error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network error", msg: "Network error" });
				}
			});
	});
}


interface ApiProps {
	endPoint: string,
	data: any,
	headers: object
}
export function apiPost(endPoint: string, data: object, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'delete', props.headers);
}

export function apiGet(endPoint: string, data: object, headers = {}) {
	return apiReq(endPoint, data, 'get', headers);
}

export function apiPut(props: ApiProps) {
	return apiReq(props.endPoint, props.data, 'put', props.headers);
}


export function setItem(key: string, data: any) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem(key, data);
}

export function getItem(key: string) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key).then((data: any) => {
			resolve(JSON.parse(data));
		});
	});
}

export function removeItem(key: any) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate() {
	return AsyncStorage.clear();
}

export function setUserData(data: any) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then((data: any) => {
			resolve(JSON.parse(data));
		});
	});
}





export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}


