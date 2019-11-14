import * as axios from 'axios';



const instans = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4331e9e9-64c0-439f-95fb-2a1befe6af20"
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {

                return response.data
            })
    },
    follow(userId) {

        return instans.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instans.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method.Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instans.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instans.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instans.delete(`auth/login`)
    },

}

export const securityAPI = {
    getCaptchaUrl() {
        return instans.get(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instans.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instans.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instans.put('profile/photo', formData, {
            headers: {"Content-Type": 'multipart/form-data'}
        } )
    },
    saveProfile(profile) {
        return instans.put('profile', profile)
    }
}




