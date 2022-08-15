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
            if(user !== null && password !== null && this.id !== 1) {
                localStorage.setItem(user, password);
                this.user = user;
                this.password = password;
                console.log(10);
            }
            console.log(localStorage.getItem(user));
            // localStorage.setItem(user, null); // quick set up
        }
    },
    template: `
    <div>
        <div v-if="id === 0">
            <login  @login="listen" />
        </div>
        <div v-if="id === 1">
            <task  @login="listen" />
        </div>
        <div v-if="id === -1">
            <create  @login="listen" />
        </div>
    </div>
    `
}