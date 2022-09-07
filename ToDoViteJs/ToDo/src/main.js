import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import './index.css'
import Login from './Login.vue'
import Create from './Create.vue'
import Task from './Task.vue'

const login = { template:  Login}
const create = { template:  Create}
const task = { template:  Task}

const routes = [
    { path: '/', component: login },
    { path: '/create', component: create },
    { path: '/task', component: task}
]
export default {
    
}
const store = createStore({
    state () {
      return {
        isLogged: localStorage.getItem('isLogged'),
        ToDoList: [],
        users: JSON.parse(localStorage.getItem('users')) ?? []
      }
    },
    mutations: {
      increment () {
        // state.todoes+=
        //console.log(this.users);
        console.log(1);
      },
      ToDoListUpdate() {
        state.users.forEach(user => {
          state.ToDoList.push(JSON.parse(localStorage.getItem(user.username)) ?? [])
        });
        console.log(state.ToDoList);
          //state.ToDoList = JSON.parse(localStorage.getItem(this.user)) ?? []
      }
    }
  })
 /*
 function for - 
 add user, 
 current user,
 add task to user,

 */

const app = createApp(App)
app.use(store)
app.mount('#app')