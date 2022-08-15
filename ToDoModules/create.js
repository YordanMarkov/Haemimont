export default {
    data() {
        return {
            info: {
                user: null,
                password: null
            }
        }
    },
    template: `
      <div>
            <h1>ToDo: Task Manager</h1>
            <b>Create profile</b>
            
            <input v-model="info.user" placeholder="Username: e.g. 'ToDo'"/>
            
            <input v-model="info.password" placeholder="Password: e.g. 'T0d0P@ssw0rD'"/>
            
            <button @click="$emit('login', 0, null, null);">Go back</button>

            <div v-if="info.user !== null && info.password !== null">
                <button @click="$emit('login', 0, info.user, info.password);">Create</button>
            </div>        
      </div>
    `
}