import axios, { AxiosError } from 'axios';

import { envVars } from 'src/configs';
import { store, userLogoutThunk } from 'src/store';

export const instance = axios.create({
	baseURL: envVars.API_URL,
});

instance.interceptors.request.use(
	(request) => {
		try {
			const token = store.getState().user.token;
			if (token) {
				request.headers.Authorization = token;
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
			store.dispatch(userLogoutThunk());
		}
		return Promise.reject(error);
	}
);
