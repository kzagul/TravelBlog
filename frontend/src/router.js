import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';


//Excursion
import ExcursionDetails from './pages/ItemFromGrid.vue'
import ExcursionPage from './pages/excursion/ExcursionPage.vue'
import ExcursionRegistration from './pages/excursion/ExcursionRegistration.vue'
import ExcursionEdit from './pages/excursion/ExcursionEdit.vue'

//type of excursion
import TypeExcursionPage from './pages/typeexcursion/TExcursionPage.vue'

// Home
// import HomePage from './pages/HomePage.vue'

// Welcome Page
// import WelcomePage from '../pages/WelcomePage.vue'

//About
import About from './pages/About.vue'

//Grid
import GridSystem from './pages/GridSystem3.vue'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },

      //Home
      {
        path: '/',
        component: GridSystem,
        // component: About,
        // component: Login
      },

      //About
      {
        path: '/aboutpage',
        component: About,
      },


          //Locate
    {
      path: '/excursionpage', //GET api
      component: ExcursionPage,
    },
    {
      path: '/excursiondetails/:id/:name', //GET by id API
      component: ExcursionDetails,
    },
    {
      path: '/register-new-excursion', //POST api
      component: ExcursionRegistration,
    },
    {
      path: '/edit/:id/:name', //PUT api
      component: ExcursionEdit
    },


     //type of excursion
     {
      path: '/typeofexcursions', //GET api
      component: TypeExcursionPage,
    },




    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
