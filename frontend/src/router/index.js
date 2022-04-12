import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//links
import HomePage from '../pages/HomePage.vue'



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    //Home
    {
      path: '/',
      component: HomePage,
      
    },

  ],
})

export default router

