<script>
    export default {
        props: ['user'],
        created() {
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
        }
    }
</script>

<template>
    <h1 class="text-3x1 font-bold">ToDo: Task Manager</h1>
    <b>Use the remove button to mark as done.</b>
    <br>
    <button @click="$emit('logout');">Go back</button>
    <p>Insert task</p>
    <input v-model="task.title" placeholder="Title" class="text-3x1 font-bold"/><br>
    <input v-model="task.dueDate" placeholder="Date" class="text-3x1 font-bold"/><br>
    <input v-model="task.description" placeholder="Description" class="text-3x1 font-bold"/><br>
    <div v-if="task.title !== null && task.dueDate !== null && task.description !== null">
        <button v-on:click="insert()">Push</button>
        <br>
    </div>
    <ul id="list">
        <li v-for="t in list" class="text-3x1 font-bold text-cyan-700">
            {{ t.title }} <br>
            Due: {{t.dueDate}}  <br>
            Description: {{t.description}} <br> 
            <button v-on:click="remove(t)" class="text-3x1 font-bold text-red-900" >Remove</button> <br>
        </li>
    </ul>
</template>