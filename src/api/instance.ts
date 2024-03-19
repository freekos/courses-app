import axios from 'axios';

import { envVars } from 'src/configs';

export const instance = axios.create({
	baseURL: envVars.API_URL,
});

instance.interceptors.response.use(
	(response) => response.data,
	(error) => Promise.reject(error)
);
