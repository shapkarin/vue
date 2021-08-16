import { createApp } from 'vue'
import App from './App.vue'

import vueLib from '@starport/vue'
import store from '../src/store'
import router from '../src/router'

const app = createApp(App)
app.config.globalProperties._depsLoaded = true
app.use(store).use(router).use(vueLib).mount('#app')
