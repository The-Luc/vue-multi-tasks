<template>
  <v-app-bar app dark>
    <v-app-bar-title v-for="{ name, title } in routes" :key="name" class="mr-7">
      <router-link :to="{ name }">{{ title }}</router-link>
    </v-app-bar-title>
    <v-spacer />
    <v-app-bar-title>
      <router-link v-if="!isLoggedIn" :to="{ name: 'log-in' }" class="mr-7">Log In</router-link>
      <span v-else class="mr-4 text-subtitle-1 font-weight-thin">
        <v-icon>mdi-account</v-icon>
        {{ user.email }}
      </span>
    </v-app-bar-title>
    <v-app-bar-title>
      <router-link v-if="!isLoggedIn" :to="{ name: 'sign-up' }">Sign up</router-link>
      <v-btn v-else text @click="logUserOut">Logout</v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    routes: [
      { name: 'home', title: 'Home' },
      { name: 'question', title: 'Question' },
    ],
  }),
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapState('auth', ['user']),
  },
  methods: mapActions('auth', ['logUserOut']),
};
</script>

<style></style>
