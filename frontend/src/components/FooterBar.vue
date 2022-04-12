<template>
<div>

  <v-footer padless app>
    <v-col
        class="grey darken-3 text-center white--text"
        cols="12"
      >

          {{ new Date().getFullYear() }} — <strong>TravelBlog Tyumen</strong>
    </v-col>
   </v-footer>
  </div>
</template>


<script>
  export default {
    data: () => ({
      
    }),
  }
</script>