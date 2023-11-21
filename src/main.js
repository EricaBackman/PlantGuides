import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'


const app = createApp(App)

app.use(router)
app.use(store)
app.use(bootstrap)
app.mount('#app')
