<template>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <span>BetterCare</span>
      <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <ApolloQuery
      :query="mostRecentEventQuery"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo"><span class="mr-2">{{mostRecentEvent(data)}}</span></div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

    <v-btn flat>
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import apolloQueries from '../apolloQueries'

export default Vue.extend({
  name: 'AppToolbar',
  data() {
    return {
      mostRecentEventQuery: apolloQueries.mostRecentEvent
    }
  },
  methods: {
    mostRecentEvent(data: any) {
      return data.mostRecentEvent.items[0].events.reverse()[0]
    }
  }
})
</script>

<style>

</style>
