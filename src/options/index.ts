import { createApp } from "vue";
import Option from "./Option.vue";
import store from "@/store";
import {createRouter,createWebHashHistory} from "vue-router";


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
 
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(Option);
app.use(store);
app.use(router)
app.mount('#app')
