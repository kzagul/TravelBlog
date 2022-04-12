<template>
  <div id="app">
    <v-app v-if="isEntered === false" class="grey lighten-4">
      <Login />
    </v-app>
    <v-app v-if="isEntered === true" class="grey lighten-4">
      <Navbar />
        <v-main>
          <router-view></router-view>
        </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'


export default {
  name: 'app',
  data() {
    return{
      isEntered: true,
    }
  },

  components:{
    Footer,
    Navbar,
    Login
  },

  methods: {
      closeDelete () {
         this.isEntered = true
        
      }
   }
}
</script>

