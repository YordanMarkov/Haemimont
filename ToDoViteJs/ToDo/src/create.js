export default {
    data() {
        return {
            user: null,
            password: null
        }
    },
    computed: {
        userExists() {
            if(this.user === null) return false

            const users = JSON.parse(localStorage.getItem('users')) ?? []
            for(const {username, password} of users) 
                if(username === this.user && password === this.password) 
                    return true

            return false
        }
    },
    methods: {
        onCreate() {
            let users = JSON.parse(localStorage.getItem('users')) ?? []
            users.push({
                username: this.user,
                password: this.password
            })
            localStorage.setItem('users', JSON.stringify(users)); 

            this.$emit('return')
        }
    },
    template: `
      <div>
            <h1>ToDo: Task Manager</h1>
            <b>Create profile</b>
            
            <input v-model="user" placeholder="Username: e.g. 'ToDo'"/>
            
            <input v-model="password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
            
            <button @click="$emit('return');">Go back</button>

            <div v-if="!userExists && password !== null">
                <button @click="onCreate">Create</button>
            </div>   
            <div v-if="userExists">
                <b>This username is already taken!</b>
            </div>     
      </div>
    `
}