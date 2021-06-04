<template>
  <v-row justify="center" class="mt-10">
    <v-col cols="12" lg="6" sm="8">
      <v-form ref="form" @submit.prevent="handleSubmit">
        <v-card>
          <v-card-text>
            <h3 class="text-h3 text-center">Login</h3>
          </v-card-text>
          <v-card-text>
            <v-text-field v-model="email" :rules="rules.email" label="Email" />
            <v-text-field
              v-model="password"
              label="Password"
              :rules="rules.password"
              :type="isReveal ? 'text' : 'password'"
              :append-icon="isReveal ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="handleReveal"
            />
          </v-card-text>
          <v-divider class="mb-5" />
          <v-card-actions>
            <v-spacer />
            <v-btn color="error" text @click="resetForm">Reset</v-btn>
            <v-btn color="success" text type="submit">
              LogIn
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    email: '',
    password: '',
    isReveal: false,
    rules: {
      email: [v => (v && v.length > 3) || 'Min length is 3 characters'],
      password: [v => (v && v.length > 4) || 'Min length is 4 characters'],
    },
  }),

  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.signUserIn({ email: this.email, password: this.password });
      }
    },
    handleReveal() {
      this.isReveal = !this.isReveal;
      setTimeout(() => (this.isReveal = false), 2000);
    },
    resetForm() {
      this.$refs.form.reset();
    },
    ...mapActions('auth', ['signUserIn']),
  },
};
</script>

<style></style>
