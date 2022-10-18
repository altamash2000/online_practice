import Auth from "./Auth"

class MobxStore {
     authStore
     
    constructor() {
    this.authStore=new Auth(this)
    }
    static instance

    static getInstance() {
        if (!this.instance) {
            this.instance = new MobxStore()
        }

        return this.instance
    }

}
const RootStore= new MobxStore
export default RootStore