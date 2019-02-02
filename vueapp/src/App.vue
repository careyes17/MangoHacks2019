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

<script>
import Vue from 'vue';
import AppToolbar from './components/AppToolbar'
import AppDrawer from './components/AppDrawer'

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
  }
})
</script>
