import { axiosInstance } from './api';

export const getBoards = () => axiosInstance.get('/boards');
