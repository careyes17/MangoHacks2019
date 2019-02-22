<template>
  <v-navigation-drawer permanent id="mainDrawerRoot">
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
import {ListItem} from '../types';

import Vue from 'vue';
const items: ListItem[] = [
    {name:'Patients', route: '/patients'},
    {name:'Prescriptions', route: '/prescriptions'},
    {name:'Messages', route: '/messages'},
    {name:'Event Log', route: '/events'},
    {name:'Google Home', route: '/integration'},
    {name:'Music', route: '/music'},
    {name:'Contact Information', route: '/contact'}
  ];
export default Vue.extend({
  data() {
    return {
      items
    };
  }
  });
</script>

<style scoped>

#mainDrawerRoot {
  height: 100%
}
</style>
