<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3 class="mt-4 ml-3" :key="patient.id" v-for="patient of patients">
        <PatientCard 
          v-bind:name="`${patient.firstName} ${patient.lastName}`"
          :age="patient.age"
          :careGiver="patient.careGiver"
          :events="patient.events"
          @click="patientSelected($event, patient)"/>
      </v-flex>
      <v-flex>
        {{currentPatient}}
      </v-flex>
    </v-layout>
    <!-- <v-btn @click="getAllPatients">CLick</v-btn> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PatientCard from '@/components/PatientCard.vue'
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
import { LeanPatient } from '../types';

export default Vue.extend({
  components: {
    PatientCard
  },
  data() {
    return {
      listPatients: this.$store.state.allPatients.patients,
    }
  },
  computed: {
      ...mapGetters('allPatients', ['numPatients']),
      ...mapState('allPatients', ['currentPatient', 'patients']),

  },
  watch: {
  },
  mounted() {
    this.getAllPatients();
  },
  methods: {
    ...mapActions('allPatients', ['getAllPatients']),
    ...mapMutations('allPatients', ['updateCurrentPatient']),
    newData(data) {console.log(data)},
    patientSelected(patient: LeanPatient) {
      this.updateCurrentPatient(patient)
    }
  }
})
</script>
