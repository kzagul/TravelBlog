<template>
  <div class="container" >

    <div v-if="currentUser">
      <GridSystem />
    </div>

    <div v-if="!currentUser">
      <v-card 
        class="grey lighten-2 grey--text text--darken-3 flex justify-center mx-auto mb-5  px-7" max-width="700" >
        <!-- <div class="grey darken-2 text-center">
             <img v-if="!currentUser" src="@/assets/Logo.png" width="auto"/>
        </div> -->
          <div class="text-center ">
            <h1>Добро пожаловать на портал <span><br><b><i> TravelBlog Tyumen</i></b></span></h1>
          </div>
          <v-divider></v-divider>


          <div v-if="!currentUser" class="text-center">
            <div >
              <h6>Чтобы продолжить, вам необходимо <i>авторизоваться</i> или <i>создать новый аккаунт</i></h6>
            </div>
              
                
                <router-link to="/register" style="text-decoration: none; color: inherit;">
                    <v-btn  class="ma-1 grey--text text--darken-3" large plain>
                        <v-icon>mdi-account-plus</v-icon>
                        Регистрация
                    </v-btn>
                    <!-- <font-awesome-icon icon="user-plus" />Sign Up -->
                </router-link>

                <router-link to="/login" style="text-decoration: none; color: inherit;">
                   
                    <v-btn  class="ma-1 grey--text text--darken-3" large plain  >
                        <v-icon>mdi-login</v-icon>
                        Войти
                    </v-btn>
                    <!-- <font-awesome-icon icon="sign-in-alt" />Login -->
                </router-link>
            </div>
          </v-card>
        </div>
    </div>
</template>

<script>
import UserService from '../services/user.service';

import GridSystem from '../pages/GridSystem3.vue'

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  components: {
    GridSystem
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

