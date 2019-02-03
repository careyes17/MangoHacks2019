<template>
  <v-card @click="newData(data)">
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{name}}</h3>
        <h5>{{age}} - {{careGiverToString(careGiver)}}</h5>
        <p>{{events.join('\n')}}</p>
        <!-- <ul>
          <li :key="index" v-for="(event, index) in events">
            {{event}}
          </li>
        </ul> -->
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="blue">Message</v-btn>
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
    },
    events: Array
  },
  methods: {
    
    careGiverToString(data: {firstName: string, lastName: String}) {
      return `${data.firstName} ${data.lastName}`
    }
  }
})
</script>
