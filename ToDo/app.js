const app = Vue.createApp({
    data() {
        return {
            id: 0
        }
    },
    methods: {
        listen() {
            this.id = 1;
        }
    }
    ,
    template: `
    <div>
        <div v-if="id === 0">
            <login  @login="listen" />
        </div>
        <div v-if="id === 1">
            <task></task>
        </div>
    </div>
    `
})

app.component('login', {
    data() {
        return {
            info: {
                user: null,
                password: null,
                id: 0
            }
        }
    },
    template: `
      <div>
            <h1>ToDo: Task Manager</h1>
            <b>Log in in order to edit/view your tasks.</b>
            
            <input v-model="info.user" placeholder="Username: e.g. 'ToDo'"/>
            
            <input v-model="info.password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
            
            <div v-if="info.user !== null && info.password !== null">
                <button @click="$emit('login')">Log in</button>
            </div>        
      </div>
    `
})

app.component('task', {
    data() {
        return {
            list: [],
            id_c: -1,
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
            console.log(t.id)
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
    `
})
app.mount('#app')