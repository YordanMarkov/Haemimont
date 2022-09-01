<script>
  import Login from './Login.vue'
  import Create from './Create.vue'
  import Task from './Task.vue'

  export default {
    components: {
      Login,
      Create,
      Task
    },

    data() {
      return {
            currPage: 'login',
            user: null
        }
    },
    beforeMount() {
        this.user = localStorage.getItem('isLogged') ?? null
        if(this.user)
            this.currPage = 'task'
    },
    methods: {
        login(username) {
            this.user = username
            this.currPage = 'task'
        },
        logout() {
            this.user = null
            this.currPage = 'login'
        },
        clearLocal() {
            localStorage.clear();
        }
    }
  }
</script>

<template>
   <div>
      <div v-if="currPage === 'login'">
          <login @login="login" @create="currPage = 'create'"/>
      </div>
      <div v-else-if="currPage === 'task'">
          <task :user="this.user" @logout="logout" />
      </div>
      <div v-else-if="currPage === 'create'">
          <create @return="currPage = 'login'" />
      </div>
  </div>
</template>