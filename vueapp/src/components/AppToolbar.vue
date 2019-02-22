<template>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <span>BetterCare</span>
      <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div v-if="!recentEvent">Loading...</div>

    <!-- Result -->
    <div v-else class="result apollo"><span class="mr-2">{{recentEvent}}</span></div>

    <v-btn flat>
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import thisVue from '../main'
import apolloQueries from '../apolloQueries'
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  name: 'AppToolbar',
  data() {
    return {
      mostRecentEventQuery: apolloQueries.mostRecentEvent
    }
  },
  computed: {
    ...mapState('eventLogs', ['recentEvent'])
  },
  methods: {
    ...mapActions('eventLogs', ['loadMostRecent'],),
    mostRecentEvent(data: any) {
      return data.mostRecentEvent.items[0].events.reverse()[0]
    }
  },
  async mounted() {
    await this.loadMostRecent()
    const mostRecentFun = this.loadMostRecent;
    setTimeout(function() {mostRecentFun()},5000)
  }
})
</script>

<style>

</style>
