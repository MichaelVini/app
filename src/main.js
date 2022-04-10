import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Login from './pages/login.vue'
import Profile from './pages/profile.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

const LoginPage = { template: Login }
const ProfilePage = { template: Profile }


const routes = [
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})

app.use(router)

app.mount('#app')