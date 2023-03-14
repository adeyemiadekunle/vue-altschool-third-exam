// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeComp.vue';
import Login from '../views/LoginComp.vue';
import Signup from '../views/SignUpComp.vue';
import Products from '../views/ProductsComp.vue';
import Product from '../views/ProductComp.vue';
import NotFound from '../views/NotFound.vue';
import { auth } from '../firebaseConfig';


function requireAuth(to, from, next) {
  const isAuthenticated = auth.currentUser;

  if (isAuthenticated) {
    next() // allow the user to access the route
  } else {
    next(
      {
        path: '/login',
      },
    ) // redirect the user to the login page
  }
}

function norequireAuth(to, from, next) {
  const isAuthenticated = auth.currentUser;

  if (isAuthenticated) {
    next(false) //  stop the user from accessing the route
  }
  else {
    next() // allow the user to access the route
  }
}

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
        beforeEnter: requireAuth,
      },
      {
        path: '/products/:productId',
        name: 'Product',
        component: Product,
        beforeEnter: requireAuth,

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
    beforeEnter: norequireAuth,

  },
  {
    path: '/signup',
    name: 'signUp',
    component: Signup,
    beforeEnter: norequireAuth,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});





// router.beforeEach((to, from, next) => {
//   const isLoggedIn = auth.currentUser;

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next({ name: 'Login' })
//       alert('Please login to continue')
//     } else {
//       next()
//     }
//   } else {
//     if (isLoggedIn && (to.name === 'Login' || to.name === 'signUp')) {
//       next({ name: 'Products' })
//     } else {
//       next()
//     }
//   }
// })




export default router;
