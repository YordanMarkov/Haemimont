<script>
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
                for(const {username} of users) 
                    if(username === this.user) 
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
        }
    }
</script>

<template>
    <div>
            <h1>ToDo: Task Manager</h1>
            <b>Create profile</b><br>
            
            <input v-model="user" placeholder="Username: e.g. 'ToDo'"/><br>
            
            <input v-model="password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/><br>
            
            <button @click="$emit('return');">Go back</button><br>

            <div v-if="!userExists && password !== null">
                <button @click="onCreate">Create</button>
            </div>  

            <div v-if="userExists">
                <b>This username is already taken!</b>
            </div>      
      </div>
</template>