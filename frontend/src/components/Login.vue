<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar color="#ECEFF1">
                        <img src="@/assets/images/sportLogo.png" style="width: 100px"/>
                        <v-toolbar-title>Авторизация</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="mgi-person"
                              name="login"
                              label="Логин"
                              type="text"
                              v-model="login"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="mgi-lock"
                              name="password"
                              label="Пароль"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-on:click="toLogin" v-model="closeDelete" color="#ECEFF1" to="/">Войти</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
import axios from 'axios'
// import App from '../App.vue'

export default {
   name: 'Login',
   props: {
      source: String,
   },
   
   data() {
      return{

         isEntered: false,

         fullname: "",

         alogin: "",
         password: "",

         role: "",


         admins: []
      }
   },

   computed: {
        success(){
            return this.isEntered == true
        },
    },


   //
   mounted() {
        axios
            .get('http://localhost:3001/api/useradmins')
            .then(response => {
                this.admins = response.data
                console.log(response.data)
            })
            .catch(error => console.log(error))
   },

   methods: {
      async toLogin() {
         
         console.log(this.admins[0].role)
         console.log(this.login.value)
      // const { fullname, login, password, role } = this;
      // const res = await fetch(
      //   "http://localhost:3001/api/useradmins",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
            
      //     })
      //   }
      // );
      // const data = await res.json();
      // console.log(data);
      }
   }
    

};
</script>

<style></style>
