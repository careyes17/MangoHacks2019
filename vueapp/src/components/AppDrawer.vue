<template>
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            PatientSafe
          </v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>

      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="option in items"
        :key="option.name">

        <v-list-tile-content>
          <router-link :to="option.route" ><v-list-tile-title>{{ option.name }}</v-list-tile-title></router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {ListItem} from '../types'

import Vue from 'vue';
  const items: ListItem[] = [
    {name: "Prescriptions", route: '/prescriptions'},
    {name: "Messages", route: '/messages'},
    {name: "Event Log", route: '/events'},
    {name: "Google Home", route: '/integration'},
    {name: "Music", route: '/music'},
    {name: "Contact Information", route: '/contact'}
  ]
export default Vue.extend({
  data() {
    return {
      items
    }
  }
})
</script>

<style>

</style>
