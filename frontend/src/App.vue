<template>
  <div id="app">
    <v-app>
      <HeaderBar />
      <v-main>
        <!-- <router-view></router-view> -->
        <!-- <HomePage /> -->
        <router-view></router-view>
      </v-main>
      <FooterBar />
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
// import HomePage from './pages/HomePage.vue';

export default {
  name: 'app',

  components: {
    // HomePage,
    HeaderBar,
    FooterBar
  },

  data: () => ({
    //
  }),
};
</script>
