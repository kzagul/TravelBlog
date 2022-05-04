<template>
<div >

    <v-dialog max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">{{currentCartTitle}}</v-card-title>
                        <v-divider></v-divider>

                        <v-card-subtitle class="text-h5" v-text="card.about"> </v-card-subtitle>

                    


                        <v-row class="justify-end align-end mx-16" >
                            <p class="font-weight-bold mx-4" v-text="card.typeexcursion"></p>
                            <p class="font-weight-bold mx-4" v-text="card.typevisiting"></p>
                        </v-row>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <!-- <v-btn color="accent-4" @click="closeInfoItem">
                                    Закрыть
                            </v-btn> -->
                            </v-card-actions>
                    </v-card>
            </v-dialog>



  <!-- <v-app id="inspire" class="mx-auto " row wrap justify-center spacing-playground pa-12 xs8>
    <h1>
        Добро пожаловать на портал по экскурсиям города Тюмени!
    </h1>
     <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
        Экскурсии
    </v-btn>
    
    <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#FFFFFF" plain>
        Экскурсии
    </v-btn>

    
  </v-app> -->
</div>
</template>

<script>
export default ({
  // el: '#app',
  data () {
    return {

        isShown: true,

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