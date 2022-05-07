<template>
<div >
  <v-app id="inspire" class="mx-auto ">
    <v-container fluid>
        <v-layout row wrap justify-center>
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
                                        <v-card color="grey" class="pa-2">
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
            src: "https://ac-sport.ru/upload/iblock/a6f/a6f271acf551675e334fd1420dfe0397.jpg",
            discription: "Бассейн в Академии спорта"
        },
        {
            src: "https://sportgyms.ru/uploads/posts/2016-06/1464857702_02.jpg",
            discription: "Фитнес клуб Даудель спорт"
        },
        {
            src: "https://www.skisport.ru/upload/iblock/b18/b18404afcdca170ad359899fd63b9003.jpg",
            discription: "Жемчужина сибири"
        }
      ]
    }
  }
})
</script>