//console.log('Hello, Vue');

const app = Vue.createApp({
    //template: '<h1>fsdfdsfdssfdt</h1>'
    data() {
        return {
            title: 'Cursed',
            author: 'Idk',
            age: 19
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')