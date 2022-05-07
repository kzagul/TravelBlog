<template>
    <div v-if="locate" class="ml-5">
        <h3>Подробная информация о локации {{locate.address}} </h3>
        <p>ID : {{locate.id}}</p>
        <p>Адрес : {{locate.address}}</p>
        <p>Долгота : {{locate.longitude}}</p>
        <p>Широта : {{locate.latitude}}</p>
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
                .get(`http://localhost:3000/api/locate/${this.$route.params.id}`)
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
