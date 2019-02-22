<template>
  <v-list>
    <template v-for="(item, index) in viewFriendlyPatients">
      <v-subheader
        v-if="item.header"
        :key="item.header"
      >
        {{ item.header }}
      </v-subheader>

      <v-divider
        v-else-if="item.divider"
        :inset="item.inset"
        :key="index"
      ></v-divider>

      <v-list-tile
        v-else
        :key="event.id"
        v-for="event in item.events"
      >
        <v-list-tile-content>
          {{event}}
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState, mapActions, mapGetters} from 'vuex';
export default Vue.extend({
  computed: {
    ...mapState('eventLogs', ['patients']),
    ...mapGetters('eventLogs', ['viewFriendlyPatients'],)
  },
  methods: {
    ...mapActions('eventLogs', ['loadEvents'],)
  },
  mounted() {
    this.loadEvents();
  }
});
</script>

<style lang="scss">

</style>
