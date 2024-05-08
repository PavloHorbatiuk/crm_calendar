import axios from 'axios';
import { User } from '@/store/authStore/types';
import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';

const authDataString: string | null = localStorage.getItem(
  USER_LOCAL_STORAGE_USER
);
const authData: User | null = authDataString
  ? JSON.parse(authDataString)
  : null;

const token = authData ? authData.token : null;

export const instance = axios.create({
  baseURL: process.env.URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export enum URL {
  LOGIN = 'auth/login',
  REGISTRATION = 'auth/register',
  UPDATE_USER = '/users/update',
  EVENTS = 'events',
}
