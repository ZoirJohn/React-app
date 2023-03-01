import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '16f271c5-8f1c-432e-a003-3d5a04b48c40',
    },
});

const usersAPI = {
    getUsers: (currentPage = 1, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
};
const profileAPI = {
    setProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },
};

export { usersAPI, profileAPI };
