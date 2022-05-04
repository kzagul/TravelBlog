import Vue from 'vue'
import VueRouter from 'vue-router'

//Login
import Login from '../components/Login.vue'



//locate
import LocateDetails from '../pages/locate/LocateDetails.vue'
import LocatePage from '../pages/locate/LocatePage.vue'
import LocateRegistration from '../pages/locate/LocateRegistration.vue'
import LocateEdit from '../pages/locate/LocateEdit.vue'

// Home
// import HomePage from '../pages/HomePage.vue'

// Welcome Page
// import WelcomePage from '../pages/WelcomePage.vue'

//About
import About from '../pages/About.vue'

//Grid
// import GridSystem from '../pages/GridSystem2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    //Login
    {
      path: '/login',
      component: Login,
    },

    //Home
    {
      path: '/',
      // component: HomePage,
      component: About,
      // component: Login
    },

    //About
    {
      path: '/aboutpage',
      component: About,
    },

    //Locate
    {
      path: '/locatepage', //GET api
      component: LocatePage,
    },
    {
      path: '/locatedetails/:id/:address', //GET by id API
      component: LocateDetails,
    },
    {
      path: '/register-new-locate', //POST api
      component: LocateRegistration,
    },
    {
      path: '/edit/:id/:address', //PUT api
      component: LocateEdit
    },

  ],
})

export default router

