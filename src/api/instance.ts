import axios, { AxiosError } from 'axios';

import { envVars } from 'src/configs';
import { SESSION_KEY } from 'src/hooks';

export const instance = axios.create({
	baseURL: envVars.API_URL,
});

instance.interceptors.request.use(
	(request) => {
		try {
			const sessionJson = localStorage.getItem(SESSION_KEY);
			if (!sessionJson) return request;

			const sessionData = JSON.parse(sessionJson);
			if ('result' in sessionData) {
				request.headers.Authorization = sessionData.result;
			}
			return request;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	(error) => Promise.reject(error)
);

instance.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error instanceof AxiosError && error.response?.status === 401) {
			localStorage.removeItem(SESSION_KEY);
		}
		if (error instanceof AxiosError && error.response?.status === 403) {
			alert(`You have not access: ${error.response.data.error}`);
		}
		return Promise.reject(error);
	}
);
