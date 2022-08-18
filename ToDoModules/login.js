export default {
    data() {
        return {
            info: {
                user: null,
                password: null,
                id: 0
            }
        }
    },
    methods: {
        returnKey(key, pass) {
            //console.log(localStorage.getItem(key));
            //return localStorage.getItem(key);
            let bool = false;
            let a = JSON.parse(localStorage.getItem('users'));
            //a.push({"username": u, "password": p});
            //debugger;
            a.forEach(element => {
                //debugger;
                if(element.username === key && element.password === pass) {
                    bool = true;
                }
            });
            return bool; 
        },
        setLog() {
            if(!localStorage.getItem('isLogged')) {
                localStorage.setItem('isLogged', this.info.user);
            }
        }
    },
    template: `
      <div>
            <h1>ToDo: Task Manager</h1>
            <b>Log in in order to edit/view your tasks.</b>
            
            <input v-model="info.user" placeholder="Username: e.g. 'ToDo'"/>
            
            <input v-model="info.password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
            
            <div v-if="info.user !== null && returnKey(info.user, info.password)">
                <button @click="$emit('login', 1, null, null), setLog()">Log in</button>
            </div>
            <div>
                <button @click="$emit('login', -1, null, null);">Create account</button>
            </div>     
      </div>
    `
}