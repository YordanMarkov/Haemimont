const app = Vue.createApp({
    data() {
        return {
            list: [],
            task: {
                title: null,
                dueDate: null,
                description: null,
                done: 0
            },
            info: {
                user: null,
                password: null,
                id: 0
            }
        }
    },
    methods: {
        insert() {
            this.list.push({
                title: this.task.title,
                dueDate: this.task.dueDate,
                description: this.task.description
            });
            this.clearTask();
        },
        remove(t) {
            this.list.splice(t, 1);
        },
        clearTask() {
            this.task = {
                title: null,
                dueDate: null,
                description: null,
                done: 0
            }
        }
    }
})

app.mount('#app')