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
                //localStorage.setItem('users', '{\"username\" : \"' + user + '\", \"password\" : \"' + password +'\"}');
                this.append(user, password);
                this.user = user;
                this.password = password;
                //console.log(10);
            }
            //console.log(localStorage.getItem(user));
        },
        isLogged() {
            if(!localStorage.getItem('isLogged')) {
                return 0;
            }
            this.id = 1;
            return 1;
        },
        clearLocal() {
            localStorage.clear();
        },
        append(u, p) {
            //debugger;
            if(!!localStorage.getItem('users')) {
                //debugger;
                //debugger; 
                let a = JSON.parse(localStorage.getItem('users'));
                //debugger;
                a.push({"username": u, "password": p});
                //debugger;
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
            <task  @login="listen" />
        </div>
        <div v-if="id === -1">
            <create  @login="listen" />
        </div>
    </div>
    `
}