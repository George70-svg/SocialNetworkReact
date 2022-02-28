import axios from "axios"

let URL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    baseURL: URL,
    withCredentials: true,
    headers: {
        "API-KEY": "ab8eb545-4faa-49c3-bf44-5dcf07bb362c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    totalUsers() {
        return instance.get(`/users`)
            .then(response => response.data.totalCount)
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data)
    },

    setProfileStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    updateProfileStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    },

    setAvatar(imgFile) {
        const formData = new FormData();
        formData.append("image", imgFile)

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    setProfileInfo(formData) {
        return instance.put(`/profile`, formData)
            .then(response => console.log(response.data))
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },

    login(loginData) {
        return instance.post(`/auth/login`, {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: loginData.captcha,
        })
    },

    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get('/security/get-captcha-url')
            .then(response => response.data)
    }
}