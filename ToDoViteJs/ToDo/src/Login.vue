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
                for(const {username, password} of users) 
                    if(username === this.user && password === this.password) 
                        return true

                return false
            }
        },
        methods: {
            onLogin() {
                localStorage.setItem('isLogged', this.user)
                this.$emit('login', this.user)
            }
        }
    }
</script>

<template>
    <div>
        <h1>ToDo: Task Manager</h1>
        <b>Log in in order to edit/view your tasks.</b>
        <br>
        
        <input v-model="user" placeholder="Username: e.g. 'ToDo'"/>
        <br>
        
        <input v-model="password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
        <br>

        <div v-if="userExists">
            <button @click="onLogin">Log in</button>
            <br>
        </div>
        <div>
            <button @click="$emit('create');">Don't have an account? Create here.</button>
            <br>
        </div>     
    </div>
</template>