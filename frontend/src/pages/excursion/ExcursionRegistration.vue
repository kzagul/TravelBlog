<template>
    <div>
        <router-link :to="'/excursionpage'" exact style="text-decoration: none; color: inherit;">
                
          <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                    Назад к таблице
            </v-btn>

         </router-link>
        <ExcursionForm/>
    </div>
</template>

<script>
// import LocateForm from '../../components/locate/LocateForm.vue'
import ExcursionForm from '../../components/excursion/ExcursionRegistrationForm.vue'

export default {
    components: {
        ExcursionForm
    }
}
</script>