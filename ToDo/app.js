const app = Vue.createApp({
    data() {
        return {
            list: [],
            task: {
                title: null,
                dueDate: null,
                description: null,
                done: 0
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
        },
        remove(t) {
            this.list.splice(t, 1);
        }
    }
})

app.mount('#app')