<template>
    <v-app-bar
      app
      class="grey darken-3 "
      dark
      justify-between
    >
        <router-link  :to="'/'" exact class="d-flex align-center">
            <img src="../assets/Logo.png"  width="110"/>
        </router-link>
           
    
        <router-link v-if="currentUser" to="/" exact style="text-decoration: none; color: inherit;">
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                    Главная
            </v-btn>
         </router-link>
            


        <router-link v-if="currentUser" to="/excursiongrid" exact style="text-decoration: none; color: inherit;">
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                Экскурсии
            </v-btn>
        </router-link>

      <div class="text-center" v-if="currentUser && showAdminBoard">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                            Реестры
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <router-link to="/excursionpage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[0].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                        <v-list-item>
                            <router-link to="/typeofexcursions" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[1].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                        <v-list-item>
                            <router-link to="/typeofvisiting" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[2].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                    </v-list>     
                </v-menu>
            </div>

      <v-spacer></v-spacer>

        <!--  -->

            <div v-if="!currentUser" class="text-center">
                <!-- class="navbar-nav ml-auto" -->
                
                <router-link to="/register" style="text-decoration: none; color: inherit;">
                    <v-btn  class="ma-1" large color="#FFFFFF" plain>
                        <v-icon>mdi-account-plus</v-icon>
                        Регистрация
                    </v-btn>
                    <!-- <font-awesome-icon icon="user-plus" />Sign Up -->
                </router-link>

                <router-link to="/login" style="text-decoration: none; color: inherit;">
                   
                    <v-btn  class="ma-1" large color="#FFFFFF" plain  >
                        <v-icon>mdi-login</v-icon>
                        Войти
                    </v-btn>
                    <!-- <font-awesome-icon icon="sign-in-alt" />Login -->
                </router-link>
            </div>


            <div v-if="currentUser" class="text-center">
                <router-link to="/profile" style="text-decoration: none; color: inherit;">
                    <v-btn  class="ma-1" large color="#FFFFFF" plain>
                        <v-icon>mdi-account</v-icon>
                        {{ currentUser.username }}
                    </v-btn>
                </router-link>
                <v-btn  class="ma-1" large color="#FFFFFF" plain href @click.prevent="logOut">
                    <v-icon>mdi-logout</v-icon>
                     Выйти
                </v-btn>
            </div>
        


        <!--  -->



      <!-- <v-btn href="" target="_blank" text>
        <span class="mr-2">Связаться с нами</span>
        <v-icon>mdi-email</v-icon>
      </v-btn> -->


    </v-app-bar>
    
</template>


<script>
export default {
  data: () => ({
    dictsItems: [
            { 
                title: "экскурсии",
                route: '/locates'
            },
            { 
                title: "Типы экскурсий",
                route: '/locates'
            },
            { 
                title: "Типы посещений",
                route: '/locates' 
            },
        ],
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
}
</script>