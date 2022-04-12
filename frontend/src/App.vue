<template>
  <v-app>
    <HeaderBar />
    <v-main>
      <HelloWorld/>
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    HeaderBar,
    FooterBar
  },

  data: () => ({
    //
  }),
};
</script>
