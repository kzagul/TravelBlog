<template>
    <div>
        <router-link :to="'/typeofexcursions'" exact style="text-decoration: none; color: inherit;">
                
          <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
                    Назад к таблице
            </v-btn>

         </router-link>
        <TExcursionRegistrationForm/>
    </div>
</template>

<script>
// import LocateForm from '../../components/locate/LocateForm.vue'
import TExcursionRegistrationForm from '../../components/typeexcursion/TExcursionRegistrationForm.vue'

export default {
    components: {
        TExcursionRegistrationForm
    }
}
</script>