<script>
    export default {
        props: ['user'],
        created() {
            this.list = JSON.parse(localStorage.getItem(this.user)) ?? []
            if(this.list.length > 0)
                this.id_c = this.list.map(({id}) => id).sort().reverse()[0] + 1
            this.$store.commit('ToDoListUpdate');
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
    <!-- <button @click="$store.commit('increment')">console</button> -->
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <button @click="$emit('logout');" class="font-bold text-4xl text-slate-600">&#8592</button><br>
    <h1 class="font-bold text-7xl">ToDo: Task Manager</h1>
    <b class="font-bold text-4xl">Use the remove button to mark as done.</b>
    <br>
    <input v-model="task.title" placeholder="Title" class="text-3xl font-bold text-center text-slate-400"/><br>
    <input v-model="task.dueDate" placeholder="Date" class="text-3xl font-bold text-center text-slate-400"/><br>
    <input v-model="task.description" placeholder="Description" class="text-3xl font-bold text-center text-slate-400"/><br>
    <div v-if="task.title !== null && task.dueDate !== null && task.description !== null">
        <button v-on:click="insert()" class="font-bold text-4xl text-lime-300">Push</button>
        <br>
    </div>
    <ul id="list">
        <li v-for="t in list" class="text-3xl font-bold">
            Task '{{ t.title }}' has to be done before {{t.dueDate}}. Description - '{{t.description}}' 
            <button v-on:click="remove(t)" class="text-3xl font-bold text-red-900">&#10060</button> <br>
        </li>
    </ul>
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
</template>