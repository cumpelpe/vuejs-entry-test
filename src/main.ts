import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
