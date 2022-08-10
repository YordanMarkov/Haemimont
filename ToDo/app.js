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
    },
    template: `
    <div v-if="info.id === 0">
        <!-- <login  @login="info.id = 1" /> -->

        <h1>ToDo: Task Manager</h1>
        <b>Log in in order to edit/view your tasks.</b>
        
        <input v-model="info.user" placeholder="Username: e.g. 'ToDo'"/>
        
        <input v-model="info.password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
        <div v-if="info.user !== null && info.password !== null">
            <!-- <button @click="$emit('login')">Log in</button> -->
            <button v-on:click="info.id = 1">Log in</button>
        </div>
    </div>

    <div v-if="info.id === 1">
        <h1>ToDo: Task Manager</h1>
        <b>Use the remove button to mark as done.</b>

        <p>Insert task:</p>
        <input v-model="task.title" placeholder="Title: e.g. 'Task 1'"/>
        <input v-model="task.dueDate" placeholder="Date: e.g. '2022-08-30'"/>
        <input v-model="task.description" placeholder="Description: e.g. 'Code'"/>
        <div v-if="task.title !== null && task.dueDate !== null && task.description !== null">
            <button v-on:click="insert()">Push</button>
        </div>
        <ul id="list">
            <li v-for="t in list">
                Title: {{ t.title }} 
                Due date: {{t.dueDate}}  
                Description: {{t.description}} 
                <button v-on:click="remove(t)">Remove</button>
            </li>
        </ul>
    </div>
    `
})
app.mount('#app')

