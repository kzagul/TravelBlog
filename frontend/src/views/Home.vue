<template>
  <div class="container">

     <div v-if="currentUser">
      <v-card class="d-flex justify-center mx-auto mb-5 " max-width="500">
          <div>
          <h1>Экскурсии от TravelBlog Tyumen</h1>
          </div>
        </v-card>

      </div>






     <div v-if="!currentUser" class="text-center">
                <!-- class="navbar-nav ml-auto" -->
                
                <router-link to="/register" style="text-decoration: none; color: inherit;">
                    <v-btn  class="ma-1" large color="#424242" plain>
                        <v-icon>mdi-account-plus</v-icon>
                        Sign Up
                    </v-btn>
                    <!-- <font-awesome-icon icon="user-plus" />Sign Up -->
                </router-link>

                <router-link to="/login" style="text-decoration: none; color: inherit;">
                   
                    <v-btn  class="ma-1" large color="#424242" plain  >
                        <v-icon>mdi-login</v-icon>
                        Login
                    </v-btn>
                    <!-- <font-awesome-icon icon="sign-in-alt" />Login -->
                </router-link>
            </div>
    </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
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
  },

  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
