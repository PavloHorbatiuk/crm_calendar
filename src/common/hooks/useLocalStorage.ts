// import { User } from '@/store/authStore/types';
import { USER_LOCAL_STORAGE_USER } from '../const/localStorage';

export function useLocalStorage() {
    // const authDataString: string | null = localStorage.getItem(
    //     USER_LOCAL_STORAGE_USER
    // );

    // const authData: User | null = authDataString
    //     ? JSON.parse(authDataString)
    //     : null;

    const { email, name, token } = JSON.parse(
        localStorage.getItem(USER_LOCAL_STORAGE_USER)
    );
    return { email, name, token };
}
