<template>
  <v-row justify="center" class="mt-10">
    <v-col cols="12" lg="6" sm="8">
      <v-form ref="form" @submit.prevent="handleSubmit">
        <v-card>
          <v-card-text>
            <v-text-field v-model="username" :rules="rules.username" label="Username" clearable />
            <v-text-field v-model="password" label="Password" :rules="rules.password" clearable type="password" />
          </v-card-text>
          <v-divider class="mb-5" />
          <v-card-actions>
            <v-spacer />
            <v-btn color="error" text @click="resetForm">Reset</v-btn>
            <v-btn color="success" text type="submit" @click="handleSubmit">
              Log In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    username: '',
    password: '',
    rules: {
      username: [v => (v && v.length > 3) || 'Min length is 3 characters'],
      password: [v => (v && v.length > 4) || 'Min length is 4 characters'],
    },
  }),

  computed: mapGetters(['getMsg']),

  methods: {
    handleSubmit() {
      console.log(this.username, this.password);
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
