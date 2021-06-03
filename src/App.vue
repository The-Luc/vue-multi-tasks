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
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
a {
  color: #fff !important;
  text-decoration: none;
}
</style>
