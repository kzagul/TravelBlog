<template>
    <v-app-bar
      app
      class="grey darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 "
          contain
          src="../assets/Logo.png"
          transition="scale-transition"
          width="110"
        />
      </div>

      <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                            Экскурсии
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <router-link to="/locatepage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[0].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                        <v-list-item>
                            <router-link to="/locatepage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[1].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                        <v-list-item>
                            <router-link to="/directorpage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[2].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                         <v-list-item>
                            <router-link to="/contactspage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[3].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                         <v-list-item>
                            <router-link to="/trainerpage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[4].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                    </v-list>     
                </v-menu>
            </div>


      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Связаться с нами</span>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    
</template>


<script>
export default {
  data: () => ({
    dictsItems: [
            { 
                title: "Все экскурсии",
                route: '/locates'
            },
            { 
                title: "Автомобильные",
                route: '/locates'
            },
            { 
                title: "На автобусе",
                route: '/directors' 
            },
            { 
                title: "Пешие",
                route: '/contacts'
            },
            { 
                title:  "В музее",
                route: '/trainers' 
            },
        ],
  })
}
</script>