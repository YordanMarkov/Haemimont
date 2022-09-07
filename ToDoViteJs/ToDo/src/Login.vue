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
        <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <h1 class="font-bold text-7xl">ToDo: Task Manager</h1>
        <!-- <h1>ToDo: Task Manager</h1> -->
        <b class="font-bold text-4xl">Log in in order to edit/view your tasks.</b>
        <br>
        
        <input v-model="user" placeholder="Username" class="font-bold text-4xl text-center text-slate-300"/>
        <br>
        
        <input v-model="password" placeholder="Password" class="font-bold text-4xl text-center text-slate-300"/>
        <br>

        <div v-if="userExists">
            <button @click="onLogin" class="font-bold text-4xl text-lime-300">Log in</button>
            <br>
        </div>
        <div>
            <button @click="$emit('create');" class="font-bold text-4xl text-red-500">Don't have an account? Create here.</button>
            <br>
        </div>    
        <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div> 
    </div>
</template>