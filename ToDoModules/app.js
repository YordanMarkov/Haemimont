export default {
    data() {
        return {
            id: 0
        }
    },
    methods: {
        listen() {
            this.id = 1;
        }
    },
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
}