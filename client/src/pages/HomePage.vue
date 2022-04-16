<template>
<div >
  <v-app id="inspire" class="mx-auto " row wrap justify-center spacing-playground pa-12 xs8>
    <h1>
        Добро пожаловать на портал с AR экскурсиями по Тюмени
    </h1>
    <v-container fluid>
        <v-layout row wrap justify-center align-cente>
            <v-flex xs8>
                <v-carousel hide-delimiters>
                    <v-carousel-item v-for="(item,i) in items" :key="i"  :src="item.src" >
                        <v-container
                                fill-height
                                fluid
                                pa-0 ma-0 pb-3 
                                >
                                <v-layout fill-height align-end pb-4 mb-4>
                                    <v-flex xs12>
                                        <v-card class="pa-2 grey darken-3">
                                            <span class="headline white--text" v-text="item.discription"></span>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-carousel-item>
                </v-carousel>

            </v-flex>
        </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
export default ({
  // el: '#app',
  data () {
    return {
      items: [
        {
            src: "https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/5a97efce-83fb-11ec-999a-c226f5230a57.800x600.jpeg",
            discription: "Вся Тюмень за один день"
        },
        {
            src: "https://thumb.tildacdn.com/tild6539-6335-4265-b361-343935613064/-/resize/824x/-/format/webp/0146.JPG",
            discription: "Экскурсия по Тюмени"
        },
        {
            src: "https://gorod-t.info/upload/resize_cache/iblock/8ce/900_900_1/2003_1.jpg",
            discription: "Прогулка по центру"
        }
      ]
    }
  }
})
</script>