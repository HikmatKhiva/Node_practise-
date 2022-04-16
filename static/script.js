
const App = {
    data() {
        return {
            servers: [],
            title: ''
        }
    },
    methods: {
        async createServer() {
            const data = {
                title: this.title,
                status: "created"
            }
            const res = await fetch("/api/server", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const newServer = await res.json()
            this.servers.push(newServer)
        },
        async remove(id) {
            await fetch(`/api/server/${id}`, { method: "DELETE" })
            this.servers = this.servers.filter(e => e.id !== id)
        }
    },
    async mounted() {
        const res = await fetch("/api/server");
        this.servers = await res.json()
    }
}
Vue.createApp(App).mount("#app")