import axios from 'axios';

import { tokenInterceptors } from './api.interceptors';

export const axiosInstance = axios.create({ baseURL: 'http://localhost:8000/' });

axiosInstance.interceptors.request.use(tokenInterceptors);

export const axiosAuthInstance = axios.create({ baseURL: 'http://localhost:8000/' });
