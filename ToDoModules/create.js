export default {
    data() {
        return {
            info: {
                user: null,
                password: null
            }
        }
    },
    methods: {
        checkIfExists(key) {
            let flag = 0;
            if(!localStorage.getItem('users')) {
                flag = 1;
            }
            let bool = true;
            let a = JSON.parse(localStorage.getItem('users'));
            if(flag !== 1) {
                a.forEach(element => {
                    if(element.username === key) {
                        bool = false;
                    }
                });
            }
            return bool; 
        }
    },
    template: `
      <div>
            <h1>ToDo: Task Manager</h1>
            <b>Create profile</b>
            
            <input v-model="info.user" placeholder="Username: e.g. 'ToDo'"/>
            
            <input v-model="info.password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
            
            <button @click="$emit('login', 0, null, null);">Go back</button>

            <div v-if="checkIfExists(info.user) && info.password !== null">
                <button @click="$emit('login', 0, info.user, info.password);">Create</button>
            </div>   
            <div v-if="!checkIfExists(info.user)">
                <b>This username is already taken!</b>
            </div>     
      </div>
    `
}