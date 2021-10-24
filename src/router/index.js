import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GeneralLayout from "../layouts/GeneralLayout.vue"

const routes = [
  {
    path: '/',
    component: GeneralLayout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
