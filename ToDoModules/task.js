export default {
    props: ['user'],
    created() {
        if(!localStorage.getItem(this.user)) {
            localStorage.setItem(this.user, '[]');
        } else {
            this.list = JSON.parse(localStorage.getItem(this.user));
        }
        if(!localStorage.getItem(this.id_iden)) {
            localStorage.setItem(this.id_iden, -1);
        } else {
            this.id_c = localStorage.getItem(this.id_iden);
        }
    },
    data() {
        return {
            list: [],
            id_c: -1,
            id_iden: 'ID' + this.user,
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
            localStorage.setItem(this.user, JSON.stringify(this.list));
            localStorage.setItem(this.id_iden, this.id_c);
            this.clearTask();
        },
        remove(t) {
            //console.log(t.id)
            this.list = this.list.filter((e)=>e.id !== t.id)
            localStorage.setItem(this.user, JSON.stringify(this.list));

        },
        clearTask() {
            this.task = {
                title: null,
                dueDate: null,
                description: null,
                done: 0
            }
        }
        // ,userCheck() {
        //     console.log(this.user);
        // }
    },
    template: `
            <!-- <button v-on:click="userCheck()">user</button> -->
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