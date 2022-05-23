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
        <TExcursionForm edit />
    </div>
</template>

<script>
import TExcursionForm from '../../components/typeexcursion/TExcursionForm.vue'

export default {
    components: {
        TExcursionForm
    }
}
</script>