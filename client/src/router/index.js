import Vue from 'vue'
import VueRouter from 'vue-router'

//Login
import Login from '../components/Login.vue'



//locate
import LocateDetails from '../pages/ItemFromGrid.vue'
import LocatePage from '../pages/locate/LocatePage.vue'
import LocateRegistration from '../pages/locate/LocateRegistration.vue'
import LocateEdit from '../pages/locate/LocateEdit.vue'

//type of excursion
import TypeExcursionPage from '../pages/typeexcursion/TExcursionPage.vue'

// Home
// import HomePage from '../pages/HomePage.vue'

// Welcome Page
// import WelcomePage from '../pages/WelcomePage.vue'

//About
import About from '../pages/About.vue'

//Grid
import GridSystem from '../pages/GridSystem3.vue'

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
      path: '/locatepage', //GET api
      component: LocatePage,
    },
    {
      path: '/locatedetails/:id/:name', //GET by id API
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


    //type of excursion
    {
      path: '/typeofexcursions', //GET api
      component: TypeExcursionPage,
    },


  ],
})

export default router

