<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container class="p-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from './utilities/firebase';
import { mapMutations } from 'vuex';

import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const payload = {
          id: user.uid,
          email: user.email,
        };
        this.saveUser(payload);
      } else {
        console.log('You have not logged in');
      }
    });
  },
  methods: mapMutations('auth', ['saveUser']),
};
</script>

<style lang="scss">
a {
  color: #fff !important;
  text-decoration: none;
}
</style>
