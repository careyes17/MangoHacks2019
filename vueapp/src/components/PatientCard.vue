<template>
  <v-card @click="newData(data)">
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{name}}</h3>
        <h5>{{age}} - {{careGiverToString(careGiver)}}</h5>
        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange">Message</v-btn>
      <v-btn flat color="orange">???</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    careGiver: {
      type: Object,
      required: true
    }
  },
  methods: {
    
    careGiverToString(data: {firstName: string, lastName: String}) {
      return `${data.firstName} ${data.lastName}`
    }
  }
})
</script>
