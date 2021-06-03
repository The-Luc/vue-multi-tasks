<template>
  <v-app-bar app dark>
    <v-app-bar-title v-for="{ name, title } in routes" :key="name" class="mr-7">
      <router-link :to="{ name }">{{ title }}</router-link>
    </v-app-bar-title>
    <v-spacer />
    <v-app-bar-title>
      <router-link :to="{ name: 'log-in' }" class="mr-7">Log In</router-link>
    </v-app-bar-title>
    <v-app-bar-title>
      <router-link :to="{ name: 'sign-up' }">Sign up</router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { name: 'home', title: 'Home' },
      { name: 'question', title: 'Question' },
    ],
  }),
};
</script>

<style></style>
