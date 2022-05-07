<template>
    <v-app-bar
      app
      class="grey darken-3"
      dark
    >
       <router-link :to="'/'" exact class="d-flex align-center">
            <img src="../assets/Logo.png"  width="110"/>
        </router-link>


        <router-link to="/" exact style="text-decoration: none; color: inherit;">
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                Экскурсии
            </v-btn>
        </router-link>

      <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
                            Реестры
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
                            <router-link to="/typeofexcursions" exact style="text-decoration: none; color: inherit;">
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
  })
}
</script>