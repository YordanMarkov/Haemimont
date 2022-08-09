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
            this.cleart();
        },
        remove(t) {
            this.list.splice(t, 1);
        },
        cleart() {
            this.task.title = null;
            this.task.dueDate = null;
            this.task.description = null;
        }
    }
})

app.mount('#app')