import axios from 'axios'

axios.interceptors.response.use(
    (config) => {
        return config
    },
    (error) => {
        if (error && error.response) {
            if (error.response.status === 401) {
                return Promise.reject(error.response)
            }
            return Promise.reject(error)
        }
    }
)

export function apiGet(path) {
    const authToken = localStorage.getItem('authToken')
    let config
    if (authToken) {
        config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        }
    } else {
        config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }
    return axios.get(path, config)
}

export function apiPost(path, data) {
    const authToken = localStorage.getItem('authToken')
    let config
    if (authToken) {
        config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        }
    } else {
        config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    return axios.post(path, data, config)
}

export function apiPatch(path, data, headers = {}) {
    const authToken = localStorage.getItem('authToken')
    let config
    if (authToken) {
        config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
                ...headers,
            },
        }
    } else {
        config = {
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        }
    }

    return axios.patch(path, data, config)
}

export function apiPut(path, data) {
    const authToken = localStorage.getItem('authToken')
    let config
    if (authToken) {
        config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        }
    } else {
        config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    return axios.put(path, data, config)
}

export function apiDelete(path, data) {
    const authToken = localStorage.getItem('authToken')
    let config
    if (authToken) {
        config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        }
    } else {
        config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    return axios.delete(path, { ...config, ...data });
}

const instance = axios.create()

export default instance
