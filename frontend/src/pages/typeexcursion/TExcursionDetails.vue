<template>
    <div v-if="excursion" class="ml-5">
       <router-link :to="'/typeofexcursions'" exact style="text-decoration: none; color: inherit;">
                
          <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                    Назад к таблице
            </v-btn>

         </router-link>

        <h2 class="d-flex justify-center mb-6 mt-6">Подробная информация: {{excursion.typeexcursion}} </h2>

        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card ref="form">
                    <v-card-text>
                        <v-text-field :value=excursion.id label="ID" readonly></v-text-field>
                        <v-text-field :value=excursion.typeexcursion label="Тип экскурсии" readonly></v-text-field>
                    </v-card-text>
                
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            excursion: null
        }
    },
    methods: {
        fetchData() {
            axios
                .get(`http://localhost:3002/api/typeexcursion/${this.$route.params.id}`)
                .then(response => {
                    this.excursion = response.data[0]
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        }
    },
    created() {
        this.fetchData()
    }
}
</script>
