import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import './index.css'
import Login from './Login.vue'
import Create from './Create.vue'
import Task from './Task.vue'


const routes = [
    { path: '/', component: Login },
    { path: '/create', component: Create },
    { path: '/task', component: Task}
]
debugger
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const store = createStore({
    state () {
      return {
        currentUserName: localStorage.getItem('isLogged'),
        ToDoList: [],
        users: JSON.parse(localStorage.getItem('users')) ?? []
      }
    },
    mutations: {
      // increment (state) {
      //   // state.todoes+=
      //   //console.log(this.users);
      //   console.log(1);
      // },
      setToDos(state, result) {
        // state.users.forEach(element => {
        //   state.ToDoList.push(JSON.parse(localStorage.getItem(element.username)) ?? [])
        // });
        // console.log(state.ToDoList);
        //   //state.ToDoList = JSON.parse(localStorage.getItem(this.user)) ?? []
        state.ToDoList = result;
      },
      addToDo(state, result) {
        state.ToDoList.push(result);
      }
    },
    actions: {
      setDoList({commit, state}) {
          commit('setToDos', JSON.parse(localStorage.getItem(state.currentUserName)) ?? [])
      },
      ToDoPush({commit, state}, newValue) {
        if(!!newValue) {
          commit('addToDo', newValue);
          localStorage.setItem(state.currentUserName, JSON.stringify(state.ToDoList));
        }
      },
      ToDoDel({commit, state}, t) {
        //result = this.ToDoList.filter((e)=>e.id !== t.id);
        commit('setToDos', state.ToDoList.filter((e)=>e.id !== t.id));
        localStorage.setItem(state.currentUserName, JSON.stringify(state.ToDoList));
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
app.use(router)
app.mount('#app')