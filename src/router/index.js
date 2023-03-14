// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeComp.vue';
import Login from '../views/LoginComp.vue';
import Signup from '../views/SignUpComp.vue';
import Products from '../views/ProductsComp.vue';
import Product from '../views/ProductComp.vue';
import NotFound from '../views/NotFound.vue';
import {auth} from '../firebaseConfig';



const routes = [
  {
    path: '/',
    name: 'DashboardComp',
    component: () => import('../layout/DashboardComp.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
     
      {
        path: '/products',
        name: 'Products',
        component: Products,
          meta: { requiresAuth: true },
      },
      {
        path: '/products/:productId',
        name: 'Product',
        component: Product,
          meta: { requiresAuth: true },
      },
      {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'signUp',
    component: Signup,
    meta: {
      requiresAuth: false
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



router.beforeEach((to, from, next) => {
  const isLoggedIn = auth.currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      // next({ name: 'Login' })
      alert('Please login to continue')
    } else {
      next()
    }
  } else {
    if (isLoggedIn && (to.name === 'Login' || to.name === 'signUp')) {
      next({ name: 'Products' })
    } else {
      next()
    }
  }
})




export default router;
