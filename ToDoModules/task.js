export default {
    data() {
        return {
            list: [],
            get: [],
            id_c: -1,
            unique: null,
            task: {
                id: null,
                title: null,
                dueDate: null,
                description: null,
                done: 0
            },
        }
    },
    methods: {
        insert() {
            this.id_c++;
            this.list.push({
                id: this.id_c,
                title: this.task.title,
                dueDate: this.task.dueDate,
                description: this.task.description
            });
            this.clearTask();
        },
        remove(t) {
            //console.log(t.id)
            this.list = this.list.filter((e)=>e.id !== t.id)

        },
        clearTask() {
            this.task = {
                title: null,
                dueDate: null,
                description: null,
                done: 0
            }
        },
        user(user, password) {
            this.unique = user + password;
            //console.log(unique);
        }
    },
    template: `
            <app  @user="user" />
            <h1>ToDo: Task Manager</h1>
            <b>Use the remove button to mark as done.</b>
            <button @click="$emit('login', 0, null, null);">Go back</button>
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
    `
}