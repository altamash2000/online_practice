import RootStore from "../MobX"
import { apiPost } from "../Utils/axios"

const LOGIN_URL=''

 class Auth {
    constructor() {
        this.mobxStore = RootStore
    }

    login = async (payload) => {
        try {
            const res = await apiPost(LOGIN_URL, payload)
            localStorage.setItem('authToken', res?.data?.data?.token)
           
                this.mobxStore.authStore.setIsLogin(true)
            this.setUser(res?.data?.data?.user)
        }
        catch (error) {
            return Promise.reject(error)

        }
    }

    setUser = (user) => {
        return this.mobxStore.authStore.setUser(user)
    }

    logout = () => {
        localStorage.clear()
        this.mobxStore.authStore.setIsLogin(false)
        return this.mobxStore.authStore.setUser({ token: "", username: "", email: "", role: "" })
    }
}
const AuthService= new Auth()
export default AuthService