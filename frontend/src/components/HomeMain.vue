<template>
<div id="app">
  <v-app id="inspire">
    <v-carousel>
      <v-carousel-item
        eager
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
           
      >
      <v-container
                      fill-height
                      fluid
                      pa-0 ma-0 pb-3 

                    >
                      <v-layout fill-height align-end pb-10 mb-4>
                        <v-flex xs12>
                          <v-card color="white" class="pa-2">
                          <span class="headline dark--text" v-text="item.text">                               </span>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container></v-carousel-item>
  </v-carousel>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://media.1istochnik.ru/attachments/istochnik/publications/10/101936/large_1623093459-987e8d3d03.jpeg',
          text: "Самая красивая набережная в центре Тюмени!"
        },
        {
          src: 'https://5seasons-perm.ru/wp-content/uploads/2019/11/tyumen-2.jpg',
          text: "Тюмень красит большое количество церквей и соборов"
        },
        {
          src: 'https://img.tourister.ru/files/9/8/7/1/6/5/3/original.jpg',
          text: "Центральный бульвар - отличное место для прогулки и детей и взрослых!"
        },
        {
          src: 'https://img.geliophoto.com/tmn/58_tumen.jpg',
          text: "Виды ночной Тюмени покорят вас"
        },
      ],
    }
  },
}

</script>
