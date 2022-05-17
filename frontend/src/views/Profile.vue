<template>
  <div class="container">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong>
      </h3>
    </header>
          <v-card-text>
            <!-- <v-text-field :value=locate.id label="ID" readonly></v-text-field>
            <v-text-field :value=locate.address label="Адрес" readonly></v-text-field>
            <v-text-field :value=locate.area label="Район" readonly></v-text-field>
            <v-text-field :value=locate.longitude label="Долгота" readonly></v-text-field>
            <v-text-field :value=locate.latitude label="Широта" readonly></v-text-field> -->

            <!-- <v-text-field :value="currentUser.accessToken.substring(0, 20) + `...` + currentUser.accessToken.substr(currentUser.accessToken.length - 20)" label="Token" readonly></v-text-field>
            <v-text-field value="currentUser.id" label="ID" readonly></v-text-field> -->

            <p>
              <strong>Token:</strong>
              {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
            </p>
            <p>
              <strong>Id:</strong>
              {{currentUser.id}}
            </p>
            <p>
              <strong>Email:</strong>
              {{currentUser.email}}
            </p>
            <strong>Authorities:</strong>
            <ul>
              <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>