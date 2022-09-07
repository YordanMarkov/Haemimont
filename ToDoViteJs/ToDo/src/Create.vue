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
            <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <button @click="$emit('return');" class="font-bold text-4xl text-slate-600">&#8592</button><br>
            <h1 class="font-bold text-7xl">ToDo: Task Manager</h1>
            <b class="font-bold text-4xl">Create profile</b><br>
            
            <input v-model="user" placeholder="Username" class="font-bold text-4xl text-center text-slate-400"/>
            <br>
            
            <input v-model="password" placeholder="Password" class="font-bold text-4xl text-center text-slate-400"/>
            <br>

            <div v-if="!userExists && password !== null">
                <button @click="onCreate" class="font-bold text-4xl text-lime-300">Create</button>
            </div> 
            
            <div v-if="userExists">
                <b class = "font-bold text-red-900 text-4xl text-red-500">This username is already taken!</b>
            </div>   
            <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>   
      </div>
</template>