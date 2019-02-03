<template>
  <div>
    <v-layout row wrap :key="index" v-for="(item, index) in viewPrescriptionInfo">
          <v-subheader
            v-if="item.header"
            :key="item.header">
            {{ item.header }}
          </v-subheader>

          <v-flex xs5 v-else :key="prescription.id" v-for="prescription in item.prescriptions" >
            <v-card class="mt-2 ml-1 mr-1">
              <v-card-title><h4>{{ prescription.drugName }}</h4></v-card-title>
              <v-divider></v-divider>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>Effectiveness:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ prescription.drugEffectiveDuration }} hours</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Frequency:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ prescription.drugFrequency }}/day</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Last Administration:</v-list-tile-content>
                  <v-list-tile-content :title="format(prescription.drugLastAdmin)" class="align-end"><timeago :datetime="prescription.drugLastAdmin" :auto-update="60"></timeago></v-list-tile-content>
                </v-list-tile>
              </v-list>
           </v-card>
        </v-flex>
      </v-layout>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

import { mapState, mapGetters, mapActions } from 'vuex';
export default Vue.extend({
  data() {
  },
  computed: {
    ...mapState('prescriptions', ['patients']),
    ...mapGetters('prescriptions', ['viewPrescriptionInfo'],)
  },
  methods: {
    ...mapActions('prescriptions', ['loadPrescriptions']),

    format(date: Date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  mounted() {
    this.loadPrescriptions();
  }
});
</script>

<style lang="scss">

</style>
