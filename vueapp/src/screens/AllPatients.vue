<template>
  <div>
    <h1>{{numPatients || 0}}</h1>
    <v-layout row wrap>
      <v-flex xs3 class="mt-4 ml-3" :key="patient.id" v-for="patient of patients">
        <v-card   @click="newData(data)">
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img> -->

          <v-card-title>
            <div>
              <h3 class="headline mb-0">{{patient.firstName}} {{patient.lastName}}</h3>
              <h5>{{patient.age}} - {{careGiverToString(patient.careGiver)}}</h5>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Message</v-btn>
            <v-btn flat color="orange">???</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
          
          <!-- <li v-for="user of data" @click="newData(data)"> -->
            <!-- {{user}} -->
            <!-- {{ user.firstName }}: {{user.__typename}} -->
          <!-- </li> -->
    <v-btn @click="getAllPatients">CLick</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState, mapActions, mapGetters} from 'vuex';
export default Vue.extend({
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
  methods: {
    ...mapActions('allPatients', ['getAllPatients']),
    newData(data) {console.log(data)},

    careGiverToString(data: {firstName: string, lastName: String}) {
      return `${data.firstName} ${data.lastName}`
    }
  }
})
</script>
