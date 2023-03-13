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
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



// Navigation guard to prevent access to routes that require authentication
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresGuest && currentUser) {
    next('/products');
  } else {
    next();
  }
});



export default router;
