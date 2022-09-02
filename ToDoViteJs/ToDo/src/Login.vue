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
        <h1 class="text-3x1 font-bold">ToDo: Task Manager</h1>
        <!-- <h1>ToDo: Task Manager</h1> -->
        <b>Log in in order to edit/view your tasks.</b>
        <br>
        
        <input v-model="user" placeholder="Username" class="text-3x1 font-bold"/>
        <br>
        
        <input v-model="password" placeholder="Password" class="text-3x1 font-bold"/>
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