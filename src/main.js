import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faTwitter, faVuejs } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub, faTwitter, faLinkedin, faVuejs, faHtml5, faCss3, faJs)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
