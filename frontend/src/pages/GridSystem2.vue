<template>
  <v-card
    class="mx-auto"
    max-width="900"
    
  >
    <v-container fluid>
      <v-row dense >
        <v-col
          v-for="card in cards"
          :key="card.id"
          :cols=6
          md=4
          
        >

        <!-- InfoItem -->
            <!-- <v-dialog v-model="cardsDialogs[cards.indexOf(card)]" max-width="500px">
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
                            <v-btn color="accent-4" @click="choosenDialogClose">
                                    Закрыть
                            </v-btn>
                            </v-card-actions>
                    </v-card>
            </v-dialog> -->

          <v-card>
            <v-img
              :src=images[cards.indexOf(card)]
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >

            <v-card-title v-text="card.name"></v-card-title>

            </v-img>
            

            <v-row >
            
                <v-spacer></v-spacer>

            </v-row>
            

            <v-card-actions class="my-5">
                <v-spacer></v-spacer>

                <!-- iconsTypeExcursion[cart.typeexcursion_id - 1] -->
            
                <v-btn
                    text
                    color="accent-4"
                    @click="showInfoItem(card)"
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


<!-- 
    <v-btn  class="ma-1" large color="#FFFFFF" plain>
      Экскурсии
    </v-btn> -->
    

  </v-card>
  
</template>


<script>
import axios from 'axios'

export default {
  data(){
    return {
        id: '',
        currentCartTitle: '',
        dialog: false,


        currentCard: '',

        // 
        showInfo: false,

        selectedItemIndex: -1,

        image2: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',

        image:  '../assets/excursionImg/img1.jpeg',


        images: [
          'https://kudatumen.ru/uploads/c95da1b8064fbfeb84dc987ea4ef6d2e.jpg',
          'https://travel-or-die.ru/wp-content/uploads/2019/10/ekskursii-po-Tyumeni.jpg',
          'https://thumb.tildacdn.com/tild6539-6335-4265-b361-343935613064/-/resize/824x/-/format/webp/0146.JPG'
        ],



        currentIconE: '',
        currentIconv: '',

        iconsTypeExcursion: [
            'mdi-walk',
            'mdi-scooter',
            'mdi-greenhouse',
            'mdi-bus-side',
        ],
        iconsTypeVisiting: [
            'mdi-',
            'mdi-',
            'mdi-',
            'mdi-',
        ],


        cardsDialogs: [],


        cards: [],

        }
    },

    methods: {
        showInfoItem(card) {
            this.selectedItemIndex = this.cards.indexOf(card)
            this.currentCartTitle = this.cards[this.selectedItemIndex].name
            // this.showInfo = true
            console.log(this.cardsDialogs)
            this.chooseDialog(card)
        },

        chooseDialog(card) {
          // let num = this.cards.length
          let index = this.cards.indexOf(card)
          this.cardsDialogs[index] = true
           console.log(this.cardsDialogs)
        },

        choosenDialogClose() {
          this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
          // let index = this.cards.indexOf(card)
          // this.cardsDialogs[index] = false
          // console.log(this.cardsDialogs)

          for(let i = 0; i < this.cardsDialogs.length; i++) this.cardsDialogs[i] = false
        },


        getDialogValue(card) {
          return this.cardsDialogs[this.cards.indexOf(card)]
        },
        

        closeInfoItem () {
            this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
            this.showInfo = false
        },
        chooseIcon (cart) {
            if (cart.iconsTypeExcursion === "Пешая") this.currentIconE = this.iconStyles[0]
            else if (cart.iconsTypeExcursion === "На самокатах") this.currentIconE = this.iconStyles[1]
            else if (cart.iconsTypeExcursion === "В помещении") this.currentIconE = this.iconStyles[2]
            else if (cart.iconsTypeExcursion === "Автобус") this.currentIconE = this.iconStyles[3]
        },

        ff () {
            this.currentIconE = 'mdi-scooter'
        }
    },



    mounted() {
        axios
            .get('http://localhost:3002/api/excursions')
            .then(response => {
                console.log(response.data);
                this.cards = response.data
                console.log(response.data)
                for (let i = 0; i < this.cards.length; i++) this.cardsDialogs.push(false)
            })
            .catch(error => console.log(error))
    }
  }
</script>