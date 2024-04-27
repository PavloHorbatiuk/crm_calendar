// import { USER_LOCAL_STORAGE_KEY } from '@/common/const/localStorage';
import axios from 'axios';

const token = '';

export const instance = axios.create({
  // baseURL: process.env.URL,
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export enum URL {
  // auth api
  LOGIN = 'auth/login',
  REGISTRATION = 'auth/register',
  //   events api
  CREATE_EVENTS = 'events/',
  GET_ALL_EVENTS = 'events',
}
