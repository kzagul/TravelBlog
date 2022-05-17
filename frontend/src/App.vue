<template>
  <v-app>
    
        <Navbar />
        <div v-if="currentUser " class="nav-item">
     </div>
        <v-main>
          <router-view></router-view>
        </v-main>

      <div v-if="currentUser " class="nav-item">
        <Footer />
      </div>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
     Footer,
    Navbar,
  },

  data: () => ({
    //
  }),

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
