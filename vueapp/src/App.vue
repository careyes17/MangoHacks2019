<template>
  <v-app>
    <AppToolbar />

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from './components/AppToolbar'

export default {
  name: 'App',
  components: {
    AppToolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
