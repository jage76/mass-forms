<template>
  <v-content>
  <v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <div>
        <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
          <v-text-field
            type="email"
            name="email"
            :rules="emailRules"
            label="Email"
            v-model="email"
            ></v-text-field>
          <br>
          <v-text-field
            type="password"
            name="password"
            label="Password"
            v-model="password"></v-text-field>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn
            class="blue"
            dark
            @click="register">Register</v-btn>
          </v-form>
        </v-card-text>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
  </v-content>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
