<template>
  <v-app>
    <AppToolbar />            

    <v-content>
      <v-layout row wrap>
        <v-flex xs4>
          <AppDrawer />
        </v-flex>

        <v-flex>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppToolbar from './components/AppToolbar.vue'
import AppDrawer from './components/AppDrawer.vue'
import {onLogin} from './vue-apollo'

export default Vue.extend({
  name: 'App',
  components: {
    AppToolbar,
    AppDrawer,
  },
  data () {
    return {
      //
    }
  },
  async mounted() {
    const apolloClient = this.$apollo.provider.defaultClient;
    await onLogin(apolloClient, {})
  }
})
</script>
