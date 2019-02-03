<template>
  <v-app id="appRoot">
    <AppToolbar />            

    <v-content>
      <v-layout row wrap>
        <v-flex xs2 sm2>
          <AppDrawer />
        </v-flex>

        <v-flex>
          <router-view></router-view>
        </v-flex>

        <v-flex xs2 sm2>
          <PatientSideInfo></PatientSideInfo>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppToolbar from './components/AppToolbar.vue'
import AppDrawer from './components/AppDrawer.vue'
import PatientSideInfo from './components/PatientSideInfo.vue'
import {onLogin} from './vue-apollo'

export default Vue.extend({
  name: 'App',
  components: {
    AppToolbar,
    AppDrawer,
    PatientSideInfo
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

<style scoped>
  #appRoot {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>

