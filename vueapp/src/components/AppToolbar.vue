<template>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <span>BetterCare</span>
      <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <span class="mr-2">Recent User Update</span>
    <v-btn flat>
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "AppToolbar"
})
</script>

<style>

</style>
