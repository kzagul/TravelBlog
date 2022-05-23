import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';


//Excursion
import ItemFromGrid from './pages/ItemFromGrid.vue'
import ExcursionDetails from './pages/excursion/ExcursionDetails'
import ExcursionPage from './pages/excursion/ExcursionPage.vue'
import ExcursionRegistration from './pages/excursion/ExcursionRegistration.vue'
import ExcursionEdit from './pages/excursion/ExcursionEdit.vue'

//type of excursion
import TypeExcursionPage from './pages/typeexcursion/TExcursionPage.vue'
import TExcursionDetails from './pages/typeexcursion/TExcursionDetails.vue'
import TExcursionEdit from './pages/typeexcursion/TExcursionEdit.vue'
import TExcursionRegistration from './pages/typeexcursion/TExcursionRegistration.vue'

//type of visiting
import TypeVisitingPage from './pages/typevisiting/TVisitingPage'
// import TExcursionDetails from './pages/typeexcursion/TExcursionDetails.vue'
// import ExcursionEdit from './pages/excursion/ExcursionEdit.vue'
// import ExcursionRegistration from './pages/excursion/ExcursionRegistration.vue'


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
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
      //grid
      {
        path: '/excursiongrid',
        component: GridSystem,
        // component: About,
        // component: Login
      },

      //About
      {
        path: '/aboutpage',
        component: About,
      },


    //excursion
    {
      path: '/excursionpage', //GET api
      component: ExcursionPage,
    },
    {
      path: '/excursionitemdetails/:id/:name', //GET by id API
      component: ItemFromGrid,
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
      path: '/typeofexcursionsdetails/:id/:typeexcursion', //GET by id API
      component: TExcursionDetails,
    },
    {
      path: '/register-new-excursion-type', //GET api
      component: TExcursionRegistration,
    },
    {
      path: '/typeofexcursionedit/:id/:name', //PUT api
      component: TExcursionEdit
    },

    //type of visiting
    {
      path: '/typeofvisiting', //GET api
      component: TypeVisitingPage,
    },
    // {
    //   path: '/typeofexcursionsdetails/:id/:typeexcursion', //GET by id API
    //   component: TExcursionDetails,
    // },
    // {
    //   path: '/register-new-excursion-type', //GET api
    //   component: TExcursionRegistration,
    // },
    // {
    //   path: '/typeofexcursionedit/:id/:name', //PUT api
    //   component: TExcursionEdit
    // },





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
