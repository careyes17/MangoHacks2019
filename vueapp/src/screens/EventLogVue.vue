<template>
  
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState, mapActions} from 'vuex';
export default Vue.extend({
  computed: {
    ...mapState('eventLogs', ['patients'])
  },
  methods: {
    ...mapActions('eventLogs', ['loadEvents'])
  },
  mounted() {
    this.loadEvents();
  }
})
</script>

<style lang="scss">

</style>
