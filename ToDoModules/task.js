export default {
    props: ['user'],
    created() {
        // if(!localStorage.getItem(this.user)) {
        //     localStorage.setItem(this.user, '[]');
        // } else {
        //     this.list = JSON.parse(localStorage.getItem(this.user));
        // }
        // if(!localStorage.getItem(this.id_iden)) {
        //     localStorage.setItem(this.id_iden, -1);
        // } else {
        //     this.id_c = localStorage.getItem(this.id_iden);
        // }
        this.list = JSON.parse(localStorage.getItem(this.user)) ?? []
        if(this.list.length > 0)
            this.id_c = this.list.map(({id}) => id).sort().reverse()[0] + 1
    },
    watch: {
        list(newValue) {
            localStorage.setItem(this.user, JSON.stringify(newValue));
        }
    },
    data() {
        return {
            list: [],
            id_c: 0,
            task: {
                id: null,
                title: null,
                dueDate: null,
                description: null
            }
        }
    },
    methods: {
        insert() {
            this.list = this.list.concat({
                id: this.id_c++,
                title: this.task.title,
                dueDate: this.task.dueDate,
                description: this.task.description
            });
            this.clearTask();
        },
        remove(t) {
            this.list = this.list.filter((e)=>e.id !== t.id)
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
            <!-- <button v-on:click="userCheck()">user</button> -->
            <h1>ToDo: Task Manager</h1>
            <b>Use the remove button to mark as done.</b>
            <button @click="$emit('logout');">Go back</button>
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