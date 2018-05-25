<template>
  <v-toolbar color="primary" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title >MassForms</v-toolbar-title>
        <v-toolbar-items>
          <v-btn flat dark>
            Browse
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
           <v-btn flat dark to="login">
            Login
          </v-btn>
          <v-btn flat dark to="register">
            Sign Up
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
