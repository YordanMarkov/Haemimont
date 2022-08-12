export default {
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
}