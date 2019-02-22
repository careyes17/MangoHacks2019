<template>
  <v-navigation-drawer permanent right>
    <v-list>
      <v-list-tile two-line>
        <v-list-tile-avatar>
          <img src="https://i.imgur.com/GmMymJz.png">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Tammy</v-list-tile-title>
          <v-list-tile-sub-title>Since 3pm</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      

      <!-- <v-list-tile
        v-for="option in items"
        :key="option.name">

        <v-list-tile-content>
          <router-link :to="option.route" ><v-list-tile-title>{{ option.name }}</v-list-tile-title></router-link>
        </v-list-tile-content>
      </v-list-tile> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>