// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeComp.vue';
import Login from '../views/LoginComp.vue';
import Signup from '../views/SignUpComp.vue';
import Products from '../views/ProductsComp.vue';
import Product from '../views/ProductComp.vue';
import NotFound from '../views/NotFound.vue';


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
        //   meta: { requiresAuth: true },
      },
      {
        path: '/products/:productId',
        name: 'Product',
        component: Product,
        //   meta: { requiresAuth: true },
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
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check if the user is authenticated
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(
//     (record) => record.meta.requiresAuth
//   );
//   const isLoggedIn = store.getters.isLoggedIn;

//   if (requiresAuth && !isLoggedIn) {
//     next('/login');
//   } else if (to.path === '/products' && !isLoggedIn) {
//     next(false);
//     alert('You must be logged in to view this page');
//   } else {
//     next();
//   }
// });

export default router;
