import { createRouter, createWebHistory } from 'vue-router'
import GeneralLayout from "../layouts/GeneralLayout.vue"
import Home from '../views/Home.vue'
import Articulo from '../views/Articulo.vue'
import Empresa from '../views/Empresa.vue'


const routes = [
  {
    path: '/',
    component: GeneralLayout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/articulo',
        name: 'Articulo',
        component: Articulo,
      },
      {
        path: '/empresa',
        name: 'Empresa',
        component: Empresa,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
