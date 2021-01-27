import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { FontAwesomeIcon } from "./plugins/FontAwesome/font-awesome";

createApp(App)
    .component("fa", FontAwesomeIcon)
    .mount('#app')
