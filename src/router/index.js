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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { storeKey } from 'vuex'
// import { async } from '@firebase/util'
// import { fromJSON } from 'postcss'
const routes = [
  {
    path: '/',
    name: 'index',
    meta: {layout: 'nonUser-layout'},
    component: index
  },
  {
    path: '/sign-in',
    name: 'signin',
    meta: {layout: 'empty-layout'} ,
    meta: {requiresAuth: true},
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
    // meta: {layout: 'nonUser-layout'},
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
    path: '/Homiylar/:slug',
    name: 'edit-student',
    meta: {layout: 'studient-layout'},
    component: EditStudent
  },
  {
    path: '/Talabalar/:slug',
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

// const getCurrentUser = () => {
// return new Promise((resolve, reject) => {
//   const removeListener = onAuthStateChanged(
//     getAuth(),
//     (user) => {
//       removeListener();
//       resolve(user);
//     },
//     reject
//   )
// })
// }
// router.beforeEach(async(to, from next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser()) {
//       next();
//     }else {
//       alert("you don't have access!")
//       next('/non-user');
//     }
//   }
// });

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (!storeKey.user) {
//       next({
//         name: "/sign-in"
//       });
//     }else {
//       next();
//     }
//   }else {
//     next();
//   }
// })


export default router