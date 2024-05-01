// import { USER_LOCAL_STORAGE_KEY } from '@/common/const/localStorage';
import { User } from '@/store/authStore/types';
import axios from 'axios';
import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';

const authDataString: string | null = localStorage.getItem(
  USER_LOCAL_STORAGE_USER
);
const authData: User | null = authDataString
  ? JSON.parse(authDataString)
  : null;

const token = authData ? authData.token : null;

export const instance = axios.create({
  // baseURL: process.env.URL,
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export enum URL {
  // auth api
  LOGIN = 'auth/login',
  REGISTRATION = 'auth/register',
  //   events api
  CREATE_EVENTS = 'events/',
  GET_ALL_EVENTS = 'events',
}
