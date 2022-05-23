<template>
    <div v-if="locate" class="ml-5">

        <router-link :to="'/'" exact style="text-decoration: none; color: inherit;">
                
          <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                    На главную
            </v-btn>

         </router-link>


        <h2 class="d-flex justify-center mb-6 mt-6">Подробная информация: {{locate.name}} </h2>

        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card ref="form">
                    <v-card-text>
                        <v-text-field :value=locate.id label="ID" readonly></v-text-field>
                        <v-text-field :value=locate.name label="Наименование" readonly></v-text-field>
                    </v-card-text>
                    <v-divider class="mt-12"></v-divider>
                
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
            locate: null
        }
    },
    methods: {
        fetchData() {
            axios
                .get(`http://localhost:3002/api/excursions/${this.$route.params.id}`)
                .then(response => {
                    this.locate = response.data[0]
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
