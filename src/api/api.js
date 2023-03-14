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
    unfollowUsers: (userId) => {
        return instance.delete(`follow/${userId}`);
    },
    followUsers: (userId) => {
        return instance.post(`follow/${userId}`);
    },
};
const profileAPI = {
    setProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`);
    },
    setStatus: (userId) => {
        return instance.get(`profile/${userId}`);
    },
};
const headerAPI = {
    setData: () => {
        return instance.get(`auth/me`);
    },
};

export { usersAPI, profileAPI, headerAPI };
