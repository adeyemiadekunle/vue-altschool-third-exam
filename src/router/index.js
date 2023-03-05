// router.js

import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      Component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
    {
      path: '/products',
      component: Products,
      meta: { requiresAuth: true },
    },
    // {
    //   path: '/logout',
    //   component: Logout,
    //   meta: { requiresAuth: true },
    // },
  ],
});

// Navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  const isLoggedIn = store.getters.isLoggedIn;

  if (requiresAuth && !isLoggedIn) {
    next('/login');
  } else if (to.path === '/products' && !isLoggedIn) {
    next(false); // Prevents the user from accessing the products page
    alert('You must be logged in to view this page');
  } else {
    next();
  }
});

export default router;
