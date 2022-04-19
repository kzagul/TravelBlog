<template>
  <v-card
    class="mx-auto"
    max-width="900"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          md=4
        >

        <!-- InfoItem -->
        <template>
            <v-dialog v-model="showInfo" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">{{card.title}}</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                
                                <v-btn
                                    color="accent-4"
                                    @click="closeInfoItem">
                                    Закрыть
                                </v-btn>
                            </v-card-actions>
                    </v-card>
            </v-dialog>
        </template>


          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-title v-text="card.title"></v-card-title>

            </v-img>
            <v-card-subtitle v-text="card.text">

            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon color="accent-4">
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>


                <v-btn
                    text
                    color="accent-4"
                    @click="showInfo = true"
                >
                    Подробнее
                </v-btn>

              <!-- <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn> -->
            </v-card-actions>




          </v-card>
                
        </v-col>
      </v-row>
    </v-container>
    

  </v-card>
  
</template>


<script>
  export default {
    data(){
        return {
            dialog: false,
            showInfo: false,
            selectedItemIndex: -1,

      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,
            text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, 
            text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: "gweuiirgbwelfbewfgbeilgbe" },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, text: "gweuiirgbwelfbewfgbeilgbe"},
      ],
        }
    },

    methods: {
        showInfoItem(card) {
            this.selectedItemIndex = this.cards.indexOf(card)
            this.showInfo = true
        },
        closeInfoItem () {
            this.showInfo = false
            this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
        },
    }
  }
</script>