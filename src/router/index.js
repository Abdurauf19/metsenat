import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import signIn from '../views/signin-view.vue'
import error from '../views/error.vue'
import NonUser from '../views/nonUser.vue'
import register from '../views/register.vue'
import dashboard from '../views/Dashboard.vue'
import homiylar from '../views/Homiylar.vue'
import talabalar from '../views/Talabalar.vue'
import AddStudent from '../views/add-student.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/sign-in',
    name: 'signin',
    meta: {layout: 'empty'},
    component: signIn
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: register
  },
  {
    path: '/non-user',
    name: 'NoN user',
    component: NonUser

  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/Homiylar',
    name: 'Homiylar',
    component: homiylar
  },
  {
    path: '/Talabalar',
    name: 'Talabalar',
    component: talabalar
  },
  {
    path: '/Add-student',
    name: 'Add-student',
    component: AddStudent
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router