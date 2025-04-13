import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routing } from './routes/routing'

createApp(App).use(routing).mount('#app')
