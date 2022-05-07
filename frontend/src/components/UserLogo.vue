<template>
    <v-row justify="right"  align="center" class="spacer" no-gutters>
            <v-col class="hidden-xs-only" sm="12" md="12">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                            Admin
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
                            <router-link to="/directorpage" exact style="text-decoration: none; color: inherit;">
                                <v-list-item-title>
                                    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                        {{ dictsItems[1].title }}
                                    </v-btn>
                                </v-list-item-title>
                            </router-link>
                        </v-list-item>

                    </v-list>     
                </v-menu>
        
                <v-avatar color="grey lighten">
                    <span class="white--text text-h6">
                        A
                    </span>
                </v-avatar>

            </v-col>
            <v-col >
                
            </v-col>
    </v-row>
</template>

<script>


  export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          icon: 'mdi-tag',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
        
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ],
      
      home: {
            title: "Главная",
            link: '/homepage'
        },
        sportInstitution: {
            title: "Спорт учреждения",
            link: '/sportinstitutions'
        },
        locate: {
            title: "Локации",
            link: '/locates'
        },

        items: [
            {
                title: "Главная",
                link: '/home'
            },
            {
                title: "Спорт учреждения",
                link: '/sportinstitutions'
            },
            {
                title: "Локации",
                link: '/locates'
            }
        
        ],

        dictsItems: [
            { 
                title: 'Профиль',
                route: '/locates'
            },
            { 
                title: 'Выйти',
                route: '/directors' 
            },
            { 
                title: 'Контакты',
                route: '/contacts'
            },
            { 
                title: 'Тренера',
                route: '/trainers' 
            },
        ],


    }),
  }
</script>