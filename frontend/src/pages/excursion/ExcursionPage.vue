<template>
    <div>
        <v-card class="d-flex justify-center mx-auto mb-5">
            <div>
            <h2 class="mx-auto mt-2">Экскурсии</h2>
            </div>
        </v-card>
        <ExcursionTable />
        <div id="button">
            <router-link :to="'/register-new-locate'" exact style="text-decoration: none; color: inherit;">
                <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-plus
                    </v-icon>
                    Добавить
                </v-btn>
            </router-link>
        </div>
         <!-- <div id="button">
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-microsoft-excel
                </v-icon>
                    Экспорт 
                </v-btn>
        </div> -->
    </div>
</template>

<script>
import ExcursionTable from '../../components/excursion/ExcursionTable.vue'

export default {
    name: 'Home',
    components: {
        ExcursionTable,
    }
}
</script>

<style scoped>
#button {
    display: flex;
    width:85%;
    margin: auto;
    justify-content: center;
}
</style>