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
import EditStudent from '../views/edit-student.vue'
import aboutStudent from '../views/about-student.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {layout: 'main-layout'},
    component: index
  },
  {
    path: '/sign-in',
    name: 'signin',
    meta: {layout: 'empty-layout'},
    component: signIn
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty-layout'},
    component: register
  },
  {
    path: '/non-user',
    name: 'NoN user',
    meta: {layout: 'nonUser-layout'},
    component: NonUser

  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    meta: {layout: 'main-layout'},
    component: dashboard
  },
  {
    path: '/Homiylar',
    name: 'Homiylar',
    meta: {layout: 'main-layout'},
    component: homiylar
  },
  {
    path: '/Talabalar',
    name: 'Talabalar',
    meta: {layout: 'main-layout'},
    component: talabalar
  },
  {
    path: '/Add-student',
    name: 'Add-student',
    meta: {layout: 'studient-layout'},
    component: AddStudent
  },
  {
    path: '/edit-student',
    name: 'edit-student',
    meta: {layout: 'studient-layout'},
    component: EditStudent
  },
  {
    path: '/about-student',
    name: 'about-student',
    meta: {layout: 'studient-layout'},
    component: aboutStudent
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