import { action, makeAutoObservable } from "mobx"

class Auth {
    user = { token: "", username: "shubham ", email: "", role: "" }
    isLoading = false
    
    constructor() {
        makeAutoObservable(this)
        this.login = action
        this.logout = action
    }
    login = (data) => {


    }
    logout = () => {

    }
    setUser = (user) => {
        this.user = user
        return this.user
    }

    setLoading = (loading) => {
        this.isLoading = loading
        return this.isLoading
    }


}
export default Auth