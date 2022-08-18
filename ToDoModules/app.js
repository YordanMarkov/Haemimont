export default {
    data() {
        return {
            id: 0,
            user: null,
            password: null
        }
    },
    methods: {
        listen(id, user, password) {
            this.id = id;
            if(id === 0) {
                localStorage.removeItem('isLogged');
            }
            if(user !== null && password !== null && this.id !== 1) {
                this.append(user, password);
                this.user = user;
                this.password = password;
            }
        },
        isLogged() {
            if(!localStorage.getItem('isLogged')) {
                return 0;
            }
            this.user = localStorage.getItem('isLogged');
            this.id = 1;
            return 1;
        },
        clearLocal() {
            localStorage.clear();
        },
        append(u, p) {
            if(!!localStorage.getItem('users')) {
                let a = JSON.parse(localStorage.getItem('users'));
                a.push({"username": u, "password": p});
                localStorage.setItem('users', JSON.stringify(a)); 
            } else {
                localStorage.setItem('users', JSON.stringify([{username: u, password: p}]));
            }
        }
    },
    template: `
    <div>
        <!-- <button @click="clearLocal()">clear</button> -->
        <div v-if="id === 0 && isLogged() === 0">
            <login  @login="listen" />
        </div>
        <div v-if="id === 1 && isLogged() === 1">
            <task :user="this.user" @login="listen" />
        </div>
        <div v-if="id === -1">
            <create  @login="listen" />
        </div>
    </div>
    `
}